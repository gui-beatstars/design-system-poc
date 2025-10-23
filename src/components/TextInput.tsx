import React, { forwardRef, useState } from 'react';
import styles from './TextInput.module.css';

export interface TextInputProps {
  /**
   * The input size - S (40px) or M (48px)
   */
  size?: 'S' | 'M';
  
  /**
   * Input type (text, email, password, etc.)
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Input value
   */
  value?: string;
  
  /**
   * Default value for uncontrolled input
   */
  defaultValue?: string;
  
  /**
   * Input label text
   */
  label?: string;
  
  /**
   * Helper text below the input
   */
  helperText?: string;
  
  /**
   * Error message
   */
  error?: string;
  
  /**
   * Input status state
   */
  status?: 'Default' | 'Active' | 'Active-Filling' | 'Filled' | 'Disabled' | 'Error';
  
  /**
   * Show label above input
   */
  hasLabel?: boolean;
  
  /**
   * Show icon in the right area
   */
  hasIcon?: boolean;
  
  /**
   * Custom icon component
   */
  icon?: React.ReactNode;
  
  /**
   * Show helper text below input
   */
  hasBottomHelper?: boolean;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Read-only state
   */
  readOnly?: boolean;
  
  /**
   * Required field indicator
   */
  required?: boolean;
  
  /**
   * Full width input
   */
  fullWidth?: boolean;
  
  /**
   * Auto-focus the input
   */
  autoFocus?: boolean;
  
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Key down handler
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Input name attribute
   */
  name?: string;
  
  /**
   * Input id attribute
   */
  id?: string;
  
  /**
   * Input autocomplete attribute
   */
  autoComplete?: string;
}

// Helper Text Component - matches Figma exactly
const HelperText: React.FC<{ className?: string; showIcon?: boolean; text?: string }> = ({ 
  className, 
  showIcon = true, 
  text = "This is hint text placeholder." 
}) => {
  return (
    <div className={`${styles.helperText} ${className || ''}`}>
      {showIcon && (
        <div className={styles.helperIcon}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 4V6"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8H6.01"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      <div className={styles.helperTextContent}>
        <p>{text}</p>
      </div>
    </div>
  );
};

// Default Icon Component - Plus/Add icon from Figma
const DefaultIcon: React.FC<{ className?: string; disabled?: boolean }> = ({ className, disabled = false }) => {
  return (
    <div className={`${styles.defaultIcon} ${disabled ? styles.defaultIconDisabled : ''} ${className || ''}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 1V15M1 8H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// Cursor Component for Active states
const Cursor: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${styles.cursor} ${className || ''}`}>
      <div className={styles.cursorInner}></div>
    </div>
  );
};

/**
 * TextInput component matching the exact Figma design.
 * Supports S (40px) and M (48px) sizes with 6 different states.
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  size = 'M',
  type = 'text',
  placeholder = 'Change text here',
  value,
  defaultValue,
  label = 'Label',
  helperText = 'This is hint text placeholder.',
  error,
  status = 'Default',
  hasLabel = true,
  hasIcon = true,
  icon,
  hasBottomHelper = true,
  disabled = false,
  readOnly = false,
  required = false,
  fullWidth = false,
  autoFocus = false,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  className = '',
  name,
  id,
  autoComplete,
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value || defaultValue || '');
  
  // Determine the actual status based on props and state
  const hasError = error && typeof error === 'string' && error.trim() !== '';
  const actualStatus = disabled ? 'Disabled' : 
                      hasError ? 'Error' : 
                      isFocused ? (internalValue ? 'Active-Filling' : 'Active') :
                      internalValue ? 'Filled' : status;
  
  // Handle focus events
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };
  
  // Handle change events
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };
  
  // Container classes
  const containerClasses = [
    styles.container,
    styles[`size${size}`],
    fullWidth && styles.fullWidth,
    className,
  ].filter(Boolean).join(' ');
  
  // Input container classes
  const inputContainerClasses = [
    styles.inputContainer,
    styles[`inputContainer${size}`],
    styles[`inputContainer${actualStatus}`],
  ].filter(Boolean).join(' ');
  
  // Input classes
  const inputClasses = [
    styles.input,
    styles[`input${size}`],
    styles[`input${actualStatus}`],
  ].filter(Boolean).join(' ');
  
  // Label classes
  const labelClasses = [
    styles.label,
    required && styles.required,
  ].filter(Boolean).join(' ');
  
  return (
    <div className={containerClasses}>
      {/* Label */}
      {hasLabel && (
        <div className={labelClasses}>
          <label htmlFor={id}>
            {label}
            {required && <span className={styles.requiredAsterisk}>*</span>}
          </label>
        </div>
      )}
      
      {/* Input Container */}
      <div className={inputContainerClasses}>
        {/* Text Area */}
        <div className={styles.textArea}>
          <input
            ref={ref}
            type={type}
            id={id}
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={onKeyDown}
            className={inputClasses}
            aria-invalid={actualStatus === 'Error'}
            aria-describedby={
              [
                helperText && `${id || name || 'input'}-helper`,
                error && `${id || name || 'input'}-error`,
              ].filter(Boolean).join(' ') || undefined
            }
          />
          
          {/* Cursor for Active states */}
          {(actualStatus === 'Active' || actualStatus === 'Active-Filling') && (
            <Cursor />
          )}
        </div>
        
        {/* Icon Area */}
        {hasIcon && (
          <div className={styles.iconArea}>
            {icon || <DefaultIcon disabled={disabled} />}
          </div>
        )}
      </div>
      
      {/* Helper Text or Error */}
      {hasBottomHelper && (
        <div className={styles.helper}>
          {actualStatus === 'Error' ? (
            <div className={styles.errorText}>
              <p>{error}</p>
            </div>
          ) : (
            <HelperText text={helperText} />
          )}
        </div>
      )}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;