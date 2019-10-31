import * as React from "react"
import { Link } from "gatsby"

interface Props {
  siteTitle: string
}

export default function Header({ siteTitle = "" }: Props) {
  return (
    <header className="container mx-auto px-4 py-6 text-blue-600">
      <h1 className="text-lg font-bold">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </header>
  )
}
