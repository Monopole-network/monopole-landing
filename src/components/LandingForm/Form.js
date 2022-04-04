import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  Text,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import { createIcon } from "@chakra-ui/icons";

import MailchimpSubscribe from "react-mailchimp-subscribe";

export const LockIcon = createIcon({
  displayName: "SubmitIcon",
  viewBox: "0 0 32 32",
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="#FFF"
      stroke="#333"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  ),
});

function Form(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    email &&
      email.indexOf("@") > -1 &&
      props.onValidated({
        EMAIL: email,
      });

    // Validate name and phone
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{
        padding: "45px 34px 42px",
        marginBottom: "140px",
        borderRadius: "24px",
        background: props.bgColor,
      }}
    >
      <Text
        fontSize={props.textSize}
        fontWeight="700"
        fontFamily="Montserrat"
        color="#0C0E47"
        textAlign="center"
        mb="36px"
        lineHeight="38px"
      >
        {props.formText}
      </Text>
      <InputGroup>
        <FormControl isRequired>
          <Input
            color={props.color}
            variant="outline"
            minWidth="250px"
            minHeight="64px"
            borderColor={props.borderColor}
            placeholder="Your name"
            _placeholder={{ color: props.color }}
            borderRadius="12px"
            _hover={{ border: "1px solid #0C0E47", cursor: "pointer" }}
            px="34px"
            onChange={(event) => setName(event.currentTarget.value)}
            mb="12px"
          />
          <Input
            color={props.color}
            variant="outline"
            minWidth="250px"
            minHeight="64px"
            borderColor={props.borderColor}
            placeholder="Your email"
            _placeholder={{ color: props.color }}
            _hover={{ border: "1px solid #0C0E47", cursor: "pointer" }}
            borderRadius="12px"
            type="email"
            px="34px"
            onChange={(event) => setEmail(event.currentTarget.value)}
            mb="12px"
          />
          <Input
            color={props.color}
            variant="outline"
            minWidth="250px"
            minHeight="64px"
            borderColor={props.borderColor}
            placeholder="Your phone"
            _placeholder={{ color: props.color }}
            _hover={{ border: "1px solid #0C0E47", cursor: "pointer" }}
            borderRadius="12px"
            px="34px"
            onChange={(event) => setPhone(event.currentTarget.value)}
            mb="40px"
          />
        </FormControl>
      </InputGroup>

      <Button
        type="submit"
        padding="28px 0"
        width="100%"
        background="linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)"
        borderRadius="16px"
        _hover={{
          background:
            "linear-gradient(86.3deg, #8135FF 3.04%, #FF006B 101.29%)",
          transform: "translateY(-2px)",
        }}
        _active={{ background: "transaprent" }}
        fontSize="18px"
        fontFamily="Montserrat"
        color="#FFF"
      >
        <LockIcon mr="8px" />
        Unlock your potential!
      </Button>
    </form>
  );
}

function LandingForm(props) {
  return (
    <MailchimpSubscribe
      url={props.mailChimpURL}
      render={({ subscribe, status, message }) => (
        <>
          <Form
            onValidated={(formData) => subscribe(formData)}
            borderColor={props.borderColor}
            bgColor={props.bgColor}
            color={props.color}
            buttonColor={props.buttonColor}
            formText={props.formText}
            textSize={props.textSize}
          />
          {status === "sending" && (
            <div style={{ color: "blue" }}>sending...</div>
          )}
          {status === "error" && (
            <div style={{ color: "red" }}>
              Email address is invalid or already registered
            </div>
          )}
          {status === "success" && (
            <div style={{ color: "green" }}>Subscribed !</div>
          )}
        </>
      )}
    />
  );
}

export { LandingForm };
