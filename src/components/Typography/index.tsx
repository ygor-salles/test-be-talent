import { H1, H2, H3, Span } from './styles';
import { ITypographyProps } from './types';

export function Typography({ variant, children }: ITypographyProps) {
  if (variant === 'h1') return <H1>{children}</H1>;
  if (variant === 'h2') return <H2>{children}</H2>;
  if (variant === 'h3') return <H3>{children}</H3>;

  return <Span>{children}</Span>;
}
