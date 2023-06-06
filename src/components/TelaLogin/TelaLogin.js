import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {

  // console.log(props);

  const login = () => {
    // validação de login ainda será visto mais pra frente no curso
    // alert("Login bem sucedido, mas falta fazer a prática 3 e remover esse alerta")
    props.mudarTela("login")
  }

  const mostrarTelaCadastro = () => {
    // alert("Faça a prática 2 e remova esse alerta")
    props.mudarTela("cadastro")
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

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
