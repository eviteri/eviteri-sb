import arcaThumbnail from '../../assets/workGallery/arcaThumbnail.png'
import arca from '../../assets/workGallery/arca.png'
import arcaMobile from '../../assets/workGallery/arcaMobile.png'
import bhumiphotographyThumbnail from '../../assets/workGallery/bhumiphotographyThumbnail.png'
import bhumiphotography from '../../assets/workGallery/bhumiphotography.png'
import bhumiphotographyMobile from '../../assets/workGallery/bhumiphotographyMobile.png'
import captrustThumbnail from '../../assets/workGallery/captrustThumbnail.png'
import captrust from '../../assets/workGallery/captrust.png'
import captrustMobile from '../../assets/workGallery/captrustMobile.png'
import hiingaThumbnail from '../../assets/workGallery/hiingaThumbnail.png'
import hiinga from '../../assets/workGallery/hiinga.png'
import hiingaMobile from '../../assets/workGallery/hiingaMobile.png'
import nascarThumbnail from '../../assets/workGallery/nascarThumbnail.png'
import nascar from '../../assets/workGallery/nascar.png'
import nascarMobile from '../../assets/workGallery/nascarMobile.png'
import eviteri from '../../assets/workGallery/eviteri.png'
import eviteriMobile from '../../assets/workGallery/eviteriMobile.png'
import eviteriThumbnail from '../../assets/workGallery/eviteriThumbnail.png'
import { OurWorkGallery } from '../../typings/ourWorkGallery'

const ourWorkGallery: OurWorkGallery = [
  {
    id: 1,
    title: 'EViteri',
    description:
      'This site is built with StoryBook.js, StyledComponents, TypeScript, Unit Testing and React',
    small: eviteriThumbnail,
    large: eviteri,
    medium: eviteriMobile
  },
  {
    id: 2,
    title: 'Bhumiphotography',
    url: 'http://bhumiphotography.com/',
    description:
      'This is a Headless website. It uses React.JS in the front end and Wordpress backend to make API calls.',
    small: bhumiphotographyThumbnail,
    large: bhumiphotography,
    medium: bhumiphotographyMobile
  },
  {
    id: 3,
    title: 'Captrust Advice',
    url: 'https://www.captrustadvice.com/',
    description:
      'This site was built with WordPress. It uses PHP, MySql Data Base  and Gulp.js to manage front end dependencies suchs as: JavaScript and SCSS.',
    small: captrustThumbnail,
    large: captrust,
    medium: captrustMobile
  },
  {
    id: 4,
    title: 'Hiinga',
    url: 'https://hiinga.org/',
    description:
      'This site was built with a custom WordPress theme.  It uses PHP, CSS, HTML, JavaScript and MySql Data Base.',
    small: hiingaThumbnail,
    large: hiinga,
    medium: hiingaMobile
  },
  {
    id: 5,
    title: 'Arca',
    url: 'https://arcaworld.com/',
    description:
      'This site was built with a custom WordPress theme.  It uses PHP, CSS, HTML, JavaScript and MySql Data Base.',
    small: arcaThumbnail,
    large: arca,
    medium: arcaMobile
  },
  {
    id: 6,
    title: 'Nascar Pintys',
    url: 'https://www.nascar.ca/',
    description:
      'This site was built with a WordPress child theme. It uses PHP, CSS, HTML, JavaScript and MySql Data Base.',
    small: nascarThumbnail,
    large: nascar,
    medium: nascarMobile
  }
]

export default ourWorkGallery
