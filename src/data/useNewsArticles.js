import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { articles as demoArticles, localizeList } from './newsData'

const readTime = (content = '') => Math.max(1, Math.ceil(content.trim().split(/\s+/).filter(Boolean).length / 220))

export function useNewsArticles(lang = 'en') {
  const [databaseArticles, setDatabaseArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    const load = async () => {
      const { data, error } = await supabase
        .from('news_articles')
        .select('id,title,slug,excerpt,content,image_url,status,is_featured,created_at,published_at,news_categories(name,slug)')
        .eq('status', 'published')
        .order('published_at', { ascending: false, nullsFirst: false })
      if (error) {
        console.error('Could not load published news:', error.message)
        if (active) setLoading(false)
        return
      }
      const converted = (data || []).map((row) => {
        const article = {
          id: String(row.id),
          category: row.news_categories?.slug || 'all',
          author: 'NewsTrends',
          source: 'NewsTrends',
          readMins: readTime(row.content),
          image: row.image_url || '',
          featured: Boolean(row.is_featured),
          trending: false,
          time: row.published_at ? new Date(row.published_at).toLocaleDateString() : new Date(row.created_at).toLocaleDateString(),
          en: { title: row.title || '', excerpt: row.excerpt || '', body: row.content || '' },
        }
        return article
      })
      if (active) {
        setDatabaseArticles(converted)
        setLoading(false)
      }
    }
    load()
    return () => { active = false }
  }, [])

  return { articles: localizeList([...databaseArticles, ...demoArticles], lang), loading }
}
