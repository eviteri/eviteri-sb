import React from 'react'
import {
  FooterWrapper,
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
import Form from '../../../ui/Molecules/Form'
import LinkedInLogo from '../../../assets/socialMedia/linked-in-white.png'
import InstagramLogo from '../../../assets/socialMedia/instagram-white.png'
import GitHubLogo from '../../../assets/socialMedia/github-white.png'
import { FormElements } from '../../../typings/contactForm'

export interface FooterProps {
  description: string
  formTitle: string
  contactFormFields: FormElements
  submitButtonLabel: string
  onSubmitFormHandler: (formElements: FormElements) => void
  linkedInUrl?: string
  instagramUrl?: string
  githubUrl?: string
}

const Footer = ({
  description,
  formTitle,
  contactFormFields,
  submitButtonLabel,
  linkedInUrl,
  instagramUrl,
  githubUrl,
  onSubmitFormHandler
}: FooterProps) => {
  return (
    <FooterWrapper>
      <FooterLeftWrapper>
        <FooterLogoWrapper>
          <FooterLogo src="" alt="Site Logo" />
        </FooterLogoWrapper>
        <FooterDescription>{description}</FooterDescription>
        <SocialMediaLinksWrapper>
          {linkedInUrl && linkedInUrl !== '' && (
            <SocialLink href={linkedInUrl} target="__blank">
              <SocialMediaIcon src={LinkedInLogo} alt="LinkedIn Logo" />
            </SocialLink>
          )}
          {instagramUrl && instagramUrl !== '' && (
            <SocialLink href={instagramUrl} target="__blank">
              <SocialMediaIcon src={InstagramLogo} alt="Instagram Logo" />
            </SocialLink>
          )}
          {githubUrl && githubUrl !== '' && (
            <SocialLink href={githubUrl} target="__blank">
              <SocialMediaIcon src={GitHubLogo} alt="GitHub Logo" />
            </SocialLink>
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
    </FooterWrapper>
  )
}

export default React.memo(Footer)
