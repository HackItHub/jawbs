import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutContainer,
  Heading,
  Section,
  SubSection,
  FormFieldText,
} from "../layout";

type Credentials = {
  email: string;
  password: string;
  verifyPassword: string;
};

type FormErrors = {
  email?: string;
  password?: string;
  verifyPassword?: string;
};

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [formError, setFormError] = useState<FormErrors>({});
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError({});
    try {
      const formData: Partial<Credentials> = {
        email,
        password,
      };
      axios.post("/api/auth/sign-up", formData);
      // navigate("/sign-in");
    } catch (err) {
      // eslint-disable-next-line
      console.log(err.code);
    }
  };

  return (
    <LayoutContainer>
      <Heading size='h3'>Sign Up</Heading>
      <Section>
        <form onSubmit={handleSignUp}>
          <SubSection>
            <FormFieldText
              aria-label='Email'
              placeholder='JohnDoe@gmail.com'
              label='Email'
              id='email'
              dataId='email'
              errorMessage={formError?.email}
              onChange={(_, value) => setEmail(value)}
              value={email}
              autoComplete='username'
            />
          </SubSection>
          <SubSection>
            <FormFieldText
              aria-label='Password'
              errorMessage={formError?.password}
              placeholder='veryweakpassword'
              label='Password'
              id='password'
              dataId='password'
              type='password'
              onChange={(_, value) => setPassword(value)}
              value={password}
              autoComplete='current-password'
            />
          </SubSection>
          <SubSection>
            <FormFieldText
              aria-label='Verify Password'
              errorMessage={formError?.verifyPassword}
              placeholder='veryweakpassword'
              label='Verify Password'
              id='verifyPassword'
              dataId='verifyPassword'
              type='password'
              onChange={(_, value) => setVerifyPassword(value)}
              value={verifyPassword}
              autoComplete='current-password'
            />
          </SubSection>
          <SubSection>
            <div className='flex justify-between'>
              <button type='submit' className='submit-button text-[16px]'>
                Sign Up
              </button>

              <Link to='/sign-in' className='pt-2 underline border-0 bg-none'>
                Sign in
              </Link>
            </div>
          </SubSection>
        </form>
      </Section>
    </LayoutContainer>
  );
};

export default SignIn;
