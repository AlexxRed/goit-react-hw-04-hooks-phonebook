import styled from '@emotion/styled';

export const ItemList = styled.label`
  display: flex;
  align-items: center;
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.black};
    margin-right: 15px;
    margin-left: 30px;
  }
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  margin-left: 15px;
  border-radius: 2px;
  padding: 5px 10px;
  background-color: ${props => props.theme.colors.button};
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.buttonHover};
  }
`;