import React from 'react'
import { P } from '../../../ui/typography'
import Link from '../../../ui/Attoms/Link'
import {
  HeroLeftWrapper,
  LinkWrapper,
  Heading,
  TagLine
} from './StyledComponents'

interface HeroLeftSectionProps {
  shouldAnimate: boolean
  tagLine?: string
  title: string
  description: string
  linkLabel?: string
  linkUrl?: string
  hasRightSection: boolean
}

const HeroLeftSection = ({
  shouldAnimate,
  tagLine,
  title,
  description,
  linkLabel,
  linkUrl,
  hasRightSection
}: HeroLeftSectionProps) => {
  return (
    <HeroLeftWrapper
      hasRightSection={hasRightSection}
      shouldAnimate={shouldAnimate}
    >
      {tagLine && <TagLine>web development services</TagLine>}

      <Heading>{title}</Heading>
      <P>{description}</P>
      {linkLabel && linkUrl && (
        <LinkWrapper>
          <Link
            linkLook="button"
            linkType="primary"
            isInline={true}
            href="#viewourwork"
          >
            View our work
          </Link>
        </LinkWrapper>
      )}
    </HeroLeftWrapper>
  )
}

export default React.memo(HeroLeftSection)
