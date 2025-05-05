// app-router.js
import { createBrowserRouter } from 'react-router-dom'

// Import your main components from each repo
import { JoinLanding } from 'join-landing'
import { ViewRoom } from 'codeflow-viewing-room'
import { Onboarding } from 'onboarding'
import { AdminUI } from 'solo-nation-admin-ui' 
import { NexusGate } from 'solonation-nexus-gate'

// Auth components
import { Login, Register, ForgotPassword } from './auth-components'
import { ProtectedRoute } from './protected-route'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <JoinLanding />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/view-room',
    element: <ProtectedRoute><ViewRoom /></ProtectedRoute>
  },
  {
    path: '/onboarding',
    element: <ProtectedRoute><Onboarding /></ProtectedRoute>
  },
  {
    path: '/admin',
    element: <ProtectedRoute adminOnly><AdminUI /></ProtectedRoute>
  },
  {
    path: '/nexus',
    element: <ProtectedRoute><NexusGate /></ProtectedRoute>
  }
])