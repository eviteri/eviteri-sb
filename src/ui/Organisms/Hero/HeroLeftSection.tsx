import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { H1, P } from '../../../ui/typography'
import Link from '../../../ui/Attoms/Link'
import query from '../../../const/mediaQueries'

interface StyledProps {
  hasRightSection?: boolean
  shouldAnimate: boolean
}

export const popIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-4rem) scale(.8);
    }
    100% {
        opacity: 1;
        transform: none;
    }
`

const HeroLeftWrapper = styled.div<StyledProps>`
  ${({ hasRightSection }) => {
    if (hasRightSection) {
      return css`
        margin-top: 56px;
        margin-left: 13%;
        margin-bottom: 194px;
        width: 35%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        @media ${query.lessThanRegular} {
          text-align: center;
          width: 90%;
          max-width: unset;
          margin: 56px auto;
        }
      `
    }

    return css`
      text-align: center;
      max-width: 50%;
      margin: 56px auto 100px auto;
      @media ${query.lessThanLarge} {
        max-width: 80%;
      }
    `
  }}

  ${({ shouldAnimate }) => {
    if (shouldAnimate) {
      return css`
        animation: ${popIn} 0.6s cubic-bezier(0, 0.9, 0.3, 1.2) 0.2s forwards;
        opacity: 0;
      `
    }
  }};
`

const LinkWrapper = styled.div`
  margin-top: 64px;
`

const Heading = styled(H1)`
  @media ${query.lessThanMedium} {
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
  }
`

const TagLine = styled(P)`
  text-transform: uppercase;
`

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
