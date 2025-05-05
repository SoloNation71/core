// protected-route.js
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from './shared-auth'
import { db } from './database-service'

export function ProtectedRoute({ children, adminOnly = false }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    async function checkAuth() {
      try {
        const session = await auth.getSession()
        setUser(session?.user || null)
        
        if (session?.user && adminOnly) {
          const admin = await db.admin.isAdmin(session.user.id)
          setIsAdmin(admin)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setLoading(false)
      }
    }
    
    checkAuth()
  }, [adminOnly])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" />
  }

  return children
}