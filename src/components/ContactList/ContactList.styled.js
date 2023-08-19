import styled from '@emotion/styled';

export const List = styled.ul`
  padding: ${({ theme }) => theme.spacing * 4}px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
