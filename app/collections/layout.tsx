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
