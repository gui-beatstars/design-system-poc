import type { Meta, StoryObj } from '@storybook/react';
import { ButtonWithModule } from './ButtonWithModule';

/**
 * ButtonWithModule component - using CSS Modules
 * 
 * ## Overview
 * This is an alternative implementation of the Button component that uses CSS Modules
 * for scoped styling instead of Tailwind classes.
 * 
 * ## Usage
 * ```tsx
 * import { ButtonWithModule } from './components/ButtonWithModule';
 * import styles from './Button.module.css'; // Styles are automatically scoped
 * 
 * <ButtonWithModule 
 *   variant="primary" 
 *   size="large" 
 *   label="Click me" 
 *   onClick={() => console.log('clicked')} 
 * />
 * ```
 * 
 * ## CSS Modules Benefits
 * - ✅ Scoped styles (no global namespace pollution)
 * - ✅ Type-safe with TypeScript
 * - ✅ Better code splitting
 * - ✅ No runtime overhead
 */
const meta = {
  title: 'Components/ButtonWithModule',
  component: ButtonWithModule,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A button component using CSS Modules for scoped styling. Demonstrates an alternative approach to the Tailwind-based Button component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'hover', 'focus', 'disabled', 'dark'],
      description: 'The button color variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: 'The button size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill'],
      description: 'The button shape',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rounded' },
      },
    },
    label: {
      control: 'text',
      description: 'Button text label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Name me' },
      },
    },
    iconLeft: {
      control: 'boolean',
      description: 'Show icon on the left side',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconRight: {
      control: 'boolean',
      description: 'Show icon on the right side',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon only mode (no label)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
} satisfies Meta<typeof ButtonWithModule>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true,
  },
};

export const PrimaryPill: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'pill',
    iconOnly: true,
    iconRight: true,
  },
};

export const PrimaryMedium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true,
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true,
  },
};

// Hover State
export const Hover: Story = {
  args: {
    variant: 'hover',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true,
  },
};

// Focus State
export const Focus: Story = {
  args: {
    variant: 'focus',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true,
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true,
    disabled: true,
  },
};

// Dark Variant
export const Dark: Story = {
  args: {
    variant: 'dark',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

// Icon Variations
export const IconLeftOnly: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: false,
  },
};

export const IconRightOnly: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: false,
    iconRight: true,
  },
};

export const NoIcons: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: false,
    iconRight: false,
  },
};

// Loading State
export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Processing...',
    loading: true,
  },
};

// Full Width
export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Size Comparison
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <ButtonWithModule variant="primary" size="large" label="Large" iconLeft iconRight />
      <ButtonWithModule variant="primary" size="medium" label="Medium" iconLeft iconRight />
      <ButtonWithModule variant="primary" size="small" label="Small" iconLeft iconRight />
    </div>
  ),
};

// Variant Comparison
export const VariantComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <ButtonWithModule variant="primary" size="large" label="Primary" iconLeft iconRight />
      <ButtonWithModule variant="hover" size="large" label="Hover" iconLeft iconRight />
      <ButtonWithModule variant="focus" size="large" label="Focus" iconLeft iconRight />
      <ButtonWithModule variant="primary" size="large" label="Disabled" iconLeft iconRight disabled />
      <ButtonWithModule variant="dark" size="large" label="Dark" iconLeft iconRight />
    </div>
  ),
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Click me!',
    iconLeft: true,
    iconRight: true,
    disabled: false,
    loading: false,
    fullWidth: false,
  },
};
