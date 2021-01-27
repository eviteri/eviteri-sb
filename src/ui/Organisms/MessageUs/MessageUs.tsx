import React, { useRef } from 'react'
import { useInViewPort } from '../../../customHooks'
import { FormElements } from '../../../typings/contactForm'
import Form from '../../../ui/Molecules/Form'
import ClientLogos from '../../../ui/Molecules/ClientLogos'
import { Logos } from '../../../typings/clientLogo'
import {
  MessageUsWrapper,
  ClientLogosWrapper,
  ContactFormWrapper
} from './StyledComponents'

export interface MessageUsProps {
  shouldAnimate?: boolean
  clientLogos: Logos
  formTitle: string
  contactFormFields: FormElements
  submitButtonLabel: string
  onSubmitFormHandler: (formElements: FormElements) => void
}

const MessageUs = ({
  shouldAnimate = false,
  clientLogos,
  formTitle,
  contactFormFields,
  submitButtonLabel,
  onSubmitFormHandler
}: MessageUsProps) => {
  const intersectionRation = 0.1
  const contactSectionRef = useRef(null)

  const isInViewPort = useInViewPort(intersectionRation, contactSectionRef)

  const shouldTriggerAnimation = isInViewPort && shouldAnimate

  return (
    <MessageUsWrapper
      ref={contactSectionRef}
      shouldAnimate={shouldAnimate}
      shouldTriggerAnimation={shouldTriggerAnimation}
    >
      <ClientLogosWrapper>
        <ClientLogos clientLogos={clientLogos} />
      </ClientLogosWrapper>
      <ContactFormWrapper>
        <Form
          title={formTitle}
          contactFormFields={contactFormFields}
          submitLabel={submitButtonLabel}
          onSubmitFormHandler={onSubmitFormHandler}
        />
      </ContactFormWrapper>
    </MessageUsWrapper>
  )
}

export default React.memo(MessageUs)
