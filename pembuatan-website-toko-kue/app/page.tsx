import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MenuSection } from '@/components/menu-section'
import { About } from '@/components/about'
import { OrderSteps } from '@/components/order-steps'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <OrderSteps />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
