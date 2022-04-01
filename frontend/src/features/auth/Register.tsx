import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import CheckBoxFormik from '../../components/UI/CheckBoxFormik';
import InputFormik from '../../components/UI/InputFormik';
import SelectFormik from '../../components/UI/SelectFormik';
import Button from '../../components/UI/Button';
import styles from './Register.module.scss';
import appApi from '../../services/appApi';
import { useNavigate } from 'react-router-dom';

const validate = Yup.object({
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password should be of minimum 6 characters length')
    .required('required'),
  imageUrl: Yup.string().url('Invalid image url'),
  acceptedTerms: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),
  gender: Yup.string().oneOf(['male', 'female', 'other'], 'Invalid gender type'),
  phoneNumber: Yup.number().required('Required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  imageUrl: '',
  acceptedTerms: false, // added for our checkbox
  gender: '', // added for our select
  password: '',
  phoneNumber: '',
  position: '',
};

// And now we can use these
const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values: any, setErrors: (err: any) => void) => {
    try {
      const res = await appApi.register(values);
      console.log("hello", res.user.email)
      navigate('/admin');
    } catch (err: any) {
      if (err.errors.message) {
        console.log(err.errors.message);
        setErrors({
          email: err.errors.message,
        });
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <h1>Subscribe!</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values, { setErrors }) => handleSubmit(values, setErrors)}
        >
          <Form>
            <div className={styles.inputGroup}>
              <InputFormik label="First Name" name="firstName" type="text" placeholder="Jane" />

              <InputFormik label="Last Name" name="lastName" type="text" placeholder="Doe" />

              <InputFormik
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane@formik.com"
              />
              <InputFormik label="Address" name="address" type="text" />
              <InputFormik label="Image Url" name="imageUrl" type="text" />
              <InputFormik label="Phone" name="phoneNumber" type="text" />
              <SelectFormik label="Gender" name="gender">
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </SelectFormik>
              <SelectFormik label="Position" name="position">
                <option value="">Select your position</option>
                <option value="doctor">Doctor</option>
                <option value="victim">Victim</option>
                <option value="other">Other</option>
              </SelectFormik>
              <InputFormik label="Password" name="password" type="password" />
            </div>
            <CheckBoxFormik name="acceptedTerms">I accept the terms and conditions</CheckBoxFormik>
            <div className={styles.button}>
              <Button name="Register Now" type="submit" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
