import React from 'react'
import HeroLeftSection from './HeroLeftSection'
import HeroRightSection from './HeroRightSection'
import WaveBottom from '../../Shapes/WaveBottom'
import CurveBottom from '../../Shapes/CurveBottom'
import { HeroWrapper } from './StyledComponents'

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
      {themeMode === 'dark' ? <WaveBottom /> : <CurveBottom />}
    </HeroWrapper>
  )
}

export default React.memo(Hero)
