import Navigation from '../component/Navigation'
import {Roboto} from 'next/font/google'
import { Work_Sans } from 'next/font/google'
const roboto=Roboto({
  subsets:['latin'],
  weight:['400','500','700'],
  variable:'--font-roboto'
})
const worksense= Work_Sans({
  subsets:['latin'],
  weight:'400',
  variable:'--font-worksense'
  
})
export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${worksense.variable}`}>
        <h1>hello  Layout</h1>
        <Navigation/>
        <h1>{children}</h1>
      </body>
    </html>
  )
}   