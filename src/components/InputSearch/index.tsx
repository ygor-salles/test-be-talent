import { IMAGES } from '@/assets/images';
import { Container, IconImg, Input } from './styles';
import { IInputSearchProps } from './types';

export function InputSearch(props: IInputSearchProps) {
  return (
    <Container>
      <Input {...props} />
      <IconImg src={IMAGES.SVG.search} alt="magnifying glass" />
    </Container>
  );
}
