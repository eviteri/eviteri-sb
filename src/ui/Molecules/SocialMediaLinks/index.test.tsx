import React from 'react'
import { shallow } from 'enzyme'
import {
  SocialMediaArray,
  SocialMediaDetail
} from '../../../typings/socialMedia'
import SocialMediaLinks, { SocialMediaLinksProps } from './SocialMediaLinks'

const instagram: SocialMediaDetail = {
  label: 'Instagram',
  image: 'instagramLogo.png',
  url: '#instagram'
}

const linkedIn: SocialMediaDetail = {
  label: 'LinkedIn',
  image: 'linkedInLogo.png',
  url: '#linkedin'
}

const gitHub: SocialMediaDetail = {
  label: 'GitHub',
  image: 'gitHubLogo.png',
  url: '#github'
}

const socialMediaLinks: SocialMediaArray = [linkedIn, instagram, gitHub]

const socialMediaProps: SocialMediaLinksProps = {
  socialMediaLinks
}

describe('SocialMediaLinks', () => {
  const wrapper = shallow(<SocialMediaLinks {...socialMediaProps} />)

  it('Should Render without errors', () => {
    const links = wrapper.find('[data-test="ev-link"]')

    expect(wrapper.exists()).toBe(true)
    expect(links.length).toBe(socialMediaLinks.length)
  })
})
