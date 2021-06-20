import React from "react";
import InputMask from "react-input-mask";
import TextField from "ui/components/Inputs/TextField/TextField";
import { OutlinedTextFieldProps } from "@material-ui/core";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({ mask, ...props }) => {
  return (
    <InputMask mask={mask}>
      {/* Máscara para inserção do CEP */}
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
