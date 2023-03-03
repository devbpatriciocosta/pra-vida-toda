/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  padding: 15px 20px;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.quartenary};
  transition: all 0.3s;

  cursor: pointer;

  ${(props) => !props.disabled && 'cursor: pointer;'}
  :hover {
    background-color: ${(props) => props.theme.primaryHover};
  }

  :disabled {
    background-color: ${(props) => props.theme.disabled};
  }
`

const Button = ({ children, loading, disabled, ...props }) => {
  return (
    <StyledButton disabled={disabled || loading} {...props}>
      {loading && (
        <>
          <img src="./loading.svg" width="14px" />
          <p>Carregando...</p>
        </>
      )}
      {!loading && children}
    </StyledButton>
  )
}

export default Button
