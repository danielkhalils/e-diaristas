import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";
import { Container } from "@material-ui/core";

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        {/* selecionando o ícone de cadeado da pasta public/fonts/tw-icons/css/treianaweb-icons.css */}
        Ambiente 100% seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
