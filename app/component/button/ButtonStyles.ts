import clsx from 'clsx';

export const buttonBase = `${clsx(
  'inline-flex w-fit items-center justify-center',
  'rounded-md text-sm font-medium outline-none transition-colors',
  'ring-offset-background ring-ring ring-offset-2',
  'focus-within:ring-2 focus-visible:ring-2',
  'disabled:pointer-events-none disabled:opacity-50'
)}`;

export const buttonType = {
  default: 'bg-red-100 text-primaryForeground hover:bg-primary/80',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/80',
  outline:
    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
};

// <Button type='default' size='sm' disabled={false} icon={} isLoading={false}
