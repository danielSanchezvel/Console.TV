import './globals.css'

export const metadata = {
  title: 'Siesa Algorithm',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Khula:700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/press-start-2p"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
