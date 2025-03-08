export interface ITypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'span';
  children: React.ReactNode;
  color?: string;
}

export interface IStyledColorProps {
  $color?: string;
}
