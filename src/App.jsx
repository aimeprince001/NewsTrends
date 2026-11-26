import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LiveTicker from './components/LiveTicker'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Article from './pages/Article'
import Bookmarks from './pages/Bookmarks'
import Category from './pages/Category'
import Search from './pages/Search'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <LiveTicker />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/bookmarks"
            element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}