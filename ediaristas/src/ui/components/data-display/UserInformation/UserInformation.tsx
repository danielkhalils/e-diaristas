import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UserInformation.style"; //importando o container com as informações dos diaristas do arquivo UserInformarion.style

//para que a div de informações dos diaristas não seja fixada na tela e possa ser reutilizada

interface UserInformationProps {
  picture: string;
  name: string;
  description: string;
  rating: number;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  rating,
  description,
  picture,
}) => {
  //neste parte foi criado o componente
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>{" "}
      {/*Acima, name[0] = se não tiver foto, exibir primeira letra do nome */}
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
