import './globals.css'

export const metadata = {
  title: 'Alumni Knights Hub',
  description: 'Ateneo de Davao University Alumni Portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f0f2f5] min-h-screen font-sans text-slate-800">
        {/* Removed the max-w-md constraint so the desktop UI can expand properly */}
        <div className="w-full min-h-screen relative overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}