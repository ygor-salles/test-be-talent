import { Theme } from '@/styles/theme';
import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
