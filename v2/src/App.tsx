import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { router } from '@/router'
import { useAuthStore } from '@/stores/authStore'

export default function App() {
  const init = useAuthStore(s => s.init)

  useEffect(() => {
    init()
  }, [init])

  return <RouterProvider router={router} />
}
