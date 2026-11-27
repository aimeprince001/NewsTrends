import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

const emptyArticle = { title: '', excerpt: '', content: '', image_url: '', category_id: '', status: 'draft', is_featured: false }

const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export default function Admin() {
  const { user } = useAuth()
  const [tab, setTab] = useState('overview')
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])
  const [comments, setComments] = useState([])
  const [users, setUsers] = useState([])
  const [form, setForm] = useState(emptyArticle)
  const [editingId, setEditingId] = useState(null)
  const [categoryName, setCategoryName] = useState('')
  const [categorySlug, setCategorySlug] = useState('')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const loadData = async () => {
    setError('')
    const [articleRes, categoryRes, commentRes, userRes] = await Promise.all([
      supabase.from('news_articles').select('id,title,slug,status,is_featured,created_at,published_at,news_categories(name)').order('created_at', { ascending: false }).limit(100),
      supabase.from('news_categories').select('id,name,slug').order('name'),
      supabase.from('news_comments').select('id,body,status,created_at,news_articles(title)').order('created_at', { ascending: false }).limit(50),
      supabase.from('profiles').select('id,full_name,email,created_at').order('created_at', { ascending: false }).limit(100),
    ])
    const problem = articleRes.error || categoryRes.error || commentRes.error || userRes.error
    if (problem) setError(problem.message)
    if (articleRes.data) setArticles(articleRes.data)
    if (categoryRes.data) setCategories(categoryRes.data)
    if (commentRes.data) setComments(commentRes.data)
    if (userRes.data) setUsers(userRes.data)
  }

  useEffect(() => { loadData() }, [])

  const stats = useMemo(() => ({
    total: articles.length,
    published: articles.filter((a) => a.status === 'published').length,
    drafts: articles.filter((a) => a.status === 'draft').length,
    pending: comments.filter((c) => c.status === 'pending').length,
    users: users.length,
  }), [articles, comments, users])

  const editArticle = async (article) => {
    const { data, error: loadError } = await supabase.from('news_articles').select('*').eq('id', article.id).single()
    if (loadError) return setError(loadError.message)
    setEditingId(data.id)
    setForm({
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: data.content || '',
      image_url: data.image_url || '',
      category_id: data.category_id || '',
      status: data.status || 'draft',
      is_featured: Boolean(data.is_featured),
    })
    setTab('write')
  }

  const resetForm = () => {
    setEditingId(null)
    setForm(emptyArticle)
  }

  const saveArticle = async (event) => {
    event.preventDefault()
    setBusy(true)
    setError('')
    setMessage('')
    const now = new Date().toISOString()
    const payload = {
      title: form.title.trim(),
      slug: slugify(form.title),
      excerpt: form.excerpt.trim(),
      content: form.content.trim(),
      image_url: form.image_url.trim(),
      category_id: form.category_id || null,
      status: form.status,
      is_featured: form.is_featured,
      author_id: user.id,
      published_at: form.status === 'published' ? now : null,
      updated_at: now,
    }
    if (editingId) payload.id = editingId
    const { error: saveError } = await supabase.from('news_articles').upsert(payload)
    if (saveError) setError(saveError.message)
    else {
      setMessage(editingId ? 'Article updated.' : 'Article saved.')
      resetForm()
      await loadData()
      setTab('articles')
    }
    setBusy(false)
  }

  const deleteArticle = async (article) => {
    if (!window.confirm('Delete this article permanently?')) return
    const { error: deleteError } = await supabase.from('news_articles').delete().eq('id', article.id)
    if (deleteError) setError(deleteError.message)
    else {
      setMessage('Article deleted.')
      await loadData()
    }
  }

  const addCategory = async (event) => {
    event.preventDefault()
    const name = categoryName.trim()
    const slug = slugify(categorySlug || name)
    if (!name || !slug) return
    const { error: addError } = await supabase.from('news_categories').insert({ name, slug })
    if (addError) setError(addError.message)
    else {
      setCategoryName('')
      setCategorySlug('')
      setMessage('Category added.')
      await loadData()
    }
  }

  const moderateComment = async (commentId, status) => {
    const { error: updateError } = await supabase.from('news_comments').update({ status, updated_at: new Date().toISOString() }).eq('id', commentId)
    if (updateError) setError(updateError.message)
    else {
      setMessage('Comment moderation updated.')
      await loadData()
    }
  }

  return (
    <div className="page admin-page">
      <div className="admin-top">
        <div>
          <span className="admin-eyebrow">NEW TRENDZ / CONTROL ROOM</span>
          <h1>Admin dashboard</h1>
          <p>Manage stories, categories and community moderation.</p>
        </div>
        <button className="btn btn-primary" onClick={() => { resetForm(); setTab('write') }}>＋ New article</button>
      </div>

      <div className="admin-layout">
        <aside className="admin-sidebar">
          {[
            ['overview', 'Overview'],
            ['articles', 'Articles'],
            ['write', editingId ? 'Edit article' : 'Write article'],
            ['categories', 'Categories'],
            ['comments', 'Comments'],
            ['users', 'Users'],
          ].map(([key, label]) => (
            <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key)}>
              <span>{label}</span>{key === 'comments' && stats.pending > 0 && <b>{stats.pending}</b>}
            </button>
          ))}
          <div className="admin-sidebar-foot">Signed in as<br /><strong>{user?.email}</strong></div>
        </aside>

        <section className="admin-content">
          {error && <div className="admin-alert error">{error}</div>}
          {message && <div className="admin-alert success">{message}</div>}

          {tab === 'overview' && <>
            <div className="admin-stats">
              <div><span>All articles</span><strong>{stats.total}</strong><small>Stories in your database</small></div>
              <div><span>Published</span><strong>{stats.published}</strong><small>Visible to readers</small></div>
              <div><span>Drafts</span><strong>{stats.drafts}</strong><small>Work in progress</small></div>
              <div><span>Pending comments</span><strong>{stats.pending}</strong><small>Awaiting moderation</small></div>
            </div>
            <div className="admin-panel">
              <div className="admin-panel-head"><div><h2>Recent stories</h2><p>Latest changes in your newsroom</p></div><button className="btn btn-ghost btn-sm" onClick={() => setTab('articles')}>View all →</button></div>
              <ArticleTable articles={articles.slice(0, 6)} onEdit={editArticle} onDelete={deleteArticle} />
            </div>
          </>}

          {tab === 'articles' && <div className="admin-panel">
            <div className="admin-panel-head"><div><h2>Article library</h2><p>Manage drafts and published stories</p></div><span className="admin-count">{articles.length} articles</span></div>
            <ArticleTable articles={articles} onEdit={editArticle} onDelete={deleteArticle} />
          </div>}

          {tab === 'write' && <div className="admin-panel">
            <div className="admin-panel-head"><div><h2>{editingId ? 'Edit story' : 'Create a story'}</h2><p>Write and publish news content</p></div></div>
            <form className="admin-article-form" onSubmit={saveArticle}>
              <label>Headline<input required maxLength={180} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Enter a clear headline" /></label>
              <label>Short summary<textarea required rows="3" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="A short introduction for the news card" /></label>
              <label>Article content<textarea required rows="9" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Write the full story here" /></label>
              <label>Cover image URL<input type="url" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} placeholder="https://..." /></label>
              <div className="admin-form-row">
                <label>Category<select value={form.category_id} onChange={(e) => setForm({ ...form, category_id: e.target.value })}><option value="">Choose category</option>{categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label>
                <label>Publish status<select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select></label>
              </div>
              <label className="admin-featured"><input type="checkbox" checked={form.is_featured} onChange={(e) => setForm({ ...form, is_featured: e.target.checked })} /> Feature this story</label>
              <div className="admin-form-actions"><button type="button" className="btn btn-ghost" onClick={resetForm}>Clear</button><button disabled={busy} className="btn btn-primary" type="submit">{busy ? 'Saving…' : form.status === 'published' ? 'Publish story' : 'Save draft'}</button></div>
            </form>
          </div>}

          {tab === 'categories' && <div className="admin-panel">
            <div className="admin-panel-head"><div><h2>Categories</h2><p>Organize stories by topic</p></div></div>
            <form className="admin-category-form" onSubmit={addCategory}><input required value={categoryName} onChange={(e) => { setCategoryName(e.target.value); if (!categorySlug) setCategorySlug(slugify(e.target.value)) }} placeholder="Category name" /><input value={categorySlug} onChange={(e) => setCategorySlug(slugify(e.target.value))} placeholder="category-slug" /><button className="btn btn-primary" type="submit">Add category</button></form>
            <div className="admin-category-grid">{categories.map((c) => <div key={c.id}><span className="admin-category-dot" /><strong>{c.name}</strong><small>/{c.slug}</small></div>)}</div>
          </div>}

          {tab === 'users' && <div className="admin-panel">
            <div className="admin-panel-head"><div><h2>User directory</h2><p>Registered NewsTrends readers</p></div><span className="admin-count">{users.length} users</span></div>
            {users.length === 0 ? <div className="admin-empty">No registered users yet.</div> : <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Name</th><th>Email</th><th>Joined</th></tr></thead><tbody>{users.map((u) => <tr key={u.id}><td><strong>{u.full_name || 'Reader'}</strong></td><td>{u.email || '—'}</td><td>{u.created_at ? new Date(u.created_at).toLocaleDateString() : '—'}</td></tr>)}</tbody></table></div>}
          </div>}

          {tab === 'comments' && <div className="admin-panel">
            <div className="admin-panel-head"><div><h2>Community moderation</h2><p>Review comments and keep discussions respectful</p></div></div>
            {comments.length === 0 ? <div className="admin-empty">No comments yet.</div> : <div className="admin-comment-list">{comments.map((c) => <div className="admin-comment" key={c.id}><div><span className={'admin-status ' + c.status}>{c.status}</span><p>{c.body}</p><small>On: {c.news_articles?.title || 'Article'} · {new Date(c.created_at).toLocaleDateString()}</small></div><div className="admin-comment-actions">{c.status !== 'approved' && <button onClick={() => moderateComment(c.id, 'approved')}>Approve</button>}{c.status !== 'rejected' && <button onClick={() => moderateComment(c.id, 'rejected')}>Reject</button>}</div></div>)}</div>}
          </div>}
        </section>
      </div>
    </div>
  )
}

function ArticleTable({ articles, onEdit, onDelete }) {
  if (!articles.length) return <div className="admin-empty">No stories in the database yet. Create your first article to begin.</div>
  return <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Story</th><th>Category</th><th>Status</th><th>Created</th><th>Actions</th></tr></thead><tbody>{articles.map((a) => <tr key={a.id}><td><strong>{a.title}</strong>{a.is_featured && <small className="admin-featured-label">Featured</small>}</td><td>{a.news_categories?.name || '—'}</td><td><span className={'admin-status ' + a.status}>{a.status}</span></td><td>{new Date(a.created_at).toLocaleDateString()}</td><td><div className="admin-table-actions"><button onClick={() => onEdit(a)}>Edit</button><button className="danger" onClick={() => onDelete(a)}>Delete</button></div></td></tr>)}</tbody></table></div>
}
