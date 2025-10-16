export const metadata = {
  title: 'Inspire Reach - Free Referrals Across India',
  description: 'Connecting professionals across India through trusted referrals',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>{children}</body>
    </html>
  )
}
