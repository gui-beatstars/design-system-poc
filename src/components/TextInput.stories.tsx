import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

/**
 * TextInput component - Matching Figma Design
 * 
 * ## Overview
 * A TextInput component that exactly matches the Figma design specifications.
 * Supports S (40px) and M (48px) sizes with 6 different states.
 * 
 * ## Usage
 * ```tsx
 * import { TextInput } from './components/TextInput';
 * 
 * <TextInput 
 *   size="M" 
 *   status="Default"
 *   label="Email Address"
 *   placeholder="Enter your email"
 *   hasLabel={true}
 *   hasIcon={true}
 *   hasBottomHelper={true}
 * />
 * ```
 * 
 * ## Features
 * - ✅ Two sizes: S (40px) and M (48px)
 * - ✅ Six states: Default, Active, Active-Filling, Filled, Error, Disabled
 * - ✅ Exact Figma design tokens and styling
 * - ✅ Icon support with default star icon
 * - ✅ Helper text with info icon
 * - ✅ Error states with custom styling
 * - ✅ Blinking cursor for active states
 * - ✅ Full accessibility support
 */

// Custom Icon Component for stories
const CustomIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 1L10.5 5.5L15.5 6.5L12 10L12.5 15L8 12.5L3.5 15L4 10L0.5 6.5L5.5 5.5L8 1Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A TextInput component that exactly matches the Figma design specifications. Supports S (40px) and M (48px) sizes with 6 different states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['S', 'M'],
      description: 'The input size - S (40px) or M (48px)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'M' },
      },
    },
    status: {
      control: 'select',
      options: ['Default', 'Active', 'Active-Filling', 'Filled', 'Disabled', 'Error'],
      description: 'The input status state',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Default' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The input type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    label: {
      control: 'text',
      description: 'Input label text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Label' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Change text here' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'This is hint text placeholder.' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Change error text here' },
      },
    },
    hasLabel: {
      control: 'boolean',
      description: 'Show label above input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    hasIcon: {
      control: 'boolean',
      description: 'Show icon in the right area',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    hasBottomHelper: {
      control: 'boolean',
      description: 'Show helper text below input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showTrailing: {
      control: 'boolean',
      description: 'Show trailing element (like clear button)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    focus: {
      control: 'boolean',
      description: 'Focus state (controlled)',
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
    readOnly: {
      control: 'boolean',
      description: 'Read-only state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Required field indicator',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Change handler function',
      table: {
        type: { summary: '(event: ChangeEvent<HTMLInputElement>) => void' },
      },
    },
    onFocus: {
      action: 'focused',
      description: 'Focus handler function',
      table: {
        type: { summary: '(event: FocusEvent<HTMLInputElement>) => void' },
      },
    },
    onBlur: {
      action: 'blurred',
      description: 'Blur handler function',
      table: {
        type: { summary: '(event: FocusEvent<HTMLInputElement>) => void' },
      },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Size Stories
// ============================================

export const SizeS: Story = {
  args: {
    size: 'S',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SizeM: Story = {
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

// ============================================
// Status Stories - Size S
// ============================================

export const SizeSDefault: Story = {
  args: {
    size: 'S',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SizeSActive: Story = {
  args: {
    size: 'S',
    status: 'Active',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SizeSActiveFilling: Story = {
  args: {
    size: 'S',
    status: 'Active-Filling',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Sample text',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SizeSFilled: Story = {
  args: {
    size: 'S',
    status: 'Filled',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Sample text',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SizeSError: Story = {
  args: {
    size: 'S',
    status: 'Error',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Invalid input',
    error: 'Change error text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SizeSDisabled: Story = {
  args: {
    size: 'S',
    status: 'Disabled',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Disabled text',
    disabled: true,
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

// ============================================
// Status Stories - Size M
// ============================================

export const SizeMDefault: Story = {
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SizeMActive: Story = {
  args: {
    size: 'M',
    status: 'Active',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SizeMActiveFilling: Story = {
  args: {
    size: 'M',
    status: 'Active-Filling',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Sample text',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SizeMFilled: Story = {
  args: {
    size: 'M',
    status: 'Filled',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Sample text',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SizeMError: Story = {
  args: {
    size: 'M',
    status: 'Error',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Invalid input',
    error: 'Change error text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SizeMDisabled: Story = {
  args: {
    size: 'M',
    status: 'Disabled',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Disabled text',
    disabled: true,
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

// ============================================
// Feature Variations
// ============================================

export const WithoutLabel: Story = {
  args: {
    size: 'M',
    status: 'Default',
    placeholder: 'Change text here',
    hasLabel: false,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: false,
    hasBottomHelper: true,
  },
};

export const WithoutHelper: Story = {
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: false,
  },
};

export const WithCustomIcon: Story = {
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    icon: <CustomIcon />,
    hasBottomHelper: true,
  },
};

export const Required: Story = {
  args: {
    size: 'M',
    status: 'Default',
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const FullWidth: Story = {
  args: {
    size: 'M',
    status: 'Default',
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// ============================================
// Input Type Variations
// ============================================

export const EmailInput: Story = {
  args: {
    size: 'M',
    status: 'Default',
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const PasswordInput: Story = {
  args: {
    size: 'M',
    status: 'Default',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

export const SearchInput: Story = {
  args: {
    size: 'M',
    status: 'Default',
    type: 'search',
    label: 'Search',
    placeholder: 'Search...',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
  },
};

// ============================================
// Comparison Stories
// ============================================

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <TextInput
        size="S"
        status="Default"
        label="Small (S)"
        placeholder="40px height"
        hasLabel={true}
        hasIcon={true}
        hasBottomHelper={true}
      />
      <TextInput
        size="M"
        status="Default"
        label="Medium (M)"
        placeholder="48px height"
        hasLabel={true}
        hasIcon={true}
        hasBottomHelper={true}
      />
    </div>
  ),
};

export const StatusComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <TextInput
        size="M"
        status="Default"
        label="Default"
        placeholder="Default state"
        hasLabel={true}
        hasIcon={true}
        hasBottomHelper={true}
      />
      <TextInput
        size="M"
        status="Active"
        label="Active"
        placeholder="Active state"
        hasLabel={true}
        hasIcon={true}
        hasBottomHelper={true}
      />
      <TextInput
        size="M"
        status="Active-Filling"
        label="Active-Filling"
        placeholder="Active-Filling state"
        value="Sample text"
        hasLabel={true}
        hasIcon={true}
        hasBottomHelper={true}
      />
      <TextInput
        size="M"
        status="Filled"
        label="Filled"
        placeholder="Filled state"
        value="Sample text"
        hasLabel={true}
        hasIcon={true}
        hasBottomHelper={true}
      />
      <TextInput
        size="M"
        status="Error"
        label="Error"
        placeholder="Error state"
        value="Invalid input"
        error="This is an error message"
        hasLabel={true}
        hasIcon={true}
        hasBottomHelper={true}
      />
      <TextInput
        size="M"
        status="Disabled"
        label="Disabled"
        placeholder="Disabled state"
        value="Disabled text"
        disabled={true}
        hasLabel={true}
        hasIcon={true}
        hasBottomHelper={true}
      />
    </div>
  ),
};

// ============================================
// Form Example
// ============================================

export const FormExample: Story = {
  render: () => (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '255px' }}>
      <TextInput
        size="M"
        status="Default"
        type="text"
        label="Full Name"
        placeholder="Enter your full name"
        required={true}
        hasLabel={true}
        hasIcon={true}
        hasBottomHelper={true}
      />
      <TextInput
        size="M"
        status="Default"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        required={true}
        hasLabel={true}
        hasIcon={true}
        hasBottomHelper={true}
      />
      <TextInput
        size="M"
        status="Default"
        type="password"
        label="Password"
        placeholder="Create a password"
        required={true}
        hasLabel={true}
        hasIcon={true}
        hasBottomHelper={true}
      />
    </form>
  ),
};

// ============================================
// Interactive Playground
// ============================================

export const Playground: Story = {
  args: {
    size: 'M',
    status: 'Default',
    type: 'text',
    label: 'Playground Input',
    placeholder: 'Try different props!',
    helperText: 'This is a playground for testing',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
    required: false,
    disabled: false,
    fullWidth: false,
  },
};
