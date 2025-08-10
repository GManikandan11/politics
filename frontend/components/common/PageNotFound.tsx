// app/components/common/PageNotFound.tsx
import Link from 'next/link'
import { ReactNode } from 'react'

interface PageNotFoundProps {
  message?: string
  actionLabel?: string
  actionHref?: string
}

export default function PageNotFound({
  message = "Sorry, the page you're looking for doesn't exist.",
  actionLabel = 'Go home',
  actionHref = '/'
}: PageNotFoundProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold  mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">{message}</p>
        <Link href={actionHref} className="inline-block px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-red-700 transition">
          {actionLabel}
        </Link>
      </div>
    </div>
  )
}
