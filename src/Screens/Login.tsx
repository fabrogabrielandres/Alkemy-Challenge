import {Stack, Text, Button, Input} from '@chakra-ui/react';
import React from 'react';
import {Field, Form, Formik} from 'formik';
import {useHistory} from 'react-router';

import video from '../assets/intro.mp4';
import './login.css';

interface Values {
  password: string;
  email: string;
}

export const Login = () => {
  const history = useHistory();

  return (
    <>
      <Stack h={'100vh'} justify="center" w={'100vw'}>
        <video autoPlay loop muted className="video" src={video} />
        <Stack alignSelf="center" backgroundColor="transparent">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values: Values) => {
              if (values.email === 'challenge@alkemy.org' && values.password === 'react') {
                localStorage.setItem('token', 'logged');
                history.push('/home');
              }
            }}
          >
            <Form>
              <Stack align="center">
                <Text backgroundColor="transparent" color="white" fontSize={'2xl'} htmlFor="email">
                  Your Email
                </Text>

                <Field id="email" name="email">
                  {({field}) => (
                    <Input
                      type="email"
                      {...field}
                      _hover={{
                        background: 'black',
                        color: 'white',
                      }}
                      fontSize={'2xl'}
                      placeholder="john@acme.com"
                      transition={'1s ease-out'}
                    />
                  )}
                </Field>

                <Text
                  backgroundColor="transparent"
                  fontSize={'2xl'}
                  htmlFor="password"
                  textColor="white"
                >
                  Your Password
                </Text>
                <Field id="password" name="password">
                  {({field}) => (
                    <Input
                      type="password"
                      {...field}
                      _hover={{
                        background: 'black',
                        color: 'white',
                      }}
                      fontSize={'2xl'}
                      placeholder="*****"
                      transition={'1s ease'}
                    />
                  )}
                </Field>
                <Button
                  _hover={{
                    background: 'black',
                    color: 'white',
                  }}
                  backgroundColor="transparent"
                  border="black"
                  fontSize={'2xl'}
                  transition={'1s ease-in-out'}
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </Form>
          </Formik>
        </Stack>
      </Stack>
    </>
  );
};
