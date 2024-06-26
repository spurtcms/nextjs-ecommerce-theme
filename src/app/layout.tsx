import { ThemeProviders } from "./Providers";
import { Providers } from '../../store/providers'
import "./globals.css";
import type { Metadata } from "next";
import Headers from './Headers'
import NextTopLoader from 'nextjs-toploader';


export const metadata: Metadata = {
 
  openGraph: {
    url:`${process.env.NEXT_PUBLIC_OWNDESK_WEB_URL}`,
    images: [
        {
            url:`${process.env.NEXT_PUBLIC_OWNDESK_WEB_URL}/img/og-image-2.png`,
            width:1200,
            height:630
            
        }
    ],
  },
};

export default function RootLayout(

  {
    children,
  }: {
    children: React.ReactNode
  }
) {
  return (
    <html lang="en">
      <head>
        <link rel='shortcut icon' href='/img/ownLogo.svg' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
       
    {/* <script>
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WG9XBR9')`}
    </script>
   */}
   <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WG9XBR9')
            `,
          }}
        />
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WG9XBR9"
    height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>

    <meta name="google-site-verification" content="6Jk2vqHDvhSWNz1NRj87Ji5lW8Ca48IAebUc-TD6frY"/>

      </head>
      <body className="dark:bg-[#0C1116] ">
        <Providers>

          <ThemeProviders>
            <NextTopLoader
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
            <Headers />
            
            {children}
          </ThemeProviders>
        </Providers>
      </body>
    </html>
  );
}
