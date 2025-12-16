import { Inter } from 'next/font/google'
import Providers from '@/components/providers'
import { 
  defaultMetadata, 
  generateBusinessStructuredData, 
  generateOrganizationStructuredData 
} from '@/lib/seo'
import '@/index.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  preload: true
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const businessStructuredData = generateBusinessStructuredData()
  const organizationStructuredData = generateOrganizationStructuredData()

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Cache control meta tags for forced refresh */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Updated timestamps to force reindexing */}
        <meta name="revisit-after" content="1 day" />
        <meta name="last-modified" content={new Date().toISOString()} />
        
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="apple-mobile-web-app-title" content="Окна и двери ПВХ" />
        <meta name="application-name" content="Окна и двери ПВХ" />
        
        {/* Favicon configuration - обновленная для корректного отображения в Яндексе и Google */}
        <link rel="icon" href="/favicon.ico?v=4" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?v=4" type="image/x-icon" />
        {/* Специальный тег для Яндекса */}
        <link rel="yandex-tableau-widget" href="/favicon.ico?v=4" />
        {/* Специальные теги для Google */}
        <link rel="apple-touch-icon" href="/favicon.ico?v=4" />
        <meta name="google" content="notranslate" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll-triggered animations
              const initScrollAnimations = () => {
                const observerOptions = {
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('show');
                    }
                  });
                }, observerOptions);

                // Observe all elements with animate-on-scroll class
                const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
                elementsToObserve.forEach((element) => {
                  observer.observe(element);
                });
              };

              // Initialize animations when DOM is loaded
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initScrollAnimations);
              } else {
                initScrollAnimations();
              }
            `,
          }}
        />
      </body>
    </html>
  )
} 
// Deploy trigger Sun Jul 13 17:29:16 +03 2025
// Force re-deploy Sun Jul 13 18:00:43 +03 2025
// Google reindex force deploy - Mon Jan 13 2025 20:15:00 +03
// New house icon favicon deploy - Mon Jan 13 2025 20:30:00 +03
// Updated favicon based on attached image - Mon Jan 13 2025 21:00:00 +03
// Beautiful gradient house favicon - Mon Jan 13 2025 21:15:00 +03
// Updated favicon.ico with user's custom icon - Mon Jan 13 2025 21:30:00 +03
// Trigger staging deploy - Tue Dec 16 2025
