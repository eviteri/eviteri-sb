import React from 'react'
import {
  FooterWrapper,
  FooterWaveWrapper,
  FooterContentWrapper,
  FooterInnerWrapper,
  FooterLeftWrapper,
  FooterLogoWrapper,
  FooterLogo,
  FooterDescription,
  SocialMediaLinksWrapper,
  SocialLink,
  SocialMediaIcon,
  FooterRightWrapper,
  FooterFormWrapper
} from './StyledComponents'
import WaveTop from '../../Shapes/WaveTop'
import Form from '../../../ui/Molecules/Form'
import { FormElements } from '../../../typings/form'
import {
  SocialMediaArray,
  SocialMediaDetail
} from '../../../typings/socialMedia'

export interface FooterProps {
  siteLogoUrl: string
  description: string
  formTitle: string
  contactFormFields: FormElements
  submitButtonLabel: string
  onSubmitFormHandler: (formElements: FormElements) => void
  socialMediaLinks?: SocialMediaArray
  theme?: any
}

const Footer = ({
  siteLogoUrl,
  description,
  formTitle,
  contactFormFields,
  submitButtonLabel,
  onSubmitFormHandler,
  socialMediaLinks
}: FooterProps) => {
  return (
    <FooterWrapper>
      <FooterWaveWrapper>
        <WaveTop />
      </FooterWaveWrapper>
      <FooterContentWrapper>
        <FooterInnerWrapper>
          <FooterLeftWrapper>
            <FooterLogoWrapper href={siteLogoUrl}>
              <FooterLogo src="" alt="Site Logo" />
            </FooterLogoWrapper>
            <FooterDescription>{description}</FooterDescription>
            <SocialMediaLinksWrapper>
              {socialMediaLinks &&
                socialMediaLinks.map(
                  (link: SocialMediaDetail, index: number) => {
                    const { label, image, imageAlt, url } = link
                    const logoImage = imageAlt ? imageAlt : image
                    return (
                      <SocialLink key={index} href={url} target="__blank">
                        <SocialMediaIcon src={logoImage} alt={label} />
                      </SocialLink>
                    )
                  }
                )}
            </SocialMediaLinksWrapper>
          </FooterLeftWrapper>
          <FooterRightWrapper>
            <FooterFormWrapper>
              <Form
                title={formTitle}
                contactFormFields={contactFormFields}
                submitLabel={submitButtonLabel}
                onSubmitFormHandler={onSubmitFormHandler}
              />
            </FooterFormWrapper>
          </FooterRightWrapper>
        </FooterInnerWrapper>
      </FooterContentWrapper>
    </FooterWrapper>
  )
}

export default React.memo(Footer)
