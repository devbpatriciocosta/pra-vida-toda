import styled from 'styled-components'
import { useSWRConfig } from 'swr'
import axios from 'axios'
import { useState } from 'react'
import moment from 'moment'

import EditPost from './EditPost'

const PostContainer = styled.div`
  background-color: ${(props) => props.theme.quaternary};
  padding: 20px;
  border-radius: 10px;
`

const StyledUserName = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => props.theme.white};
`

const StyledDate = styled.p`
  font-size: 10px;
`

const ContainerMessage = styled.div`
  margin-top: 20px;
`

const ContainerMenu = styled.div`
  float: right;
`

export default function Post({ text, user, date, isOwner, id }) {
  const { mutate } = useSWRConfig()
  const [editPost, setEditPost] = useState(false)

  const handleEdit = async () => {
    setEditPost(true)
  }

  const handleSaveEdit = () => {
    setEditPost(false)
    mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        data: {
          id
        }
      })
      if (response.status === 200) mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <PostContainer>
      {isOwner && (
        <ContainerMenu>
          <Menu
            options={[
              {
                text: 'Editar Publicação',
                onClick: handleEdit
              },
              {
                text: 'Deletar publicação',
                onClick: handleDelete
              }
            ]}
          />
        </ContainerMenu>
      )}
      <StyledUserName>@{user}</StyledUserName>
      <StyledDate>{moment(date).format('LLL')}</StyledDate>
      <ContainerMessage>
        {!editPost && text}
        {editPost && <EditPost id={id} text={text} onSave={handleSaveEdit} />}
      </ContainerMessage>
    </PostContainer>
  )
}
