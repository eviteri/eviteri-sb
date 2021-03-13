import { configure } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import 'jest-styled-components'

jest.spyOn(global.console, 'error').mockImplementation(jest.fn())

// @ts-ignore
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
