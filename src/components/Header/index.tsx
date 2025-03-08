import { IMAGES } from '@/assets/images';
import { StyledHeader } from './styles';

export function Header() {
  return (
    <StyledHeader>
      <img src={IMAGES.PNG.logo} alt="Logo" />
    </StyledHeader>
  );
}
