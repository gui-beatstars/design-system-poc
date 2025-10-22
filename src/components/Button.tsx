import React from 'react';
import svgPaths from "../imports/svg-zpdog6r5zj";

export interface ButtonProps {
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
}

// Variant configurations
const variantConfig = {
  primary: {
    bg: 'bg-[#006aff]',
    textColor: 'text-white',
    iconColor: 'white',
    border: 'border border-[rgba(255,255,255,0.16)] border-solid',
    shadow: 'shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)]',
    hoverBg: 'hover:bg-[#3388ff]',
    hoverBorder: 'hover:border-[rgba(255,255,255,0.08)] hover:border-2',
    hoverShadow: 'hover:shadow-[0px_8px_8px_0px_rgba(0,0,0,0.05)]',
  },
  hover: {
    bg: 'bg-[#3388ff]',
    textColor: 'text-white',
    iconColor: 'white',
    border: 'border-2 border-[rgba(255,255,255,0.08)] border-solid',
    shadow: 'shadow-[0px_8px_8px_0px_rgba(0,0,0,0.05)]',
  },
  focus: {
    bg: 'bg-[#3388ff]',
    textColor: 'text-white',
    iconColor: 'white',
    border: 'border-2 border-[rgba(255,255,255,0.16)] border-solid',
    shadow: '',
  },
  disabled: {
    bg: 'bg-[#f0f0f0]',
    textColor: 'text-[#9f9f9f]',
    iconColor: '#9f9f9f',
    border: '',
    shadow: '',
  },
  dark: {
    bg: 'bg-[#0a0a09]',
    textColor: 'text-white',
    iconColor: 'white',
    border: 'border border-[rgba(255,255,255,0.08)] border-solid',
    shadow: 'shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)]',
    hoverBg: 'hover:bg-[#2a2a29]',
    hoverBorder: 'hover:border-[rgba(255,255,255,0.16)] hover:border-2',
    hoverShadow: 'hover:shadow-[0px_8px_8px_0px_rgba(0,0,0,0.05)]',
  },
};

// Size configurations
const sizeConfig = {
  large: {
    padding: 'p-[12px]',
    gap: 'gap-[8px]',
    iconSize: 24,
    iconViewBox: "0 0 24 24",
    iconPath: svgPaths.p78f2a80,
    labelPadding: 'p-0 px-[4px]',
    labelGap: 'gap-[8px]',
    minHeight: 'min-h-[48px]',
  },
  medium: {
    padding: 'p-[12px]',
    gap: 'gap-[4px]',
    iconSize: 16,
    iconViewBox: "0 0 16 16",
    iconPath: svgPaths.p15e73480,
    labelPadding: 'p-0 px-[4px]',
    labelGap: 'gap-[8px]',
    minHeight: 'min-h-[40px]',
  },
  small: {
    padding: 'p-[8px]',
    gap: 'gap-[4px]',
    iconSize: 16,
    iconViewBox: "0 0 16 16",
    iconPath: svgPaths.p15e73480,
    labelPadding: 'p-0 px-[4px]',
    labelGap: 'gap-[8px]',
    minHeight: 'min-h-[32px]',
  },
};

// Shape configurations
const shapeConfig = {
  rounded: 'rounded-[8px]',
  pill: 'rounded-[999px]',
};

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'large',
  shape = 'rounded',
  label = 'Name me',
  iconLeft = false,
  iconRight = false,
  iconOnly = false,
  onClick,
  disabled = false,
}) => {
  const variantStyles = variantConfig[disabled ? 'disabled' : variant];
  const sizeStyles = sizeConfig[size];
  const shapeStyles = shapeConfig[shape];
  const iconColor = disabled ? '#9f9f9f' : variantStyles.iconColor;

  const renderIcon = () => (
    <div className="flex flex-col justify-center shrink-0 self-stretch items-center">
      <svg
        className="block"
        style={{
          width: `${sizeStyles.iconSize}px`,
          height: `${sizeStyles.iconSize}px`,
        }}
        fill="none"
        preserveAspectRatio="none"
        viewBox={sizeStyles.iconViewBox}
      >
        <path
          clipRule="evenodd"
          d={sizeStyles.iconPath}
          fill={iconColor}
          fillRule="evenodd"
          style={{ fillOpacity: "1" }}
        />
      </svg>
    </div>
  );

  return (
    <button
      className={`
        flex items-center justify-center box-border shrink-0
        ${sizeStyles.padding}
        ${sizeStyles.gap}
        ${sizeStyles.minHeight}
        ${variantStyles.bg}
        ${variantStyles.border}
        ${variantStyles.shadow}
        ${shapeStyles}
        ${variantStyles.hoverBg || ''}
        ${variantStyles.hoverBorder || ''}
        ${variantStyles.hoverShadow || ''}
        transition-all duration-200 ease-in-out
        ${iconOnly ? 'aspect-square' : ''}
      `}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {/* Icon Left */}
      {(iconLeft || iconOnly) && !iconRight && renderIcon()}
      
      {/* Label */}
      {!iconOnly && (
        <div className={`flex items-center justify-center shrink-0 ${sizeStyles.labelPadding} ${sizeStyles.labelGap}`}>
          <div className="flex flex-col justify-center leading-[0]">
            <p className={`whitespace-pre ${variantStyles.textColor}`}>{label}</p>
          </div>
        </div>
      )}
      
      {/* Icon Right */}
      {iconRight && renderIcon()}
    </button>
  );
};

export default Button;
