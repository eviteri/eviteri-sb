import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React, { ReactElement } from 'react'
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

interface TestWrapperProps {
  children: ReactElement
}

/*
 * wraps styled components theme provider and passes props from wrapper to children
 * so enzyme's setProps() method works as expectedk
 */
export const TestWrapper = ({
  children,
  ...rest
}: TestWrapperProps): ReactElement => {
  const child = React.cloneElement(children, {
    ...rest
  })
  return <ThemeProvider theme={defaultTheme}>{child}</ThemeProvider>
}

export default TestWrapper

// export const shallowWithTheme = (children: ReactElement) => {
//   console.log('I am here')
//   return shallow(<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>)
// }
