import React from "react";
import { PageTitleContainer, PageTitleStyled } from "./PageTitle.style";

interface PageTitleProps {
  //criando um componente funcional para tipagem dentro de props
  title: string; //definindo title e subtitle dentro de props
  subtitle?: string | JSX.Element | number; //o elemento pode ser tanto uma string como um JSX //subtitle? define que propriedade é opcional
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  //em React.FC<PageTileProps> = ligação com componente funcional

  return (
    //utilizando PageTitleContainer importado
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      {props.subtitle}
    </PageTitleContainer>
  );
};

export default PageTitle;
