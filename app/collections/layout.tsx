import { Navbar } from '@/app/_components/Navbar'
import Footer from '@/app/_components/Footer'

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}
