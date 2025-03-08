import { Img } from './styles';
import { IAvatarProps } from './types';

export function Avatar({ src, name }: IAvatarProps) {
  return <Img src={src} alt={`avatar ${name ?? ''}`} />;
}
