import { experimentalStyled as styled } from "@material-ui/core";
import { Avatar, Rating } from "@material-ui/core";

export const UserInformationContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto); //repetição de linhas, 3 vezes
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  gap: ${({ theme }) =>
    theme.spacing(0.5) +
    "" +
    theme.spacing(2)}; //spacing(0.5) linhas + '' + spacing(2) colunas
`; //criando a div de container com as informações do diarista

export const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`; //criando a div nome do diarista dentro do container

export const UserDescription = styled("div")`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`; //criando a descrição do diarista dentro do container

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial; //valor padrão que o navegador define para os elementos, serve para a imagem não ficar esticada
  aspect-ratio: 1; //garante que a proporção da imagem esta redonda, sem esticar
`; //criando o avatar do diarista dentro do container

export const RatingStyled = styled(Rating)`
  grid-area: rating;
  font-size: 16px;
`; //criando a avaliação do diarista dentro do container
