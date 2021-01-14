import linkedInLogo from '../../assets/socialMedia/linked-in.png'
import instagramLogo from '../../assets/socialMedia/instagram.png'
import gitHubLogo from '../../assets/socialMedia/github.png'

import { SocialMediaArray, SocialMediaDetail } from '../../typings/socialMedia'

const instagram: SocialMediaDetail = {
  label: 'Instagram',
  image: instagramLogo,
  url: '#instagram'
}

const linkedIn: SocialMediaDetail = {
  label: 'LinkedIn',
  image: linkedInLogo,
  url: '#linkedin'
}

const gitHub: SocialMediaDetail = {
  label: 'GitHub',
  image: gitHubLogo,
  url: '#github'
}

const socialMediaLinks: SocialMediaArray = [linkedIn, instagram, gitHub]

export default socialMediaLinks
