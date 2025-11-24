import { revalidatePath } from 'next/cache'
import { getArticles, getCategories } from '@/lib/strapi'
import { ARTICLES_PER_PAGE } from '@/lib/constants'

export async function POST(request: any) {
  try {
    // Get the request body
    const body = await request.json()

    // Optional: Verify a secret token to ensure the request is coming from Strapi
    const secret = request.headers.get('x-revalidation-token')

    if (secret !== process.env.REVALIDATION_TOKEN) {
      return new Response(JSON.stringify({ message: 'Invalid token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Check which type of content was updated
    const model = body.model
    const entry = body.entry

    if (model === 'article') {
      // Revalidate the specific article page
      revalidatePath(`/blog/${entry.slug}`)

      // Revalidate the main blog page
      revalidatePath('/blog')

      // Revalidate category pages if the article has categories
      if (entry.categories && entry.categories.length > 0) {
        for (const category of entry.categories) {
          revalidatePath(`/blog/category/${category.slug}`)
          // Also revalidate category pagination pages
          await revalidateCategoryPaginationPages(category.slug)
        }
      }

      // Revalidate all pagination pages
      await revalidatePaginationPages()

      // Revalidate sitemap
      revalidatePath('/sitemap.xml')

      return new Response(JSON.stringify({ revalidated: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (model === 'category') {
      // Revalidate the specific category page
      revalidatePath(`/blog/category/${entry.slug}`)

      // Revalidate main blog page (category filters)
      revalidatePath('/blog')

      // Revalidate category pagination pages
      await revalidateCategoryPaginationPages(entry.slug)

      // Revalidate sitemap
      revalidatePath('/sitemap.xml')

      return new Response(JSON.stringify({ revalidated: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ message: 'No revalidation needed' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err: any) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

// Helper function to revalidate all pagination pages
async function revalidatePaginationPages() {
  try {

    // Get total articles count
    const articlesData = await getArticles({
      pagination: { pageSize: 1 },
    })
    
    const totalArticles = articlesData.meta?.pagination?.total || 0
    const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE)

    // Revalidate main blog pagination pages (starting from page 2)
    for (let page = 2; page <= totalPages; page++) {
      revalidatePath(`/blog/page/${page}`)
    }
  } catch (error) {
    console.error('Error revalidating pagination pages:', error)
  }
}

// Helper function to revalidate category pagination pages
async function revalidateCategoryPaginationPages(categorySlug: string) {
  try {

    // Get total articles count for this category
    const articlesData = await getArticles({
      filters: {
        categories: {
          slug: {
            $eq: categorySlug,
          },
        },
      },
      pagination: { pageSize: 1 },
    })
    
    const totalArticles = articlesData.meta?.pagination?.total || 0
    const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE)

    // Revalidate category pagination pages (starting from page 2)
    for (let page = 2; page <= totalPages; page++) {
      revalidatePath(`/blog/category/${categorySlug}/page/${page}`)
    }
  } catch (error) {
    console.error('Error revalidating category pagination pages:', error)
  }
}

// Helper function to revalidate all categories and their pagination
async function revalidateAllCategories() {
  try {
    const categoriesData = await getCategories()
    
    if (categoriesData.data) {
      for (const category of categoriesData.data) {
        // Revalidate category page
        revalidatePath(`/blog/category/${category.slug}`)
        
        // Revalidate category pagination pages
        await revalidateCategoryPaginationPages(category.slug)
      }
    }
  } catch (error) {
    console.error('Error revalidating all categories:', error)
  }
}
