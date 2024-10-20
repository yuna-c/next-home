import Link from 'next/link'
import React from 'react'

export default function Homepage() {
  return (
    <div>
      <h1 className="text-7xl font-bold">Home Page</h1>
      <Link href="/about" className="text-xl text-blue-500 inline-block mt-8 mr-4">
        About
      </Link>
      <Link href="/info" className="text-xl text-blue-500 inline-block mt-8 mr-4">
        Info
      </Link>
    </div>
  )
}
