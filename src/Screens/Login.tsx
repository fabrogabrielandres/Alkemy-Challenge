import {Stack, Text} from '@chakra-ui/react';
import React from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {useHistory} from 'react-router';

import image from '../assets/login.jpg';

interface Values {
  password: string;
  email: string;
}

export const Login = () => {
  const history = useHistory();

  return (
    <Stack
      align="center"
      backgroundColor="red"
      backgroundImage={image}
      bgPosition="center"
      bgRepeat={'no-repeat'}
      h={'100vh'}
      justify="center"
      w={'100vw'}
    >
      <Stack align="center" backgroundColor="red" height="s" justify="center" width="s">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values: Values, {setSubmitting}: FormikHelpers<Values>) => {
            if (values.email === 'challenge@alkemy.org' && values.password === 'react') {
              console.log('bien');
              history.push('/home');
              localStorage.setItem('token', 'logged');
            }
          }}
        >
          <Form>
            <Text htmlFor="email">Email</Text>
            <Field id="email" name="email" placeholder="john@acme.com" type="email" />

            <Text htmlFor="password" textColor="white">
              Your Password
            </Text>
            <Field id="password" name="password" placeholder="password" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <Text fontSize="xl" textColor="white">
          Enter your Email
        </Text>
      </Stack>
    </Stack>
  );
};
