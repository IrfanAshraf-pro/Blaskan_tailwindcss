import { Footer, HeaderTop, Navbar } from './components'
import './globals.css'


export const metadata = {
  title: 'Blaskan',
  description: 'Blaskan bloggin site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
