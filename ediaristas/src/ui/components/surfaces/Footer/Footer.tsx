import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>
            {/* renderizar como h2 (as="h2") */}
            Quem somos ?
          </FooterTitle>
          <Typography variant={"body2"} sx={{ marginTop: 2 }}>
            E-diaristas te ajuda a encontrar o profissional perfeiro para
            realizar a limpeza da sua casa. Garantimos o melhor profissional com
            total segurança e praticidade! São milhares de clientes satisfeitos
            em todo o país!
          </Typography>
        </Box>
        <div>
          <FooterTitle>
            {/* renderizar como h2 (as="h2") */}
            Baixe nossos aplicativos:
            <AppList>
              <li>
                {/* LOGO DA APPSTORE */}
                <a
                  href={"/"}
                  target={"_blank"} //quando clicar no link irá abrir em nova janela
                  rel={"noopener noreferre"} //por segurança
                  //para A deve-se colocar os links
                >
                  <img src={"/img/logos/app-store.png"} alt={"App Store"} />
                </a>
              </li>
              <li>
                {/* LOGO DA PLAYSTORE */}
                <a
                  href={"/"}
                  target={"_blank"} //quando clicar no link irá abrir em nova janela
                  rel={"noopener noreferre"} //por segurança
                  //para A deve-se colocar os links
                >
                  <img src={"/img/logos/google-play.png"} alt={"Play Store"} />
                </a>
              </li>
            </AppList>
          </FooterTitle>
        </div>
      </FooterContainer>
      {/* inserido para que a largura do container fique correta */}
    </FooterStyled>
  );
};

export default Footer;
