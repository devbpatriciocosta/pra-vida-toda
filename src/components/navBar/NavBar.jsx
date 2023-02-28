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
`

const DesconectContainer = styled.p`
  cursor: pointer;
`

export default function NavBar() {
  return (
    <MainContainer>
      <TitleContainer>
        <H4>#PraTodaVida</H4>
      </TitleContainer>
      <DesconectContainer>
        <H4>Desconectar</H4>
      </DesconectContainer>
    </MainContainer>
  )
}
