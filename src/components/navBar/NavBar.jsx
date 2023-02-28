import styled from 'styled-components'

import H4 from '../typography/H4'

const MainContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 5vh;
  padding: 0 120px 0 120px;
  background-color: ${(props) => props.theme.secondary};
`

const TitleContainer = styled.p`
  cursor: pointer;
  font-size: 24px;
  font-style: normal;
  color: ${(props) => props.theme.white};

  transition: ease-in-out 0.3s;

  :hover {
    transform: scale(1.1);
    color: ${(props) => props.theme.terciary};
  }
`

const DesconectContainer = styled.p`
  cursor: pointer;
`

export default function NavBar() {
  return (
    <MainContainer>
      <TitleContainer>#PraTodaVida</TitleContainer>
      <DesconectContainer>
        <H4>Desconectar</H4>
      </DesconectContainer>
    </MainContainer>
  )
}
