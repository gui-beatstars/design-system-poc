# Button Component Documentation

## Overview

A flexible, accessible button component designed for use with Storybook and Zeroheight. This component is based on a Figma design system and supports multiple variants, sizes, shapes, and icon configurations.

## Installation

```bash
npm install
npm run storybook
```

## Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'hover' \| 'focus' \| 'disabled' \| 'dark'` | `'primary'` | The button color variant |
| `size` | `'large' \| 'medium' \| 'small'` | `'large'` | The button size |
| `shape` | `'rounded' \| 'pill'` | `'rounded'` | The button shape (8px corners or fully rounded) |
| `label` | `string` | `'Name me'` | Button text label |
| `iconLeft` | `boolean` | `false` | Show icon on the left side |
| `iconRight` | `boolean` | `false` | Show icon on the right side |
| `iconOnly` | `boolean` | `false` | Icon only mode (no label) |
| `onClick` | `() => void` | `undefined` | Click handler function |
| `disabled` | `boolean` | `false` | Disabled state |

## Usage Examples

### Basic Button

```tsx
import { Button } from './components/Button';

<Button 
  variant="primary" 
  size="large" 
  label="Click me" 
/>
```

### Button with Icons

```tsx
// Left icon only
<Button 
  variant="primary" 
  size="large" 
  label="Back" 
  iconLeft 
/>

// Right icon only
<Button 
  variant="primary" 
  size="large" 
  label="Next" 
  iconRight 
/>

// Both icons
<Button 
  variant="primary" 
  size="large" 
  label="Add" 
  iconLeft 
  iconRight 
/>

// Icon only
<Button 
  variant="primary" 
  size="large" 
  shape="pill"
  iconOnly 
  iconRight 
/>
```

### Different Sizes

```tsx
<Button variant="primary" size="large" label="Large" />
<Button variant="primary" size="medium" label="Medium" />
<Button variant="primary" size="small" label="Small" />
```

### Different Variants

```tsx
<Button variant="primary" label="Primary" />
<Button variant="hover" label="Hover State" />
<Button variant="focus" label="Focus State" />
<Button variant="dark" label="Dark" />
<Button variant="primary" label="Disabled" disabled />
```

### Interactive Button

```tsx
<Button 
  variant="primary" 
  size="large" 
  label="Submit" 
  onClick={() => console.log('Button clicked!')} 
/>
```

## Design Tokens

### Colors

- **Primary**: `#006aff` (Blue)
- **Hover**: `#3388ff` (Light Blue)
- **Focus**: `#3388ff` with enhanced border
- **Disabled**: `#f0f0f0` (Light Gray) with `#9f9f9f` text
- **Dark**: `#0a0a09` (Near Black)

### Sizes

| Size | Height | Padding | Icon Size | Font Size |
|------|--------|---------|-----------|-----------|
| Large | 48px | 12px | 24px | 16px |
| Medium | 40px | 12px | 16px | 14px |
| Small | 32px | 8px | 16px | 12px |

### Shapes

- **Rounded**: 8px border radius
- **Pill**: 999px border radius (fully rounded)

## Accessibility

- Proper disabled state handling
- Accessible click handlers
- Semantic HTML button element
- ARIA-friendly structure

## Storybook Integration

This component includes comprehensive Storybook stories demonstrating:
- All variants and states
- Size comparisons
- Icon configurations
- Interactive playground
- Auto-generated documentation

Run Storybook:
```bash
npm run storybook
```

Build Storybook for deployment:
```bash
npm run build-storybook
```

## Zeroheight Integration

To integrate with Zeroheight:

1. Build Storybook documentation:
   ```bash
   npm run build-storybook:docs
   ```

2. The generated `storybook-static` folder contains the documentation

3. In Zeroheight:
   - Go to your styleguide
   - Add a new "Storybook" embed
   - Point to your deployed Storybook URL or upload the static files

4. The component documentation, props table, and interactive examples will be automatically available

## File Structure

```
/components
  /Button.tsx           # Main component
  /Button.stories.tsx   # Storybook stories
/.storybook
  /main.ts              # Storybook configuration
  /preview.ts           # Global Storybook settings
/imports
  /svg-zpdog6r5zj.ts   # SVG icon paths from Figma
```

## Development

### Adding New Variants

To add a new color variant, update the `variantConfig` in `Button.tsx`:

```tsx
const variantConfig = {
  // ... existing variants
  secondary: {
    bg: 'bg-[#your-color]',
    textColor: 'text-white',
    iconColor: 'white',
    border: 'border border-[rgba(255,255,255,0.16)] border-solid',
    shadow: 'shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)]',
  },
};
```

### Adding New Sizes

To add a new size, update the `sizeConfig` in `Button.tsx`:

```tsx
const sizeConfig = {
  // ... existing sizes
  xlarge: {
    padding: 'p-[16px]',
    gap: 'gap-[12px]',
    iconSize: 32,
    fontSize: 'text-[18px]',
    // ... other properties
  },
};
```

## Support

For issues or questions, please refer to the Storybook documentation or create an issue in your project repository.
