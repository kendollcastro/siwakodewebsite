import { lazy, Suspense } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BrandStrip from './components/BrandStrip'
import StructuredData from './components/StructuredData'

const ServicesSection = lazy(() => import('./components/ServicesSection'))
const ProjectsBento = lazy(() => import('./components/ProjectsBento'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const CtaForm = lazy(() => import('./components/CtaForm'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="py-section-gap" />
}

function App() {
  return (
    <LanguageProvider>
      <StructuredData />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary-fixed focus:text-on-primary-fixed focus:px-6 focus:py-3 focus:rounded-full focus:font-bold"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <BrandStrip />
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProjectsBento />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CtaForm />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </LanguageProvider>
  )
}

export default App
