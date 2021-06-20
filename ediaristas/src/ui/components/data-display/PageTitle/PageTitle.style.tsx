import { experimentalStyled as Styled } from "@material-ui/core/styles"; //importando o style de material ui

export const PageTitleContainer = Styled("div")`  //criando TemplateString 
        text-align: center;
        margin: ${({ theme }) =>
          theme.spacing(5) +
          "" +
          "0"}; //acessando {theme} para definir o padrão da margem do texto, + '' + 0 concatenado
`;

export const PageTitleStyled = Styled("h2")`    //criando TemplateString 
    margin: 0;
    color: ${({ theme }) =>
      theme.palette.primary
        .main}; // ({theme}) acessando thema em materiakl ui, cor primária
    font-size:${({ theme }) => theme.typography.h6.fontSize}; 
    font-weight: 600;

    ${({ theme }) => theme.breakpoints.down("md")}{
        font-size:${({ theme }) => theme.typography.body1.fontSize}; 
    }; //quando a janela for reduzida, dimunuir fonte para tamanho médio
`;

export const PageSubtitleStyled = Styled("h3")`
    margin: ${({ theme }) => theme.spacing(1.5) + "" + "0"};
    color: ${({ theme }) =>
      theme.palette.text
        .primary}; // ({theme}) acessando thema em materiakl ui, texto primário
    font-size:${({ theme }) => theme.typography.body1.fontSize};
    font-weight: normal;

    ${({ theme }) => theme.breakpoints.down("md")}{
        font-size:${({ theme }) => theme.typography.body2.fontSize}; 
    }; //quando a janela for reduzida, dimunuir fonte para tamanho médio
`;
