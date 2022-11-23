import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {
  return (
    <FormContainer>
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
        {/* quando passamos parâmetro para a função, precisamos usar um arrow function na frente, para que ela não dispare assim que for lida */}
        <SendButton onClick={() => props.mudaTela("usuarioCadastrado")} >Cadastrar</SendButton>
        <BackToLoginButton onClick={() => props.mudaTela("login")} >Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;

