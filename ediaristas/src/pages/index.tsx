import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment"; // importando arquivo SafeEnvironment
import PageTitle from "ui/components/data-display/PageTitle/PageTitle"; //importando arquivo PageTitle
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/Inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça nossos profissionais"}
        subtitle={
          "Preencha o endereço e veja todos os profissionais de sua localização"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            variant={"outlined"}
            mask={"99.999-99"}
            label={"Digite seu CEP:"}
            fullWidth
          />

          <Typography color={"error"}>CEP inválido</Typography>

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisContainer>
          <ProfissionaisPaper>
            <UserInformation //Inserida as informações que foram declaradas em UserInformarion
              name={"Daniel"}
              picture={"https://github.com/dkseshef.png"}
              rating={3}
              description={"Manaus"}
            />
          </ProfissionaisPaper>

          <ProfissionaisPaper>
            <UserInformation //Inserida as informações que foram declaradas em UserInformarion
              name={"Daniel"}
              picture={"https://github.com/dkseshef.png"}
              rating={3}
              description={"Manaus"}
            />
          </ProfissionaisPaper>

          <ProfissionaisPaper>
            <UserInformation //Inserida as informações que foram declaradas em UserInformarion
              name={"Daniel"}
              picture={"https://github.com/dkseshef.png"}
              rating={3}
              description={"Manaus"}
            />
          </ProfissionaisPaper>

          <ProfissionaisPaper>
            <UserInformation //Inserida as informações que foram declaradas em UserInformarion
              name={"Daniel"}
              picture={"https://github.com/dkseshef.png"}
              rating={3}
              description={"Manaus"}
            />
          </ProfissionaisPaper>

          <ProfissionaisPaper>
            <UserInformation //Inserida as informações que foram declaradas em UserInformarion
              name={"Daniel"}
              picture={"https://github.com/dkseshef.png"}
              rating={3}
              description={"Manaus"}
            />
          </ProfissionaisPaper>

          <ProfissionaisPaper>
            <UserInformation //Inserida as informações que foram declaradas em UserInformarion
              name={"Daniel"}
              picture={"https://github.com/dkseshef.png"}
              rating={3}
              description={"Manaus"}
            />
          </ProfissionaisPaper>

          <ProfissionaisPaper>
            <UserInformation //Inserida as informações que foram declaradas em UserInformarion
              name={"Daniel"}
              picture={"https://github.com/dkseshef.png"}
              rating={3}
              description={"Manaus"}
            />
          </ProfissionaisPaper>
        </ProfissionaisContainer>

        {/*Componente UserInformarion reutilizávei inserido abaixo} */}
      </Container>
    </div>
  );
}
