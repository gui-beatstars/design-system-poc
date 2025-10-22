import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

/**
 * TextInput component - using CSS Modules
 * 
 * ## Overview
 * A comprehensive text input component with various variants, sizes, and states.
 * Supports icons, validation, character counting, and accessibility features.
 * 
 * ## Usage
 * ```tsx
 * import { TextInput } from './components/TextInput';
 * 
 * <TextInput 
 *   variant="default" 
 *   size="medium" 
 *   label="Email Address"
 *   placeholder="Enter your email"
 *   type="email"
 *   required
 * />
 * ```
 * 
 * ## Features
 * - ✅ Multiple variants (default, filled, outlined, underlined)
 * - ✅ Three sizes (small, medium, large)
 * - ✅ Validation states (error, success, disabled)
 * - ✅ Icon support (left and right)
 * - ✅ Clear button functionality
 * - ✅ Character counting
 * - ✅ Full accessibility support
 * - ✅ Dark mode support
 * - ✅ Responsive design
 */

// Icon components for stories
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 14L11.1 11.1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0 16C0 12.6863 2.68629 10 6 10H10C13.3137 10 16 12.6863 16 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 7V4C4 2.89543 4.89543 2 6 2H10C11.1046 2 12 2.89543 12 4V7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="2"
      y="7"
      width="12"
      height="7"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.5 4.5L6 12L2.5 8.5"
      stroke="currentColor"
      strokeWidth="1.5"
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
        component: 'A comprehensive text input component with various variants, sizes, and states. Supports icons, validation, character counting, and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined', 'underlined'],
      description: 'The input visual variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The input size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
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
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    value: {
      control: 'text',
      description: 'Input value (controlled)',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    success: {
      control: 'text',
      description: 'Success message',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success', 'disabled'],
      description: 'Input state',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
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
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character count',
      table: {
        type: { summary: 'number' },
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
    onClear: {
      action: 'cleared',
      description: 'Clear handler function',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const WithLabel: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Email Address',
    placeholder: 'Enter your email',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Username',
    placeholder: 'Choose a username',
    helperText: 'Must be at least 3 characters long',
  },
};

// Variant Stories
export const Filled: Story = {
  args: {
    variant: 'filled',
    size: 'medium',
    type: 'text',
    label: 'Filled Input',
    placeholder: 'This is a filled input',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    type: 'text',
    label: 'Outlined Input',
    placeholder: 'This is an outlined input',
  },
};

export const Underlined: Story = {
  args: {
    variant: 'underlined',
    size: 'medium',
    type: 'text',
    label: 'Underlined Input',
    placeholder: 'This is an underlined input',
  },
};

// Size Stories
export const Small: Story = {
  args: {
    variant: 'default',
    size: 'small',
    type: 'text',
    label: 'Small Input',
    placeholder: 'Small size input',
  },
};

export const Medium: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Medium Input',
    placeholder: 'Medium size input',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'large',
    type: 'text',
    label: 'Large Input',
    placeholder: 'Large size input',
  },
};

// State Stories
export const Error: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Email Address',
    placeholder: 'Enter your email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

export const Success: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Email Address',
    placeholder: 'Enter your email',
    value: 'user@example.com',
    success: 'Email address is valid',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Read Only Input',
    placeholder: 'This input is read-only',
    value: 'This value cannot be changed',
    readOnly: true,
  },
};

// Icon Stories
export const WithLeftIcon: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Search',
    placeholder: 'Search for something...',
    iconLeft: <SearchIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Username',
    placeholder: 'Enter your username',
    iconRight: <UserIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    iconLeft: <LockIcon />,
    iconRight: <CheckIcon />,
  },
};

// Clearable Story
export const Clearable: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Clearable Input',
    placeholder: 'Type something to see clear button',
    value: 'This can be cleared',
    clearable: true,
  },
};

// Character Count Story
export const WithCharacterCount: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Description',
    placeholder: 'Enter a description',
    value: 'This is a sample description',
    showCount: true,
    maxLength: 100,
  },
};

// Input Type Stories
export const Email: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email',
    required: true,
  },
};

export const Password: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true,
  },
};

export const Number: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'number',
    label: 'Age',
    placeholder: 'Enter your age',
  },
};

export const Search: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'search',
    label: 'Search',
    placeholder: 'Search...',
    iconLeft: <SearchIcon />,
  },
};

// Full Width Story
export const FullWidth: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Comparison Stories
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextInput
        variant="default"
        size="small"
        label="Small"
        placeholder="Small input"
        iconLeft={<UserIcon />}
      />
      <TextInput
        variant="default"
        size="medium"
        label="Medium"
        placeholder="Medium input"
        iconLeft={<UserIcon />}
      />
      <TextInput
        variant="default"
        size="large"
        label="Large"
        placeholder="Large input"
        iconLeft={<UserIcon />}
      />
    </div>
  ),
};

export const VariantComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextInput
        variant="default"
        size="medium"
        label="Default"
        placeholder="Default variant"
        value="Sample text"
      />
      <TextInput
        variant="filled"
        size="medium"
        label="Filled"
        placeholder="Filled variant"
        value="Sample text"
      />
      <TextInput
        variant="outlined"
        size="medium"
        label="Outlined"
        placeholder="Outlined variant"
        value="Sample text"
      />
      <TextInput
        variant="underlined"
        size="medium"
        label="Underlined"
        placeholder="Underlined variant"
        value="Sample text"
      />
    </div>
  ),
};

export const StateComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextInput
        variant="default"
        size="medium"
        label="Default State"
        placeholder="Normal input"
        value="Sample text"
      />
      <TextInput
        variant="default"
        size="medium"
        label="Error State"
        placeholder="Input with error"
        value="invalid@email"
        error="Please enter a valid email"
      />
      <TextInput
        variant="default"
        size="medium"
        label="Success State"
        placeholder="Input with success"
        value="user@example.com"
        success="Email is valid"
      />
      <TextInput
        variant="default"
        size="medium"
        label="Disabled State"
        placeholder="Disabled input"
        value="Cannot edit"
        disabled
      />
    </div>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <TextInput
        variant="default"
        size="medium"
        type="text"
        label="Full Name"
        placeholder="Enter your full name"
        required
      />
      <TextInput
        variant="default"
        size="medium"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        required
        helperText="We'll never share your email"
      />
      <TextInput
        variant="default"
        size="medium"
        type="password"
        label="Password"
        placeholder="Create a password"
        required
        helperText="Must be at least 8 characters"
      />
      <TextInput
        variant="default"
        size="medium"
        type="text"
        label="Bio"
        placeholder="Tell us about yourself"
        showCount
        maxLength={200}
        helperText="Optional"
      />
    </form>
  ),
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    type: 'text',
    label: 'Playground Input',
    placeholder: 'Try different props!',
    helperText: 'This is a playground for testing',
    clearable: true,
    showCount: true,
    maxLength: 50,
  },
};
