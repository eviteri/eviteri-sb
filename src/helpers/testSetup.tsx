import React, { ReactChildren, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import consumerTheme from '../theme'

/*
 * wraps styled components theme provider and passes props from wrapper to children
 * so enzyme's setProps() method works as expectedk
 */
type TestWrapperTypes = {
  children: ReactChildren | ReactElement
  [key: string]: any
}
export const TestWrapper = ({
  children,
  ...props
}: TestWrapperTypes): ReactElement => {
  const child = React.cloneElement(children as ReactElement, {
    ...props
  })
  return <ThemeProvider theme={consumerTheme}>{child}</ThemeProvider>
}

export default TestWrapper
