import { configure, shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme'
import 'jest-styled-components'

jest.spyOn(global.console, 'error').mockImplementation(jest.fn())

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    }
  }

configure({ adapter: new Adapter() })

export const shallowWithTheme = (
  children: ReactElement,
  theme: any = defaultTheme
) => {
  return shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
