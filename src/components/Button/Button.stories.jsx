import { Button } from './Button';

const IconPlus = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconTrash = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 5H17M8 3H12M8 8V14M12 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Delete',
  },
};
