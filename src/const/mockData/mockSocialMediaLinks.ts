import linkedInLogo from '../../assets/socialMedia/linked-in.png'
import instagramLogo from '../../assets/socialMedia/instagram.png'
import gitHubLogo from '../../assets/socialMedia/github.png'
import linkedInLogoWhite from '../../assets/socialMedia/linked-in-white.png'
import instagramLogoWhite from '../../assets/socialMedia/instagram-white.png'
import gitHubLogoWhite from '../../assets/socialMedia/github-white.png'

import { SocialMediaArray, SocialMediaDetail } from '../../typings/socialMedia'

const instagram: SocialMediaDetail = {
  label: 'Instagram',
  image: instagramLogo,
  imageAlt: instagramLogoWhite,
  url: 'https://www.instagram.com/chinoviteri/'
}

const linkedIn: SocialMediaDetail = {
  label: 'LinkedIn',
  image: linkedInLogo,
  imageAlt: linkedInLogoWhite,
  url: 'https://www.linkedin.com/in/eloy-viteri-0b331358/'
}

const gitHub: SocialMediaDetail = {
  label: 'GitHub',
  image: gitHubLogo,
  imageAlt: gitHubLogoWhite,
  url: 'https://github.com/eviteri'
}

const socialMediaLinks: SocialMediaArray = [linkedIn, instagram, gitHub]

export default socialMediaLinks
