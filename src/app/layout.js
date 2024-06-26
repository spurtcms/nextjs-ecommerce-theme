import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/Components/Header";
import { Providers } from "@/redux/providers";
import { Flip, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spurtcms E-commerce",
  description: "Spurtcms E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <body className={inter.className}>
      <ToastContainer
            position="top-right"
            autoClose={2000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            draggable={false}
            pauseOnVisibilityChange
            closeOnClick
            pauseOnHover={true}
            theme='colored'
            transition={Flip}
          />
        <Providers>
        <NextTopLoader  
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"/>
        <Header />
       
        {children}
        </Providers>
        </body>
    </html>
  );
}
