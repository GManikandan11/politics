// components/FbLinkGrid.tsx
'use client'

import FbTrackLink from './FbTrackLink'

type Item = {
  ctwaLink: string
  ctwaLabel: string
}

type Props = {
  items: Item[]
}

export default function FbLinkGrid({ items }: Props) {
  return (
    <>
      {items.map(
        (item, idx) =>
          item?.ctwaLink &&
          item?.ctwaLabel && (
            <FbTrackLink key={idx} href={item.ctwaLink} label={item.ctwaLabel} />
          )
      )}
    </>
  )
}
