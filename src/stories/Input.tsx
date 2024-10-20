import React from 'react'
import { cn } from '@/lib/utils'
import './input.css'

export interface InputProps {
  /** Label for the input */
  label: string
  /** Placeholder text for the input */
  placeholder?: string
  /** Is the input disabled? */
  disabled?: boolean
  /** How large should the input be? */
  size?: 'small' | 'medium' | 'large'
  /** Background color for the input */
  backgroundColor?: string
}

/** Primary UI component for user interaction */
export const Input = ({ label, placeholder, disabled = false, size = 'medium', backgroundColor, ...props }: InputProps) => {
  return (
    <div className={cn('storybook-input', `storybook-input--${size}`)} style={{ marginBottom: '16px' }}>
      <label className="storybook-input__label" style={{ marginBottom: '8px' }}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={cn('storybook-input__field', {
          'storybook-input__field--disabled': disabled
        })}
        style={{ backgroundColor }}
        {...props}
      />
    </div>
  )
}
