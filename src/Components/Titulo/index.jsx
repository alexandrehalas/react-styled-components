import styled from 'styled-components';

// sintaxe de template literals
const Titulo = styled.h1`
  color: ${({ theme }) => theme.text};
  padding: 25px 0;
`

export default Titulo;
