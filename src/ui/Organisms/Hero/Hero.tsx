import React from 'react'
import styled from 'styled-components'
import HeroLeftSection from './HeroLeftSection'
import HeroRightSection from './HeroRightSection'

interface StyledProps {
  themeMode: string
}

export const HeroWrapper = styled.div<StyledProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-image: ${({ theme, themeMode }) => {
    let imageUrl =
      themeMode === 'dark'
        ? theme.hero.backgroundImg
        : theme.hero.backgroundImgAlt
    return `url(${imageUrl})`
  }};
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  * div,
  * h1,
  * p {
    color: ${({ theme, themeMode }) =>
      themeMode === 'dark' ? theme.hero.color : theme.hero.colorAlt};
  }

  &:before {
    position: absolute;
    content: '';
    background: ${({ theme, themeMode }) =>
      themeMode === 'dark' ? theme.hero.background : theme.hero.backgroundAlt};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`

interface HeroProps {
  themeMode?: 'dark' | 'light'
  shouldAnimate?: boolean
  tagLine?: string
  title: string
  description: string
  linkLabel?: string
  linkUrl?: string
  imageUrl?: string
  videoUrl?: string
}

const Hero = ({
  themeMode = 'dark',
  shouldAnimate = false,
  tagLine,
  title,
  description,
  linkLabel,
  linkUrl,
  imageUrl = '',
  videoUrl = ''
}: HeroProps) => {
  const hasLeftSection = imageUrl !== '' || videoUrl !== ''

  return (
    <HeroWrapper themeMode={themeMode}>
      <HeroLeftSection
        shouldAnimate={shouldAnimate}
        tagLine={tagLine}
        title={title}
        description={description}
        linkLabel={linkLabel}
        linkUrl={linkUrl}
        hasRightSection={hasLeftSection}
      />
      {hasLeftSection && (
        <HeroRightSection
          shouldAnimate={shouldAnimate}
          imageUrl={imageUrl}
          videoUrl={videoUrl}
        />
      )}
    </HeroWrapper>
  )
}

export default React.memo(Hero)
