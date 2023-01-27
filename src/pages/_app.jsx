import 'focus-visible'
import '@/styles/tailwind.css'
import '@/styles/common.css'
import { Analytics } from '@vercel/analytics/react'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
