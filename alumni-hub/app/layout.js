import './globals.css'

export const metadata = {
  title: 'Alumni Knights Hub',
  description: 'Ateneo de Davao University Alumni Portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 flex justify-center min-h-screen">
        {/* Mobile view constraint to match the design */}
        <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}