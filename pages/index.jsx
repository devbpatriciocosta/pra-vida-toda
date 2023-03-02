import styled from 'styled-components'

import NavBar from '../src/components/navBar/NavBar'
import CreatePost from '../src/components/cards/CreatePost'
import MainContainer from '../src/components/mainContainer/MainContainer'

import H3 from '../src/components/typography/H3'

const Content = styled.div`
  margin: 50px 0;
`

const LastPostText = styled.div`
  padding: 40px 0;
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`

function praTodaVidaApp() {
  return (
    <>
      <NavBar />
      <Content>
        <MainContainer>
          <CreatePost />
          <LastPostText>
            <H3>Últimas Postagens</H3>
          </LastPostText>
        </MainContainer>
      </Content>
    </>
  )
}

export default praTodaVidaApp
