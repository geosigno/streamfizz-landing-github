import Script from 'next/script'

interface StructuredDataProps {
  data: object | object[]
  id: string
}

export default function StructuredData({ data, id }: StructuredDataProps) {
  const jsonLdData = Array.isArray(data) ? data : [data]
  
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdData)
      }}
    />
  )
}

// Convenience component for pages with organization schema
interface PageStructuredDataProps {
  schema: object
  id: string
  includeOrganization?: boolean
}

export function PageStructuredData({ 
  schema, 
  id, 
  includeOrganization = true 
}: PageStructuredDataProps) {
  const { getOrganizationSchema } = require('@/lib/structured-data')
  
  const data = includeOrganization 
    ? [schema, getOrganizationSchema()]
    : schema

  return <StructuredData data={data} id={id} />
}