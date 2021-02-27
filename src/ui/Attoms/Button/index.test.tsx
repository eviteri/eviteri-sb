import React from 'react'
import { mount } from 'enzyme'
import TestWrapper from '../../../helpers/testSetup'
import Button from './Button'
import theme from '../../../theme'
import 'jest-styled-components'

describe('Button', () => {
  it('Should Render Primary Button', () => {
    const buttonWrapper = mount(
      <TestWrapper>
        <Button
          type="button"
          buttonType="primary"
          onClick={() => console.log('button clicked')}
        >
          Primary Button
        </Button>
      </TestWrapper>
    )
    const button = buttonWrapper.find('button')
    expect(button).toHaveStyleRule('color', theme.button.primary.text)
    expect(button).toHaveStyleRule(
      'background-color',
      theme.button.primary.background
    )
    expect(button).toHaveStyleRule(
      'background-color',
      theme.button.primary.hover,
      {
        modifier: ':hover'
      }
    )
  })

  it('Should Render Secondary Button', () => {
    const buttonWrapper = mount(
      <TestWrapper>
        <Button
          type="button"
          buttonType="secondary"
          onClick={() => console.log('button clicked')}
        >
          Secondary Button
        </Button>
      </TestWrapper>
    )

    const button = buttonWrapper.find('button')

    expect(button).toHaveStyleRule('color', theme.button.secondary.text)
    expect(button).toHaveStyleRule(
      'background-color',
      theme.button.secondary.background
    )
    expect(button).toHaveStyleRule(
      'background-color',
      theme.button.secondary.hover,
      {
        modifier: ':hover'
      }
    )
  })

  it('Should Render Dark Hamburger Button', () => {
    const buttonWrapper = mount(
      <TestWrapper>
        <Button
          themeMode="dark"
          buttonType="hamburger"
          isMenuOpen={false}
          onClick={() => {}}
        />
      </TestWrapper>
    )

    const button = buttonWrapper.find('button')

    expect(button).toHaveStyleRule(
      'background-color',
      theme.hamburger.background,
      {
        modifier: '.bar1'
      }
    )
  })

  it('Should Render Light Hamburger Button', () => {
    const buttonWrapper = mount(
      <TestWrapper>
        <Button
          themeMode="light"
          buttonType="hamburger"
          isMenuOpen={false}
          onClick={() => {}}
        />
      </TestWrapper>
    )

    const button = buttonWrapper.find('button')

    expect(button).toHaveStyleRule(
      'background-color',
      theme.hamburger.backgroundAlt,
      {
        modifier: '.bar1'
      }
    )
  })

  it('Should Render Hamburger with background-color: backgroundAlt when menu is open', () => {
    const buttonWrapper = mount(
      <TestWrapper>
        <Button buttonType="hamburger" isMenuOpen={true} onClick={() => {}} />
      </TestWrapper>
    )

    const button = buttonWrapper.find('button')

    expect(button).toHaveStyleRule(
      'background-color',
      theme.hamburger.backgroundAlt,
      {
        modifier: '.bar1'
      }
    )
  })
})
