'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'

const Player = dynamic(
  () => import('@streamfizz/player').then((mod) => ({ default: mod.Player })),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-full">
        <div className="mx-auto aspect-video w-full h-full max-w-full overflow-hidden shadow-lg rounded-2xl">
          <Skeleton className="w-full h-full" />
        </div>
      </div>
    ),
  }
)

interface MediaData {
  id: string
  title: string
  createdAt: string
  selectedThumbCdnUrl: string
  duration: number
  playlistCdnUrl: string
  newThumbnailVttCdnUrl: string
}

interface StreamFizzPlayerProps {
  mediaId: string
}

export default function StreamFizzPlayer({ mediaId }: StreamFizzPlayerProps) {
  const [media, setMedia] = useState<MediaData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('https://backend-public-stellate.streamfizz.live/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query GetMediaBasicInfo($id: ID!) {
                media(id: $id) {
                  id
                  title
                  createdAt
                  selectedThumbCdnUrl
                  duration
                  playlistCdnUrl
                  newThumbnailVttCdnUrl
                }
              }
            `,
            variables: { id: mediaId },
          }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (data.errors) {
          throw new Error(data.errors[0]?.message || 'GraphQL error')
        }

        if (!data.data?.media) {
          throw new Error('Media not found')
        }

        setMedia(data.data.media)
      } catch (err) {
        console.error('Error fetching media:', err)
        setError(err instanceof Error ? err.message : 'Failed to load media')
      } finally {
        setLoading(false)
      }
    }

    if (mediaId) {
      fetchMedia()
    }
  }, [mediaId])

  if (loading) {
    return (
      <div className="relative h-full">
        <div className="mx-auto aspect-video w-full h-full max-w-full overflow-hidden shadow-lg rounded-2xl">
          <Skeleton className="w-full h-full" />
        </div>
      </div>
    )
  }

  if (error || !media) {
    return null
  }

  return (
    <div className="relative h-full">
      <div className="mx-auto aspect-video w-full h-full max-w-full overflow-hidden shadow-lg rounded-2xl">
        {/* @ts-ignore */}
        <Player media={media} showTheaterButton={false} />
      </div>
    </div>
  )
}
