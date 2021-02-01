import React, { useRef } from 'react'
import { useInViewPort } from '../../../customHooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WhyChooseUsData, ItemsDetails } from '../../../typings/whyChooseUs'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import {
  WhyChooseUsWrapper,
  LeftSectionWrapper,
  RightSectionWrapper,
  CutomTitle,
  ItemTitle,
  IconWrapper,
  CutomParagraph
} from './StyledComponents'

export interface WhyChooseUsProps {
  shouldAnimate: boolean
  data: WhyChooseUsData
}

const WhyChooseUs = ({ shouldAnimate, data }: WhyChooseUsProps) => {
  const intersectionRation = 0.1
  const whyChooseUsRef = useRef(null)

  const isInViewPort = useInViewPort(intersectionRation, whyChooseUsRef)

  const shouldTriggerAnimation = isInViewPort && shouldAnimate

  const { title, description, items, image, backgroundImage } = data

  return (
    <WhyChooseUsWrapper
      ref={whyChooseUsRef}
      shouldAnimate={shouldAnimate}
      shouldTriggerAnimation={shouldTriggerAnimation}
    >
      <LeftSectionWrapper backgroundImage={backgroundImage}>
        <img src={image} alt="Eloy Viteri" />
      </LeftSectionWrapper>
      <RightSectionWrapper>
        <CutomTitle>{title}</CutomTitle>
        <CutomParagraph>{description}</CutomParagraph>
        {items.map((item: ItemsDetails, index) => {
          const icon = item.icon as IconName
          return (
            <div key={index}>
              <ItemTitle>
                <IconWrapper>
                  <FontAwesomeIcon icon={['fas', icon]} />
                </IconWrapper>
                {item.title}
              </ItemTitle>
              <CutomParagraph>{item.description}</CutomParagraph>
            </div>
          )
        })}
      </RightSectionWrapper>
    </WhyChooseUsWrapper>
  )
}

export default React.memo(WhyChooseUs)
