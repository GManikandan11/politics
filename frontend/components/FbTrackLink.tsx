import React from 'react'

type Props = {
  href: string
  label: string
}

const FbTrackLink = ({ href, label }: Props) => {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      const fbq = (window as any).fbq
      if (fbq && window.location.pathname === '/Support-Automation') {
        fbq('track', 'ViewContent', {
          value: 3,
          currency: 'INR',
        })
        console.log('[fbq] Tracked: ViewContent')
      }
    }
  }

  return (
    <a
      href={href}
      target="_self"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex w-max rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-white shadow mt-4"
    >
      {label}
    </a>
  )
}

export default FbTrackLink
