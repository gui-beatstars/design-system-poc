import React from 'react';
import styles from './Button.module.css';
import svgPaths from "../imports/svg-zpdog6r5zj";

export interface ButtonWithModuleProps {
  /**
   * The button variant determines the color scheme
   */
  variant?: 'primary' | 'hover' | 'focus' | 'disabled' | 'dark';
  
  /**
   * The button size
   */
  size?: 'large' | 'medium' | 'small';
  
  /**
   * The button shape
   */
  shape?: 'rounded' | 'pill';
  
  /**
   * Button text label
   */
  label?: string;
  
  /**
   * Show icon on the left side
   */
  iconLeft?: boolean;
  
  /**
   * Show icon on the right side
   */
  iconRight?: boolean;
  
  /**
   * Icon only mode (no label)
   */
  iconOnly?: boolean;
  
  /**
   * Click handler
   */
  onClick?: () => void;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Full width button
   */
  fullWidth?: boolean;
  
  /**
   * Loading state
   */
  loading?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

const IconComponent: React.FC<{ size: 'small' | 'medium' | 'large'; color: string }> = ({ size, color }) => {
  const iconSizes = {
    small: 16,
    medium: 16,
    large: 24,
  };
  
  const iconSize = iconSizes[size];
  const viewBox = iconSize === 24 ? "0 0 24 24" : "0 0 16 16";
  const pathData = iconSize === 24 ? svgPaths.p78f2a80 : svgPaths.p15e73480;
  
  return (
    <div className={`${styles.icon} ${styles[`icon${size.charAt(0).toUpperCase() + size.slice(1)}`]}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
        <path 
          clipRule="evenodd" 
          d={pathData} 
          fill={color}
          fillRule="evenodd"
          style={{ fillOpacity: "1" }} 
        />
      </svg>
    </div>
  );
};

/**
 * Button component using CSS Modules for scoped styling.
 * This version demonstrates the Button.module.css usage.
 */
export const ButtonWithModule: React.FC<ButtonWithModuleProps> = ({
  variant = 'primary',
  size = 'large',
  shape = 'rounded',
  label = 'Name me',
  iconLeft = false,
  iconRight = false,
  iconOnly = false,
  onClick,
  disabled = false,
  fullWidth = false,
  loading = false,
  className = '',
}) => {
  const iconColor = disabled ? '#9f9f9f' : 'white';
  
  // Combine CSS Module classes
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    styles[shape],
    iconOnly && styles.iconOnly,
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    disabled && styles.disabled,
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <button
      className={buttonClasses}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
    >
      {/* Icon Left */}
      {(iconLeft || iconOnly) && !iconRight && (
        <div className={styles.iconLeft}>
          <IconComponent size={size} color={iconColor} />
        </div>
      )}
      
      {/* Label */}
      {!iconOnly && (
        <div className={`${styles.label} ${styles[`label${size.charAt(0).toUpperCase() + size.slice(1)}`]}`}>
          <div className={styles.labelText}>
            <p>{label}</p>
          </div>
        </div>
      )}
      
      {/* Icon Right */}
      {iconRight && (
        <div className={styles.iconRight}>
          <IconComponent size={size} color={iconColor} />
        </div>
      )}
    </button>
  );
};

export default Button;
