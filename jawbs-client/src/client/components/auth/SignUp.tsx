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

  const handlePasswordCheck = () => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]+$/;
    if (password !== verifyPassword) {
      setFormError({
        ...formError,
        password: "Both passwords much match",
        verifyPassword: "Both passwords must match",
      });
      return false;
    }
    if (password.length <= 5) {
      setFormError({
        ...formError,
        password: "Password must be 6 characters long",
        verifyPassword: "Password must be 6 characters long",
      });
      return false;
    }

    if (!regex.test(password)) {
      setFormError({
        ...formError,
        password:
          "Password must have at least 1 alphabet character, 1 special character, and 1 number",
        verifyPassword:
          "Password must have at least 1 alphabet character, 1 special character, and 1 number",
      });
      return false;
    }

    setFormError({});
    return true;
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError({});

    if (handlePasswordCheck()) {
      try {
        const formData: Partial<Credentials> = {
          email,
          password,
        };
        await axios.post("/api/auth/sign-up", formData);
        navigate("/sign-in");
      } catch (err) {
        if (err.response.status === 409) {
          setFormError({
            ...formError,
            email: "Email already exists, please choose another one",
          });
        }
      }
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
