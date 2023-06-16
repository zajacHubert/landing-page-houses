import { FC, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PopupFormInfo from './PopupFormInfo';
import {
  StyledBoxLabelError,
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledPError,
  StyledTitle,
} from './ContactForm.css';

interface ContactFormInterface {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: FC = () => {
  const [popupInfo, setPopupInfo] = useState<ContactFormInterface>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isPopupOpen, setIsPopupOpen] = useState<Boolean>(false);

  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const validationSchema = () =>
    Yup.object().shape({
      name: Yup.string().required().min(4).max(50),
      phone: Yup.string()
        .required()
        .matches(phoneRegExp, 'Enter a valid phone'),
      email: Yup.string().required().email(),
      message: Yup.string().required().max(50),
    });

  const initialValues: ContactFormInterface = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const submitForm = (values: ContactFormInterface) => {
    setPopupInfo(values);
    setIsPopupOpen(true);
  };

  return (
    <>
      {isPopupOpen && (
        <PopupFormInfo
          name={popupInfo.name}
          email={popupInfo.email}
          phone={popupInfo.phone}
          message={popupInfo.message}
          setIsPopupOpen={setIsPopupOpen}
        />
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          } = formik;

          return (
            <>
              <StyledTitle>Contact with us</StyledTitle>
              <StyledForm onSubmit={handleSubmit} noValidate>
                <StyledBoxLabelError>
                  <StyledLabel>Name</StyledLabel>
                  {errors.name && touched.name && (
                    <StyledPError>{errors.name}</StyledPError>
                  )}
                </StyledBoxLabelError>
                <StyledInput
                  id='name'
                  type='text'
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <StyledBoxLabelError>
                  <StyledLabel>Email</StyledLabel>
                  {errors.email && touched.email && (
                    <StyledPError>{errors.email}</StyledPError>
                  )}
                </StyledBoxLabelError>
                <StyledInput
                  id='email'
                  name='email'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <StyledBoxLabelError>
                  <StyledLabel>Phone</StyledLabel>
                  {errors.phone && touched.phone && (
                    <StyledPError>{errors.phone}</StyledPError>
                  )}
                </StyledBoxLabelError>
                <StyledInput
                  id='phone'
                  name='phone'
                  type='text'
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <StyledBoxLabelError>
                  <StyledLabel>Message</StyledLabel>
                  {errors.message && touched.message && (
                    <StyledPError>{errors.message}</StyledPError>
                  )}
                </StyledBoxLabelError>
                <StyledInput
                  id='message'
                  name='message'
                  type='message'
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <StyledBtn type='submit'>Send</StyledBtn>
              </StyledForm>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
