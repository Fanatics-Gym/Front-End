import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Buttons from "./buttonsForForm";
import PlayerInfo from "./playerInfo";
import VerificationInfo from "./verificationInfo";
import EmergencyInfo from "./emergencyInfo";
import TermsAndConditions from "./Terms";
import { PlayerInfoSchema } from "../../../yup/playerInfoSchema";
import { VerificationSchema } from "../../../yup/verificationSchema";
import { EmergencySchema, TermsSchema } from "../../../yup/EmergencySchema";
import { BaseUrl } from "../../Auth/axios";
import { SubmitApplication } from "../../../Recoil/apiCalls/applicationApiCalls";
import ReviewInfo from "./ReviewInfo";
import PaymentDetails from "./payment/paymentDetails";
import PaymentForm from "./payment/paymentForm";

const FormWrapper = ({ steps, activeStep, setActiveStep }) => {
  const { push } = useHistory();
  const [termsState, setTermsState] = useState(false);
  const applicationInfo = {
    info: {
      first_name: "",
      mi: "",
      last_name: "",
      email: "",
      phone: "",
      DOB: "",
      Altphone: "",
      Drivers_license: "",
      DL_Expiration: "",
      address: "",
      city: "",
      address_state: "",
      zip: "",
      current_address: "",
      current_city: "",
      current_zip: "",
      current_state: "",
      Em_First: "",
      Em_Last: "",
      relation: "",
      em_phone: "",
    },
    paymentInfo: {
      card_holder: "",
      card_number: "",
      card_cvv: "",
      exp_month: "",
      exp_year: "",
      billing_address: "",
      billing_apt: "",
      billing_city: "",
      billing_state: "",
      billing_zip: "",
      billing_country: "",
    },
  };

  console.log(termsState);

  const confirmTerms = () => {
    setTermsState(!termsState);
    console.log(termsState);
  };

  const handleNext = (applicationInfo, activeStep, setActiveStep) => {
    if (activeStep === 6 && termsState === true) {
      SubmitApplication(applicationInfo, push)();
    } else if (activeStep < 6) {
      setActiveStep(activeStep + 1);
      console.log(activeStep);
    }
    console.log(activeStep);
  };

  return (
    <Formik
      initialValues={applicationInfo}
      // validationSchema={
      //   activeStep === 0
      //     ? PlayerInfoSchema
      //     : activeStep === 1
      //     ? VerificationSchema
      //     : EmergencySchema
      // }
      onSubmit={(values) => handleNext(values, activeStep, setActiveStep)}
    >
      {(props) => (
        <Form>
          {activeStep === 0 ? (
            <PlayerInfo {...props} />
          ) : activeStep === 1 ? (
            <VerificationInfo {...props} />
          ) : activeStep === 2 ? (
            <EmergencyInfo {...props} />
          ) : activeStep === 3 ? (
            <ReviewInfo {...props} />
          ) : activeStep === 4 ? (
            <TermsAndConditions
              confirmTerms={confirmTerms}
              value={termsState}
            />
          ) : activeStep === 5 ? (
            <PaymentDetails />
          ) : (
            <PaymentForm {...props} />
          )}
          <Buttons
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormWrapper;
