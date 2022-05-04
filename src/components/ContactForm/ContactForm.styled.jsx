import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const MainForm = styled(Form)`
  width: 200px;
  padding: 20px 100px 20px 20px;
  border: ${props => `1px solid ${props.theme.colors.black}`};
  border-radius: 4px;
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const InputForm = styled(Field)`
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const ButtonAdd = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: ${props => props.theme.colors.button};
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.buttonHover};
  }
`;