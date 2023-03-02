import styled from 'styled-components'

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.terciary};
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`

export default TextArea
