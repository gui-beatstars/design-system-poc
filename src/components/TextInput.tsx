import React, { forwardRef } from 'react';
import styles from './TextInput.module.css';

export interface TextInputProps {
  /**
   * The input variant determines the visual style
   */
  variant?: 'default' | 'filled' | 'outlined' | 'underlined';
  
  /**
   * The input size
   */
  size?: 'small' | 'medium' | 'large';
  
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
   * Input label
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
   * Success message
   */
  success?: string;
  
  /**
   * Input state
   */
  state?: 'default' | 'error' | 'success' | 'disabled';
  
  /**
   * Show icon on the left side
   */
  iconLeft?: React.ReactNode;
  
  /**
   * Show icon on the right side
   */
  iconRight?: React.ReactNode;
  
  /**
   * Show clear button when input has value
   */
  clearable?: boolean;
  
  /**
   * Show character count
   */
  showCount?: boolean;
  
  /**
   * Maximum character count
   */
  maxLength?: number;
  
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
   * Clear handler
   */
  onClear?: () => void;
  
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

/**
 * TextInput component using CSS Modules for scoped styling.
 * Provides a comprehensive input component with various states, sizes, and variants.
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  variant = 'default',
  size = 'medium',
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  label = '',
  helperText = '',
  error = '',
  success = '',
  state = 'default',
  iconLeft,
  iconRight,
  clearable = false,
  showCount = false,
  maxLength,
  disabled = false,
  readOnly = false,
  required = false,
  fullWidth = false,
  autoFocus = false,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  onClear,
  className = '',
  name,
  id,
  autoComplete,
}, ref) => {
  // Determine the actual state based on props
  const actualState = error ? 'error' : success ? 'success' : disabled ? 'disabled' : state;
  
  // Handle clear functionality
  const handleClear = () => {
    if (onClear) {
      onClear();
    } else if (onChange) {
      // Create a synthetic event for clearing
      const syntheticEvent = {
        target: { value: '' },
        currentTarget: { value: '' }
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };
  
  // Get character count
  const currentLength = value?.length || 0;
  const hasValue = Boolean(value && value.length > 0);
  
  // Combine CSS Module classes
  const containerClasses = [
    styles.container,
    styles[variant],
    styles[size],
    styles[actualState],
    fullWidth && styles.fullWidth,
    className,
  ].filter(Boolean).join(' ');
  
  const inputClasses = [
    styles.input,
    styles[`input${size.charAt(0).toUpperCase() + size.slice(1)}`],
    iconLeft && styles.inputWithLeftIcon,
    (iconRight || (clearable && hasValue)) && styles.inputWithRightIcon,
  ].filter(Boolean).join(' ');
  
  const labelClasses = [
    styles.label,
    styles[`label${size.charAt(0).toUpperCase() + size.slice(1)}`],
    required && styles.required,
    actualState === 'error' && styles.labelError,
    actualState === 'success' && styles.labelSuccess,
  ].filter(Boolean).join(' ');
  
  const helperClasses = [
    styles.helper,
    styles[`helper${size.charAt(0).toUpperCase() + size.slice(1)}`],
    actualState === 'error' && styles.helperError,
    actualState === 'success' && styles.helperSuccess,
  ].filter(Boolean).join(' ');
  
  return (
    <div className={containerClasses}>
      {/* Label */}
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
          {required && <span className={styles.requiredAsterisk}>*</span>}
        </label>
      )}
      
      {/* Input Container */}
      <div className={styles.inputContainer}>
        {/* Left Icon */}
        {iconLeft && (
          <div className={styles.iconLeft}>
            {iconLeft}
          </div>
        )}
        
        {/* Input Field */}
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
          maxLength={maxLength}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          className={inputClasses}
          aria-invalid={actualState === 'error'}
          aria-describedby={
            [
              helperText && `${id || name || 'input'}-helper`,
              error && `${id || name || 'input'}-error`,
              success && `${id || name || 'input'}-success`,
              showCount && `${id || name || 'input'}-count`,
            ].filter(Boolean).join(' ') || undefined
          }
        />
        
        {/* Right Icon or Clear Button */}
        {(iconRight || (clearable && hasValue)) && (
          <div className={styles.iconRight}>
            {clearable && hasValue ? (
              <button
                type="button"
                className={styles.clearButton}
                onClick={handleClear}
                tabIndex={-1}
                aria-label="Clear input"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ) : (
              iconRight
            )}
          </div>
        )}
      </div>
      
      {/* Helper Text, Error, Success, and Count */}
      <div className={styles.footer}>
        {/* Helper Text, Error, or Success */}
        {(helperText || error || success) && (
          <div className={helperClasses}>
            {error && (
              <span id={`${id || name || 'input'}-error`} className={styles.errorText}>
                {error}
              </span>
            )}
            {success && !error && (
              <span id={`${id || name || 'input'}-success`} className={styles.successText}>
                {success}
              </span>
            )}
            {helperText && !error && !success && (
              <span id={`${id || name || 'input'}-helper`} className={styles.helperText}>
                {helperText}
              </span>
            )}
          </div>
        )}
        
        {/* Character Count */}
        {showCount && maxLength && (
          <div className={styles.count}>
            <span
              id={`${id || name || 'input'}-count`}
              className={`${styles.countText} ${
                currentLength > maxLength ? styles.countError : ''
              }`}
            >
              {currentLength}/{maxLength}
            </span>
          </div>
        )}
      </div>
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
