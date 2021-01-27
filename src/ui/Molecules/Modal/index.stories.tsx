import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'
import mockOurWorkGallery from '../../../const/mockData/ourWorkGallery'
import Modal from './Modal'
import Button from '../../Attoms/Button'

const TestWrapper = styled.div``

export const Default = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <TestWrapper>
      <Button
        type="button"
        buttonType="secondary"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </Button>
      {showModal && (
        <Modal
          title="Gallery"
          gallery={mockOurWorkGallery}
          currentImageIndex={0}
          closeModalHandler={() => setShowModal(false)}
        />
      )}
    </TestWrapper>
  )
}

export default {
  title: 'Molecules/Modal',
  component: Modal,
  name: 'Modal'
} as Meta
