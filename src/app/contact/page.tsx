"use client"
import StepOne from '@/components/steps/StepOne'
import { Text } from '@siuxco/design-system'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className="font-size-h1 color-error-6 background-neutral-8">Contact</h1>
      <Text variant="display-1">
        Display 1
      </Text>
      <StepOne />
    </div>
  )
}

export default Contact