//a tela app.tsx serve para criar algo que estará presente em todas as telas, ou seja, aglo fixo,
//para que não precisemos ficar chamando o mesmo componente em todas as telas

import "@styles/globals.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "ui/themes/theme";
import Head from "next/head"; //costomizar o head de um arquivo html
import Header from "ui/components/surfaces/Header/Header"; //importando o arquivo header
import Footer from "ui/components/surfaces/Footer/Footer"; //importando oa arquivo footer
import { AppContainer } from "@styles/pages/_app.style";

function MyApp({ Component, pageProps }) {
  return (
    // <></> container do react para inserir as costumizações, react fragment
    <>
      <Head>
        <title>e-diaristas</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* Fonte Poppins importada do Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          {/* AppContainer ajuda todo o container a não quebrar a tela ao minimizar */}
          <Header />
          <Component {...pageProps} />
          <Footer></Footer>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
