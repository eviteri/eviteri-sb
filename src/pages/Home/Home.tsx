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
import { PageWrapper, HeroSection, WorkWithUsSection } from './StyledComponents'
import socialMediaLinks from '../../const/mockData/mockSocialMediaLinks'

const Home = () => {
  const onSubmitFormHandler = useCallback((formElements: FormElements) => {
    alert('Form Submitted')
  }, [])

  return (
    <PageWrapper>
      {/* TODO: Need to pass user phone number, email and work with us link */}
      <Header
        data-test="ev-header"
        themeMode="dark"
        siteLogoUrl="#home"
        navLinks={mockNavigationLInks}
        socialMediaLinks={mockSocialMediaLinks}
      />
      <HeroSection>
        <Hero
          data-test="ev-hero"
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
        <WorkWithUsSection
          id="workwithus"
          className="hidden"
        ></WorkWithUsSection>
        <MessageUs
          data-test="ev-message_us"
          shouldAnimate={true}
          clientLogos={mockClientLogos}
          formTitle="Work with us."
          contactFormFields={contactFormFields}
          submitButtonLabel="SUBMIT"
          onSubmitFormHandler={onSubmitFormHandler}
        />

        <div id="services" className="hidden"></div>
        <OurServices
          data-test="ev-our_services"
          shouldAnimate={true}
          title="Our Services"
          description="You deserve better than a one-size-fits-all option. We focus on one thing — building dyanmic content-driven technology that gives strength to your brand's mission and helps you deliver on your goals."
          cardIcons={mockCardIcons}
        />

        <div id="viewourwork" className="hidden"></div>
        <OurWork
          data-test="ev-our_work"
          shouldAnimate={true}
          title="Our Work"
          description="A collection of our most recent and most favorite projects that have brought maximal value and impact to our clients."
          ourWorkGallery={mockOurWorkGallery}
        />

        <div id="whyus" className="hidden"></div>
        <WhyChooseUs shouldAnimate={true} data={mockWhyChooseUs} />
        <Footer
          data-test="ev-footer"
          siteLogoUrl="#home"
          description="Headquartered in Charlotte, NC, our small but nimble team services start-ups, small businesses, and enterprises throughout the US and Canada. We focus on high-quality and efficient web, mobile, and WordPress development. Hablamos Espanol!"
          formTitle="Contact us."
          submitButtonLabel="SUBMIT"
          contactFormFields={contactFormFooterFields}
          onSubmitFormHandler={onSubmitFormHandler}
          socialMediaLinks={socialMediaLinks}
        />
      </main>
    </PageWrapper>
  )
}

export default Home
