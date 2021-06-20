import { experimentalStyled as styled } from "@material-ui/core";
import { Paper } from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfissionaisPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(0)};
  margin: 0 auto ${({ theme }) => theme.spacing(0)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }
`;

export const ProfissionaisContainer = styled("div")`
  display: grid;
  grid-template-columns: 0fr;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr); //quando for acima de tamanho médio
    gap: ${({ theme }) =>
      theme.spacing()}; //declarar quantas colunas queremos, um laço 2, 2 colunas de 1 fração FR
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-right: ${({ theme }) => theme.spacing(-2)};
    >:nth-of-type(odd) //acessar elementos de um determinado tipo, odd = impar
    {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;
