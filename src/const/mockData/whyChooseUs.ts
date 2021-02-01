import userPicture from '../../assets/backgrounds/user.png'
import bean from '../../assets/backgrounds/bean.png'
import { WhyChooseUsData } from '../../typings/whyChooseUs'

const data: WhyChooseUsData = {
  title: 'Why choose us',
  description:
    "We are small, but nimble. Our combined expertise and experience empower our start-up, small business, and enterprise clients. Here's a few reasons why they chose us:",
  image: userPicture,
  backgroundImage: bean,
  items: [
    {
      icon: 'handshake',
      title: 'We are trustworthy and reliable.',
      description:
        'Our clients know that they can put their trust in the work that we do. We deliver on value and impact, no matter how small.'
    },
    {
      icon: 'lightbulb',
      title: 'We work smart and hard — for you.',
      description:
        "Digital is never 'done'. It's a constant process. And therefore, efficiency is key. We work to save you both time and money."
    },
    {
      icon: 'user',
      title: 'We believe in partnership.',
      description:
        'We believe our client-partners should be involved at every step of the process but rest assured — we do the heavy lifting.'
    }
  ]
}

export default data
