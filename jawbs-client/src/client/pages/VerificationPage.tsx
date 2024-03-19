import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  LayoutContainer,
  Section,
  SubSection,
  DisplayText,
  Heading,
} from "../components/layout";

const VerificationPage: React.FC = () => {
  const { params } = useParams();
  const [isVerified, setIsVerified] = useState(false);

  // if (params) {
  //   useEffect(() => {
  //     axios.post("/api/auth/verify")
  //   })
  // }

  return (
    <div>
      {!params && (
        <LayoutContainer>
          <Section>
            <SubSection>
              <Heading>Hello! Welcome to Jawbs!</Heading>
              <DisplayText>
                Hello thank you for signing up, please verify your account with
                the email we have sent.
              </DisplayText>
            </SubSection>
          </Section>
        </LayoutContainer>
      )}
    </div>
  );
};

export default VerificationPage;
