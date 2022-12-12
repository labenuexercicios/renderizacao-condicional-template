import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";

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

  const [page,setPage] = useState(true)

  return (
    <MainContainer >
      <GlobalStyled />
      {page? 
      <TelaLogin setPage={setPage}/> : <TelaCadastro setPage={setPage}/>  
      }

      {}

    </MainContainer>
  );
}

export default App;