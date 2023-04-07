import './globals.css'

export const metadata = {
  title: 'Qwinto',
  description: 'Qwinto digital sheet. Stop using paper!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
