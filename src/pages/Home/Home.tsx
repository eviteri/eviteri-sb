import React from 'react'
import styled from 'styled-components'
import mockNavigationLInks from '../../const/mockData/navigationLinks.json'
import mockSocialMediaLinks from '../../const/mockData/mockSocialMediaLinks'
import greenBackground from '../../assets/backgrounds/greenBackground.png'
import homeHeroImage from '../../assets/backgrounds/HomeHeroImage.png'

import Header from '../../ui/Organisms/Header'
import Hero from '../../ui/Organisms/Hero'
import query from '../../const/mediaQueries'

export const PageWrapper = styled.div`
  background-image: url(${greenBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const HeroConatiner = styled.div`
  margin-top: 111px;

  @media ${query.lessThanLarge} {
    margin-top: 75px;
  }
`

const Home = () => {
  return (
    <PageWrapper>
      {/* TODO: Need to pass user phone number, email and work with us link */}
      <Header
        themeMode="dark"
        siteLogoUrl="#home"
        navLinks={mockNavigationLInks}
        socialMediaLinks={mockSocialMediaLinks}
      />
      <HeroConatiner>
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
      </HeroConatiner>

      <main>
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
        nulla. Sit amet est placerat in egestas erat imperdiet sed. Cras semper
        auctor neque vitae tempus quam pellentesque. Consectetur adipiscing elit
        ut aliquam purus sit amet. Blandit massa enim nec dui nunc mattis enim.
        Varius duis at
        <a href="google.com" target="_blank">
          Test Component{' '}
        </a>
        consectetur lorem. Amet consectetur adipiscing elit ut. Senectus et
        netus et malesuada fames. Mi sit amet mauris commodo quis imperdiet
        massa tincidunt nunc. Quam lacus suspendisse faucibus interdum posuere
        lorem. Neque sodales ut etiam sit amet nisl. Tellus in hac habitasse
        platea dictumst vestibulum rhoncus est. Ante in nibh mauris cursus
        mattis molestie a. Sit amet consectetur adipiscing elit duis tristique.
        Viverra orci sagittis eu volutpat odio facilisis mauris. Egestas diam in
        arcu cursus euismod quis. Mauris vitae ultricies leo integer malesuada
        nunc vel. Velit sed ullamcorper morbi tincidunt ornare massa eget
        egestas. Eget egestas purus viverra accumsan. Netus et malesuada fames
        ac turpis. Donec massa sapien faucibus et molestie ac feugiat sed. Erat
        velit scelerisque in dictum non consectetur a. Convallis posuere morbi
        leo urna. Massa enim nec dui nunc mattis enim ut. Diam maecenas sed enim
        ut sem. Enim sit amet venenatis urna cursus eget nunc scelerisque
        viverra. Vel elit scelerisque mauris pellentesque pulvinar pellentesque
        habitant morbi. Odio ut enim blandit volutpat maecenas volutpat. Vitae
        purus faucibus ornare suspendisse sed nisi. Erat velit scelerisque in
        dictum non. Vel quam elementum pulvinar etiam non. Dignissim enim sit
        amet venenatis. Porttitor rhoncus dolor purus non enim praesent
        elementum facilisis leo. Adipiscing vitae proin sagittis nisl rhoncus.
        Convallis convallis tellus id interdum velit laoreet id. Phasellus
        vestibulum lorem sed risus ultricies tristique nulla. Sit amet dictum
        sit amet justo donec enim diam vulputate. Etiam dignissim diam quis enim
        lobortis scelerisque fermentum dui faucibus. Nulla at volutpat diam ut
        venenatis tellus in metus. Nibh sit amet commodo nulla. Ut faucibus
        pulvinar elementum integer enim neque volutpat. Facilisis gravida neque
        convallis a cras semper auctor neque vitae. Magna eget est lorem ipsum
        dolor sit amet. Arcu ac tortor dignissim convallis aenean et tortor at.
        Eu sem integer vitae justo eget magna fermentum. Habitasse platea
        dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
        Adipiscing elit ut aliquam purus sit. Dignissim cras tincidunt lobortis
        feugiat vivamus. Adipiscing vitae proin sagittis nisl. Accumsan tortor
        posuere ac ut. Purus sit amet volutpat consequat mauris nunc congue nisi
        vitae. Odio aenean sed adipiscing diam donec adipiscing tristique.
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.
        Convallis convallis tellus id interdum velit laoreet id donec. Integer
        quis auctor elit sed vulputate mi sit amet mauris. Quis varius quam
        quisque id diam vel quam elementum. Enim nulla aliquet porttitor lacus
        luctus accumsan tortor posuere. Diam quis enim lobortis scelerisque. Sed
        nisi lacus sed viverra tellus in hac habitasse. Sit amet nisl purus in
        mollis. Feugiat vivamus at augue eget arcu. Netus et malesuada fames ac
        turpis egestas integer eget. Cras tincidunt lobortis feugiat vivamus at
        augue eget arcu dictum. Risus pretium quam vulputate dignissim
        suspendisse in. Convallis aenean et tortor at risus viverra adipiscing
        at in. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus
        viverra. Nec dui nunc mattis enim ut tellus elementum sagittis. Et
        malesuada fames ac turpis egestas sed tempus urna. Ac auctor augue
        mauris augue neque gravida in fermentum. Nulla aliquet enim tortor at
        auctor urna nunc id. Velit scelerisque in dictum non consectetur a erat
        nam at. Hendrerit dolor magna eget est. Quam elementum pulvinar etiam
        non quam lacus. Ac odio tempor orci dapibus ultrices in. Eget lorem
        dolor sed viverra ipsum. Molestie a iaculis at erat pellentesque
        adipiscing commodo elit. Ante metus dictum at tempor. Placerat
        vestibulum lectus mauris ultrices eros in cursus turpis massa. Ligula
        ullamcorper malesuada proin libero nunc consequat. Aliquam ultrices
        sagittis orci a scelerisque. Ipsum faucibus vitae aliquet nec
        ullamcorper. Non diam phasellus vestibulum lorem sed risus ultricies.
        Nulla facilisi nullam vehicula ipsum a arcu cursus. Nunc sed id semper
        risus in hendrerit gravida rutrum quisque. Malesuada fames ac turpis
        egestas maecenas pharetra. Neque egestas congue quisque egestas diam.
        Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.
        Consequat ac felis donec et odio pellentesque diam volutpat commodo.
        Morbi tristique senectus et netus et malesuada fames ac. Eget duis at
        tellus at. Cursus mattis molestie a iaculis. Dolor purus non enim
        praesent elementum facilisis leo vel fringilla. Ultricies mi quis
        hendrerit dolor magna eget est lorem ipsum. Vestibulum sed arcu non odio
        euismod. Mi in nulla posuere sollicitudin aliquam ultrices sagittis
        orci. Lectus proin nibh nisl condimentum id venenatis a condimentum
        vitae. Habitant morbi tristique senectus et. Facilisis sed odio morbi
        quis commodo odio aenean sed adipiscing. Dolor sit amet consectetur
        adipiscing elit duis tristique. Curabitur gravida arcu ac tortor
        dignissim convallis aenean. Auctor elit sed vulputate mi. Diam in arcu
        cursus euismod quis viverra nibh. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames. Sed risus ultricies tristique
        nulla. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing.
        Arcu dictum varius duis at. Mauris pharetra et ultrices neque ornare
        aenean euismod elementum. Elit at imperdiet dui accumsan sit. Sagittis
        id consectetur purus ut faucibus pulvinar elementum integer. Habitant
        morbi tristique senectus et netus et malesuada. Sit amet mauris commodo
        quis. Turpis nunc eget lorem dolor sed viverra ipsum. Mattis nunc sed
        blandit libero volutpat sed cras. Sit amet est placerat in egestas erat
        imperdiet sed euismod. Faucibus scelerisque eleifend donec pretium
        vulputate sapien nec sagittis. Semper quis lectus nulla at volutpat diam
        ut venenatis tellus. Odio eu feugiat pretium nibh ipsum. A arcu cursus
        vitae congue mauris rhoncus aenean. Commodo viverra maecenas accumsan
        lacus vel facilisis volutpat est. Habitant morbi tristique senectus et
        netus et malesuada fames ac. Neque convallis a cras semper auctor neque.
        Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Quam
        vulputate dignissim suspendisse in est ante.
      </main>
    </PageWrapper>
  )
}

export default Home
