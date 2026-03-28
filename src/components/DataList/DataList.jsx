import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetPostsQuery } from '../../services/postsApi'
import { fetchPosts } from '../../features/posts/postsSlice'

const CATEGORIES = ['All', 'Pizza', 'Pasta', 'Pancakes']

// ✅ Using Pexels CDN (public, reliable, and HTTPS)
const IMAGES = {
    Pizza: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=800',
    Pasta: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    Pancakes: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800'
}

export default function DataList() {
    const dispatch = useDispatch()
    const sliceData = useSelector(s => s.posts.data)
    const sliceStatus = useSelector(s => s.posts.status)

    const { data: queryData, isLoading: queryLoading, isError } = useGetPostsQuery()

    useEffect(() => { if (sliceStatus === 'idle') dispatch(fetchPosts()) }, [dispatch, sliceStatus])

    const posts = queryData || sliceData || []

    const [category, setCategory] = useState('All')
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const [search, setSearch] = useState('')

    useEffect(() => { setPage(1) }, [category, perPage, search])

    const filtered = useMemo(() => {
        let list = posts
        if (category !== 'All') {
            const map = { Pizza: 0, Pasta: 1, Pancakes: 2 }
            list = list.filter(p => p.id % 3 === map[category])
        }
        if (search.trim()) {
            const s = search.toLowerCase()
            list = list.filter(p => p.title.toLowerCase().includes(s) || p.body.toLowerCase().includes(s))
        }
        return list
    }, [posts, category, search])

    const total = filtered.length
    const totalPages = Math.max(1, Math.ceil(total / perPage))
    const startIndex = (page - 1) * perPage
    const visible = filtered.slice(startIndex, startIndex + perPage)

    function getImage(id) {
        if (category === 'All') {
            const mod = id % 3
            return mod === 0 ? IMAGES.Pizza : mod === 1 ? IMAGES.Pasta : IMAGES.Pancakes
        }
        return IMAGES[category]
    }

    return (
        <div>
            <div className="controls" style={{ margin: '10px 0' }}>
                <div style={{ display: 'flex', gap: 8 }}>
                    {CATEGORIES.map(c => (
                        <button key={c} onClick={() => setCategory(c)} style={{ background: category === c ? '#0f172a' : '#e5e7eb', color: category === c ? '#fff' : '#000' }}>{c}</button>
                    ))}
                </div>

                <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
                    <input placeholder="search title/body..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: 220 }} />
                    <div className="range">
                        <label className="small">Items:</label>
                        <input type="range" min={5} max={50} value={perPage} onChange={e => setPerPage(Number(e.target.value))} />
                        <span className="small">{perPage}</span>
                    </div>
                </div>
            </div>

            <div className="small">Showing {visible.length} of {total} items</div>

            <div className="grid" style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                {queryLoading && <div className="card">Loading posts...</div>}
                {isError && <div className="card">Error loading posts</div>}
                {!queryLoading && visible.map(p => (
                    <div key={p.id} className="card" style={{ background: '#fff', padding: '12px', borderRadius: '10px', boxShadow: '0 0 6px rgba(0,0,0,0.1)' }}>
                        <img src={getImage(p.id)} alt="food" onError={(e) => e.target.style.display = 'none'} style={{ width: '100%', borderRadius: '8px', maxHeight: '180px', objectFit: 'cover', marginBottom: '10px' }} />
                        <div className="card-title" style={{ fontWeight: 'bold', marginBottom: '6px' }}>{p.id}. {p.title}</div>
                        <div className="small" style={{ fontSize: '14px', color: '#555' }}>{p.body}</div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 12 }}>
                <button onClick={() => setPage(1)} disabled={page === 1}>First</button>
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
                <div className="small">Page {page} / {totalPages}</div>
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</button>
                <button onClick={() => setPage(totalPages)} disabled={page === totalPages}>Last</button>

                <div style={{ marginLeft: 'auto' }} className="small">Total posts: {total}</div>
            </div>
        </div>
    )
}