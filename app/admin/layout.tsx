export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body> 
      <h1>{children}</h1>
      </body>
    </html>
  )
}   