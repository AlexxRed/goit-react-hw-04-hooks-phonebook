import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { MainForm, Label, InputForm, ButtonAdd } from './ContactForm.styled';
import PropTypes from 'prop-types';


const initialValues = {
  name: '',
  number: '',
};
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(8).positive().required(),
});

const renderError = message => <p>{message}</p>;

export default function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <MainForm autoComplete="off">
        <Label htmlFor="name">Name</Label>
        <InputForm name="name" type="text" placeholder="Enter name" />
        <ErrorMessage name="name" render={renderError} />
        <Label htmlFor="number">Number</Label>
        <InputForm name="number" type="tel" placeholder="Enter phone number" />
        <ErrorMessage name="number" render={renderError} />
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </MainForm>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}