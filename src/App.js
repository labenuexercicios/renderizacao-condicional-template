import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import React, { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado"

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela, setTela] = useState("login")
  function renderizaTela() {
    if (tela === "login") {
      return <TelaLogin mudaTela={mudaTela} />
    } else if (tela === "cadastro") {
      return <TelaCadastro mudaTela={mudaTela} />
    } else {
      return <TelaUsuarioCadastrado />
    }
  }
  /*
  // Para poder mudar a tela em ambas as telas, sem parâmetro é necessário fazer duas funções:
  // uma que muda entre login e cadastro e a outra que muda de cadastro para a próxima tela.
  const mudaTela = () => {
    if (tela === "login") {
      setTela("cadastro")
    } else if (tela === "cadastro") {
      setTela("login")
    }
  }

  const criarCadastro = () => {
    setTela("usuarioCadastrado")
  }
  */

  // usando o parâmetro na função, a mesma função pode ser usada para as três mudanças de tela!
  const mudaTela = (proximaTela)=>{
    setTela(proximaTela)
  }
  return (
    <MainContainer >
      <GlobalStyled />
      {/* exemplo com função e if/else ou switch case */}
      {renderizaTela()}

      {/* exemplo com curto-circuito */}
      {/* faz a verificação e recebe apenas uma expressão. Usar quando tiver uma condição necessária para exibir um componente ou trecho do código.  */}
      {/* {tela === "login" && <TelaLogin mudaTela={mudaTela} />}
      {tela !== "login" && <TelaCadastro mudaTela={mudaTela} />} */}

      {/* exemplo com ternário */}
      {/* OBS: usar quando tiver apenas duas situações. Para mais casos, é preferível usar a função */}
      {/* {tela === "login" ?
        <TelaLogin mudaTela={mudaTela} /> :
        <TelaCadastro mudaTela={mudaTela} criarCadastro={criarCadastro} />} */}

    </MainContainer>
  )
}

export default App;