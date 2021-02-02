import React, { useCallback } from 'react'
import mockNavigationLInks from '../../const/mockData/navigationLinks.json'
import mockSocialMediaLinks from '../../const/mockData/mockSocialMediaLinks'
import mockClientLogos from '../../const/mockData/clientLogos'
import mockCardIcons from '../../const/mockData/cardIcons'
import mockOurWorkGallery from '../../const/mockData/ourWorkGallery'
import mockWhyChooseUs from '../../const/mockData/whyChooseUs'
import contactFormFields from '../../const/mockData/contactFormFields'
import contactFormFooterFields from '../../const/mockData/contactFormFooter'
import homeHeroImage from '../../assets/backgrounds/HomeHeroImage.png'
import { FormElements } from '../../typings/form'

import Header from '../../ui/Organisms/Header'
import Hero from '../../ui/Organisms/Hero'
import MessageUs from '../../ui/Organisms/MessageUs'
import OurServices from '../../ui/Organisms/OurServices'
import OurWork from '../../ui/Organisms/OurWork'
import WhyChooseUs from '../../ui/Organisms/WhyChooseUs'
import Footer from '../../ui/Organisms/Footer'
import { PageWrapper, HeroSection } from './StyledComponents'

const Home = () => {
  const onSubmitFormHandler = useCallback((formElements: FormElements) => {
    alert('Form Submitted')
  }, [])

  return (
    <PageWrapper>
      {/* TODO: Need to pass user phone number, email and work with us link */}
      <Header
        themeMode="dark"
        siteLogoUrl="#home"
        navLinks={mockNavigationLInks}
        socialMediaLinks={mockSocialMediaLinks}
      />
      <HeroSection>
        <Hero
          themeMode="dark"
          shouldAnimate={true}
          tagLine="web development services"
          title="Your website does a lot for your business."
          description="Why not take care of it? After all, an underperforming website can leave your company in the dust. We partner with brands like yours to build, optimize, and grow sites and applications into memorable experiences that inform, inspire, and empower your customers. You're proud of the brand you've built, now you'll be proud of your website, too."
          linkLabel="View our work"
          linkUrl="#viewourwork"
          imageUrl={homeHeroImage}
        />
      </HeroSection>

      <main>
        <MessageUs
          shouldAnimate={true}
          clientLogos={mockClientLogos}
          formTitle="Work with us."
          contactFormFields={contactFormFields}
          submitButtonLabel="SUBMIT"
          onSubmitFormHandler={onSubmitFormHandler}
        />
        <OurServices
          shouldAnimate={false}
          title="Our Services"
          description="You deserve better than a one-size-fits-all option. We focus on one thing — building dyanmic content-driven technology that gives strength to your brand's mission and helps you deliver on your goals. "
          cardIcons={mockCardIcons}
        />
        <OurWork
          shouldAnimate={false}
          title="Our Work"
          description="A collection of our most recent and most favorite projects that have brought maximal value and impact to our clients."
          ourWorkGallery={mockOurWorkGallery}
        />
        <WhyChooseUs shouldAnimate={false} data={mockWhyChooseUs} />
        <Footer
          siteLogoUrl="#home"
          description="Headquartered in Charlotte, NC, our small but nimble team services start-ups, small businesses, and enterprises throughout the US and Canada. We focus on high-quality and efficient web, mobile, and WordPress development. Hablamos Espanol!"
          formTitle="Contact us."
          submitButtonLabel="SUBMIT"
          contactFormFields={contactFormFooterFields}
          onSubmitFormHandler={onSubmitFormHandler}
          linkedInUrl="#"
          instagramUrl="#"
          githubUrl="#"
        />
      </main>
    </PageWrapper>
  )
}

export default Home
