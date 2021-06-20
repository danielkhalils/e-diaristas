import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

export const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(
      theme.palette.primary.main
    )}; //atribuindo contraste ao texto do footer
  padding: ${({ theme }) => theme.spacing(4) + " " + 0}; //acessar o tema
  margin-top: auto; //se não houver conteúdo suficiente para preencher a tela a margem irá ocupar
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap; //quando a tela for diminuida o texto empurrará as imagens das lojas para baixo
  ${({ theme }) => theme.breakpoints.down("md")} {
    //aumentar espaçamento entre o texto e imagem
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body2"} {...props} /> //ao invés de passar o componente, passada uma função e retornada o elemento com as propriedades
))`
  font-weight: bold;
`;

export const AppList = styled("ul")`
  list-style-type: none;
  padding: 0;
  display: flex; //elementos ficam na horizontal
  gap: ${({ theme }) => theme.spacing()};

  //diminuir o tamanho da imagem com o seletor de imagem
  img {
    width: 122px;
  }
`;
