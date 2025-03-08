import { useTheme } from 'styled-components';
import { Typography } from '../Typography';
import { TableContainer, StyledTable, THead, TBody, Th, Td, Tr } from './styles';

export function Table() {
  const { colors } = useTheme();

  return (
    <TableContainer>
      <StyledTable>
        <THead>
          <tr>
            <Th>
              <Typography variant="span" color={colors.white}>
                FOTO
              </Typography>
            </Th>
            <Th>
              <Typography variant="span" color={colors.white}>
                NOME
              </Typography>
            </Th>
            <Th>
              <Typography variant="span" color={colors.white}>
                CARGO
              </Typography>
            </Th>
            <Th>
              <Typography variant="span" color={colors.white}>
                DATA DE ADMISSÃO
              </Typography>
            </Th>
            <Th>
              <Typography variant="span" color={colors.white}>
                TELEFONE
              </Typography>
            </Th>
          </tr>
        </THead>
        <TBody>
          <Tr>
            <Td>
              <Typography variant="span">Foto</Typography>
            </Td>
            <Td>
              <Typography variant="span">Nome</Typography>
            </Td>
            <Td>
              <Typography variant="span">Cargo</Typography>
            </Td>
            <Td>
              <Typography variant="span">Data de Admissão</Typography>
            </Td>
            <Td>
              <Typography variant="span">Telefone</Typography>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Typography variant="span">Foto</Typography>
            </Td>
            <Td>
              <Typography variant="span">Nome</Typography>
            </Td>
            <Td>
              <Typography variant="span">Cargo</Typography>
            </Td>
            <Td>
              <Typography variant="span">Data de Admissão</Typography>
            </Td>
            <Td>
              <Typography variant="span">Telefone</Typography>
            </Td>
          </Tr>
        </TBody>
      </StyledTable>
    </TableContainer>
  );
}
