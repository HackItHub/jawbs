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
import { useAuthContext } from "../../contexts";

type Credentials = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const { setToken } = useAuthContext();
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    try {
      const formData: Credentials = {
        email,
        password,
      };
      const token = await axios.post("/api/auth/sign-in", formData);
      setToken(token.data.token);
      navigate("/");
    } catch {
      setFormError("Invalid credentials, please try again");
    }
  };

  return (
    <LayoutContainer>
      <Heading size='h3'>Sign In</Heading>
      <Section>
        <form onSubmit={handleSignIn}>
          <SubSection>
            <FormFieldText
              aria-label='Email'
              placeholder='JohnDoe@gmail.com'
              label='Email'
              id='email'
              dataId='email'
              errorMessage={formError}
              onChange={(_, value) => setEmail(value)}
              value={email}
              autoComplete='username'
            />
          </SubSection>
          <SubSection>
            <FormFieldText
              aria-label='Password'
              errorMessage={formError}
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
            <div className='flex justify-between'>
              <button type='submit' className='submit-button text-[16px]'>
                Sign in
              </button>

              <Link to='/sign-up' className='pt-2 underline border-0 bg-none'>
                Sign Up
              </Link>
            </div>
          </SubSection>
        </form>
      </Section>
    </LayoutContainer>
  );
};

export default SignIn;
