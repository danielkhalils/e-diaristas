import { experimentalStyled as styled } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import theme from "ui/themes/theme";

export const HeaderAppBar = styled(AppBar)`
  /* estilizando o AppBar já existente na bibioteca material ui */
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.5);

  ${({ theme }) => theme.breakpoints.up("md")} {
    //quando a tela for acima de um tamanho médio
    .MuiTooblar-root {
      //acessando o toolbar atravpes de classe. MUI = Material UI::after, acessa o item Toolbar na raiz root
      height: 100px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    //quando a tela for abaixo de um tamanho médio
    //quando a tela é pequena o logo fica alinhado ao centro
    //estilização para mobile
    .MuiTooblar-root {
      //acessando o toolbar atravpes de classe. MUI = Material UI::after, acessa o item Toolbar na raiz root
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;

  //para telas maiores a logo aumenta de tamanho
  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 47px;
  }
`; //estilizando a logo em Toolbar
