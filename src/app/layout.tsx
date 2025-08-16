import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bibliora - Your Virtual Library',
  description: 'Discover your next favorite book with our curated collection of literature from around the world.',
  keywords: 'books, library, reading, literature, virtual library',
  authors: [{ name: 'Bibliora Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gradient-dark min-h-screen">
        {children}
      </body>
    </html>
  )
} 