import React, { useCallback } from 'react'
import mockNavigationLInks from '../../const/mockData/navigationLinks.json'
import mockSocialMediaLinks from '../../const/mockData/mockSocialMediaLinks'
import mockClientLogos from '../../const/mockData/clientLogos'
import mockCardIcons from '../../const/mockData/cardIcons'
import mockOurWorkGallery from '../../const/mockData/ourWorkGallery'
import contactFormFields from '../../const/mockData/contactFormFields'
import homeHeroImage from '../../assets/backgrounds/HomeHeroImage.png'
import { FormElements } from '../../typings/contactForm'

import Header from '../../ui/Organisms/Header'
import Hero from '../../ui/Organisms/Hero'
import MessageUs from '../../ui/Organisms/MessageUs'
import OurServices from '../../ui/Organisms/OurServices'
import OurWork from '../../ui/Organisms/OurWork'
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
          shouldAnimate={true}
          title="Our Services"
          description="You deserve better than a one-size-fits-all option. We focus on one thing — building dyanmic content-driven technology that gives strength to your brand's mission and helps you deliver on your goals. "
          cardIcons={mockCardIcons}
        />
        <OurWork
          shouldAnimate={true}
          title="Our Work"
          description="A collection of our most recent and most favorite projects that have brought maximal value and impact to our clients."
          ourWorkGallery={mockOurWorkGallery}
        />
        <div>
          START Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          justo nec ultrices dui sapien eget mi proin sed. Viverra adipiscing at
          in tellus integer feugiat scelerisque varius morbi. Turpis massa sed
          elementum tempus egestas. Pulvinar neque laoreet suspendisse interdum
          consectetur. Bibendum ut tristique et egestas quis ipsum suspendisse
          ultrices gravida. Amet mattis vulputate enim nulla aliquet porttitor
          lacus luctus accumsan. Velit sed ullamcorper morbi tincidunt ornare
          massa. Diam vulputate ut pharetra sit amet. Scelerisque varius morbi
          enim nunc. At volutpat diam ut venenatis. Gravida quis blandit turpis
          cursus in hac habitasse platea. Purus gravida quis blandit turpis
          cursus. Felis donec et odio pellentesque diam volutpat commodo sed
          egestas. Adipiscing commodo elit at imperdiet dui accumsan sit amet
          nulla. Sit amet est placerat in egestas erat imperdiet sed. Cras
          semper auctor neque vitae tempus quam pellentesque. Consectetur
          adipiscing elit ut aliquam purus sit amet. Blandit massa enim nec dui
          nunc mattis enim. Varius duis at
          <a href="google.com" target="_blank">
            Test Component{' '}
          </a>
        </div>
      </main>
    </PageWrapper>
  )
}

export default Home
