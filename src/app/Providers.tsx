'use client'

import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



export function ThemeProviders({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const Aboutus = pathname == '/aboutus'
    const companyDetailPage = pathname.includes('/company/')
    const Privacy = pathname == '/privacy-policy'
    const Terms = pathname == '/terms-of-service'
    const Cookies = pathname == '/cookie-policy'
    const Admin =pathname == '/admin'
    return (<>
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
            <ToastContainer
                position='top-right'
                autoClose={1000}
                // limit={1}
                theme="colored"
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={true}
            />
           
            {children}
          
        </ThemeProvider>

    </>)
}