import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {

  const enviarLogin = () => {
    alert("E-mail não encontrado, será necessário fazer o cadastro!")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>
      <Form>
        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>
        <StyledLabel>Senha:
          <Input type={"password"} />
        </StyledLabel>
        <SendButton onClick={enviarLogin}>Entrar</SendButton>
        {/* quando passamos parâmetro para a função, precisamos usar um arrow function na frente, para que ela não dispare assim que for lida */}
        <RegisterButton onClick={() => props.mudaTela("cadastro")} >Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
