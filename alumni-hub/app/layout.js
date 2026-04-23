import './globals.css';

export const metadata = {
  title: 'Alumni Knights Hub',
  description: 'Ateneo de Davao University Alumni Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a2b6d" />
      </head>
      <body className="bg-[#f0f2f5] min-h-screen font-sans text-slate-800">
        
        <div className="w-full min-h-screen relative overflow-x-hidden">
          {children}
        </div>

        {/* BULLETPROOF SERVICE WORKER REGISTRATION */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('Force-Registered SW: Success!', registration.scope);
                    },
                    function(err) {
                      console.log('Force-Registered SW: Failed!', err);
                    }
                  );
                });
              }
            `,
          }}
        />
        
      </body>
    </html>
  );
}