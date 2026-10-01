import '@testing-library/jest-dom/vitest'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PersonalInfo from './PersonalInfo'
import { UserContext } from './UserContext'
import type { userContextType, validationErrorType } from './types'

const renderWithContext = (component: React.ReactNode) => {
  const mockContextValue = {
    userDetails: {
      personalInfo: { name: '', email: '', phone: '' },
      planChoice: { planID: 1, billingCycle: 'monthly' },
      addOnChoice: [],
    } as userContextType,
    setUserDetails: () => {},
    validationError: {
      personalInfo: { name: false, email: false, phone: false },
      planChoice: false,
    } as validationErrorType,
    setValidationError: () => {},
    setStepNumber: () => {},
  }

  return render(
    <UserContext.Provider value={mockContextValue}>
      {component}
    </UserContext.Provider>
  )
}

describe('PersonalInfo', () => {
  it('renders form title and description', () => {
    renderWithContext(<PersonalInfo />)

    expect(screen.getByText('Personal Info')).toBeInTheDocument()
    expect(screen.getByText(/provide your name, email/i)).toBeInTheDocument()
  })

  it('renders all three input fields', () => {
    renderWithContext(<PersonalInfo />)

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(3)
  })

  it('renders input fields with correct placeholders', () => {
    renderWithContext(<PersonalInfo />)

    expect(screen.getByPlaceholderText('e.g. Stephen King')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('e.g. stephenking@lorem.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('e.g. +1 234 567 890')).toBeInTheDocument()
  })

  it('renders form with empty values initially', () => {
    renderWithContext(<PersonalInfo />)

    const inputs = screen.getAllByRole('textbox') as HTMLInputElement[]
    inputs.forEach(input => {
      expect(input.value).toBe('')
    })
  })
})
