import axios from 'axios'

// Validate environment variables
const validateEnvVars = () => {
  const requiredVars = ['STRAPI_API_URL', 'STRAPI_API_TOKEN']
  const missing = requiredVars.filter(varName => !process.env[varName])
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
  
  // Additional validation
  if (!process.env.STRAPI_API_URL?.startsWith('http')) {
    throw new Error('STRAPI_API_URL must start with http:// or https://')
  }
  
  if (!process.env.STRAPI_API_TOKEN || process.env.STRAPI_API_TOKEN.length < 10) {
    throw new Error('STRAPI_API_TOKEN appears to be invalid or too short')
  }
}

// Validate on module load
validateEnvVars()

const strapiAPI = axios.create({
  baseURL: `${process.env.STRAPI_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
})
export const getStrapiURL = (path = '') => {
  return `${process.env.STRAPI_API_URL}${path}`
}

export const getStrapiMedia = (media: any) => {
  if (!media) return null
  const { url } = media.data.attributes
  return url.startsWith('/') ? getStrapiURL(url) : url
}

export const fetchAPI = async (path: string, urlParams = {}, retries = 3) => {
  const mergedOptions = {
    params: {
      populate: '*',
      ...urlParams,
    },
  }

  for (let i = 0; i < retries; i++) {
    try {
      const response = await strapiAPI.get(path, mergedOptions)
      return response.data
    } catch (error: any) {
      // Only log errors in development or if it's the final attempt
      if (process.env.NODE_ENV === 'development' || i === retries - 1) {
        console.error(`Error fetching from Strapi (attempt ${i + 1}/${retries}):`, {
          message: error.message,
          status: error.response?.status,
          url: error.config?.url,
        })
      }
      
      // If this is the last attempt, throw the error
      if (i === retries - 1) {
        throw error
      }
      
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000))
    }
  }
}

// Fetching specific content types
export const getArticles = async (params = {}) => {
  return await fetchAPI('/articles', params)
}

export const getArticle = async (slug: string, params = {}) => {
  return await fetchAPI('/articles', {
    filters: { slug },
    ...params,
  })
}

export const getCategories = async (params = {}) => {
  return await fetchAPI('/categories', params)
}

export const getCategory = async (slug: string, params = {}) => {
  return await fetchAPI('/categories', {
    filters: { slug },
    ...params,
  })
}
