import ProgressBar from '@/components/ProgressBar';
import StepOne from '@/components/steps/StepOne';
import { Overpass_Mono } from 'next/font/google'
const overpassMono = Overpass_Mono({ subsets: ['latin'] })

const Home: React.FC = () => {
  return (
    <main className="display-flex flex-direction-column justifiy-content-center align-items-center padding-top-xxl padding-bottom-m">
      <ProgressBar />
      <StepOne />
      <div className="background-white cursor-pointer hover:background-opacity-neutral-1 hover:border-success-1 border-radius-m border-width-1 border-style-solid border-neutral-2 box-shadow-m padding-l">Hombre</div>
    </main>
  )
}

export default Home;