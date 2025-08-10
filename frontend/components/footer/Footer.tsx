import Image from 'next/image'
import Link from 'next/link'

type LinkItem = { label: string; link?: string }
type Column   = { title: string; links: LinkItem[] }
type Social   = { platform: string; href?: string; iconUrl?: string }
type AppLink  = { os: string; href?: string; iconUrl?: string }

type FooterData = {
  columns?: Column[]
  socialLinks?: Social[]
  appLinks?: AppLink[]
  copyright?: string
}

interface FooterProps {
  footer: FooterData
}

export default function Footer({ footer }: FooterProps) {
  const {
    columns = [],
    socialLinks = [],
    appLinks = [],
    copyright = ''
  } = footer

  const validColumns = columns.filter(col => col.links?.length > 0)
  const validSocial = socialLinks.filter(s => s.href && s.iconUrl)
  const validApps = appLinks.filter(a => a.href && a.iconUrl)

  return (
    <footer className="border-t pt-8 pb-6 bg-white text-zinc-700 dark:bg-gray-900 text-black dark:text-white bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {validColumns.map((col, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-3">{col.title}</h3>
            <ul className="space-y-2">
              {col.links
                .filter(link => link.link)
                .map((link, i) => (
                  <li key={i}>
                    <Link href={link.link!} className="hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow us</h3>
          <div className="flex space-x-4">
            {validSocial.map((s, i) => (
              <Link key={i} href={s.href!} aria-label={s.platform}>
                <div className="p-2 bg-gray-100 rounded-full">
                  {s.iconUrl && (
                    <Image
                      src={s.iconUrl}
                      alt={s.platform}
                      width={24}
                      height={24}
                      unoptimized
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>

          <h3 className="mt-6 text-lg font-semibold mb-3">Mobile App</h3>
          <div className="flex space-x-4">
            {validApps.map((a, i) => (
              <Link key={i} href={a.href!} aria-label={a.os}>
                <div className="p-2 bg-gray-100 rounded-full">
                  {a.iconUrl && (
                    <Image
                      src={a.iconUrl}
                      alt={a.os}
                      width={32}
                      height={32}
                      unoptimized
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {copyright && (
        <div className="mt-8 text-center text-sm text-zinc-500">
          {copyright}
        </div>
      )}
    </footer>
  )
}
