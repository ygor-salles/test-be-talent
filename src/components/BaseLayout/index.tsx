import { Header } from '../Header';
import { Container, Main } from './styles';
import { IBaseLayoutProps } from './types';

export function BaseLayout({ children }: IBaseLayoutProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
}
