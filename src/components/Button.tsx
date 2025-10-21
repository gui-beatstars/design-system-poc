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

const IconComponent: React.FC<{ size: number; color: string }> = ({ size, color }) => {
  const viewBox = size === 24 ? "0 0 24 24" : "0 0 16 16";
  const pathData = size === 24 ? svgPaths.p78f2a80 : svgPaths.p15e73480;
  
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
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
 * Button component with multiple variants, sizes, and icon configurations.
 * Supports Storybook and Zeroheight documentation.
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
  // Size configurations
  const sizeConfig = {
    large: {
      padding: 'p-[12px]',
      gap: 'gap-[8px]',
      iconSize: 24,
      fontSize: 'text-[16px]',
      lineHeight: 'leading-[1.5]',
      tracking: '',
      labelHeight: '',
      labelGap: 'gap-[8px]',
      labelPadding: 'px-[4px] py-0',
    },
    medium: {
      padding: 'p-[12px]',
      gap: 'gap-[4px]',
      iconSize: 16,
      fontSize: 'text-[14px]',
      lineHeight: 'leading-[1.43]',
      tracking: 'tracking-[0.16px]',
      labelHeight: 'h-[16px]',
      labelGap: 'gap-[8px]',
      labelPadding: 'px-[4px] py-0',
    },
    small: {
      padding: 'p-[8px]',
      gap: 'gap-[4px]',
      iconSize: 16,
      fontSize: 'text-[12px]',
      lineHeight: 'leading-[1.33]',
      tracking: 'tracking-[0.32px]',
      labelHeight: 'h-[16px]',
      labelGap: 'gap-[8px]',
      labelPadding: 'px-[4px] py-0',
    },
  };

  // Variant configurations
  const variantConfig = {
    primary: {
      bg: 'bg-[#006aff]',
      textColor: 'text-white',
      iconColor: 'white',
      border: 'border border-[rgba(255,255,255,0.16)] border-solid',
      shadow: 'shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)]',
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
    },
  };

  const config = sizeConfig[size];
  const colors = variantConfig[disabled ? 'disabled' : variant];
  const borderRadius = shape === 'pill' ? 'rounded-[999px]' : 'rounded-[8px]';

  return (
    <button
      className={`relative ${colors.bg} box-border content-stretch flex ${config.gap} items-center justify-center ${config.padding} ${borderRadius} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {/* Border overlay */}
      {colors.border && (
        <div 
          aria-hidden="true" 
          className={`absolute ${colors.border} inset-0 pointer-events-none ${borderRadius} ${colors.shadow}`} 
        />
      )}
      
      {/* Icon Left */}
      {(iconLeft || iconOnly) && !iconRight && (
        <IconComponent size={config.iconSize} color={colors.iconColor} />
      )}
      
      {/* Label */}
      {!iconOnly && (
        <div className={`box-border content-stretch flex ${config.labelGap} ${config.labelHeight} items-center justify-center ${config.labelPadding} relative shrink-0`}>
          <div className={`flex flex-col font-['Schibsted_Grotesk:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 ${config.fontSize} text-nowrap ${colors.textColor} ${config.tracking}`}>
            <p className={`${config.lineHeight} whitespace-pre`}>{label}</p>
          </div>
        </div>
      )}
      
      {/* Icon Right */}
      {iconRight && !iconOnly && (
        <IconComponent size={config.iconSize} color={colors.iconColor} />
      )}
      
      {/* Icon Only (centered) */}
      {iconOnly && iconRight && (
        <IconComponent size={config.iconSize} color={colors.iconColor} />
      )}
    </button>
  );
};

export default Button;
