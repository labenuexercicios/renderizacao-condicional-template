import { useState } from "react";
import TelaUsuarioCadastrado from "../TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {

  const [page, setPage] = useState(true)
  
  const goToLogin = () => {
    props.setPage(true)
  }

  const goToTelaCad = () => {
    setPage(false)
  }

  return (
    <>
    {page ?  <FormContainer>
      <h1>Cadastro </h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={goToTelaCad}>Cadastrar</SendButton>
        <BackToLoginButton onClick={goToLogin}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer> : <TelaUsuarioCadastrado/>}
    </>
  );
}

export default TelaCadastro;
