import Image from 'next/image'
import { Card } from '@/components/Card'
import { IndexContent } from '@/utils/links'

import { Overpass_Mono } from 'next/font/google'
import { Footer } from '@/components/Footer'
const overpassMono = Overpass_Mono({ subsets: ['latin'] })

const Home: React.FC = () => {
  return (
    <main className="display-flex flex-direction-column justifiy-content-center align-items-center padding-top-xxl padding-bottom-m">
      <h1 className="display-flex align-items-center text-align-center color-neutral-7 font-size-xl">
        <a href="https://siux.studio" target="_blank">
          <Image src="/images/siux-studio.svg" alt="Vercel Logo" width={80} height={80} />
        </a>
        <div className="margin-left-m margin-right-m margin-bottom-xs">+</div>
        <a href="https://nextjs.org" target="_blank">
          <Image src="/images/next-js.svg" alt="Vercel Logo" width={120} height={40} />
        </a>
      </h1>

      <div className="text-align-center margin-top-m margin-bottom-m line-height-l font-size-s">
        Get started by editing
        <code className={`${overpassMono.className} background-opacity-neutral-2 color-neutral-8 font-weight-500 margin-left-xxs margin-right-xxs border-radius-xs padding-xxs padding-left-xs padding-right-xs border-style-solid border-width-1 border-neutral-2 font-size-s`}>pages/_app.js</code>
        and
        <code className={`${overpassMono.className} background-opacity-neutral-2 color-neutral-8 font-weight-500 margin-left-xxs margin-right-xxs border-radius-xs padding-xxs padding-left-xs padding-right-xs border-style-solid border-width-1 border-neutral-2 font-size-s`}>pages/index.js</code>
      </div>

      <div>
        <h3 className="color-black font-size-m font-weight-600 margin-top-m margin-left-s tablet:margin-left-m">Studio</h3>
        <div className="display-flex flex-wrap">
          {
            IndexContent.siuxStudioLinks.map((link, i) => {
              return (<Card key={i} link={link} />)
            })
          }
        </div>

        <h3 className="color-black font-size-m font-weight-600 margin-top-m margin-left-s tablet:margin-left-m">Next.js</h3>
        <div className="display-flex flex-wrap">
          {
            IndexContent.nextLinks.map((link, i) => {
              return (<Card key={i} link={link} />)
            })
          }
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Home;