import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { createIcon } from "@chakra-ui/icons";

import MailchimpSubscribe from "react-mailchimp-subscribe";

export const SubmitIcon = createIcon({
  displayName: "SubmitIcon",
  viewBox: "0 0 32 32",
  path: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="currentColor" />
      <path
        d="M18.2188 11.625L17.5938 12.25C17.4688 12.4062 17.4688 12.625 17.625 12.7812L20.125 15.1875H9.375C9.15625 15.1875 9 15.375 9 15.5625V16.4375C9 16.6562 9.15625 16.8125 9.375 16.8125H20.125L17.625 19.25C17.4688 19.4062 17.4688 19.625 17.5938 19.7812L18.2188 20.4062C18.375 20.5312 18.5938 20.5312 18.75 20.4062L22.875 16.2812C23 16.125 23 15.9062 22.875 15.75L18.75 11.625C18.5938 11.5 18.375 11.5 18.2188 11.625Z"
        fill="white"
      />
    </svg>
  ),
});

function Form(props) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    email &&
      email.indexOf("@") > -1 &&
      props.onValidated({
        EMAIL: email,
      });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <InputGroup>
        <FormControl isRequired>
          <Input
            color={props.color}
            variant="outline"
            minWidth="250px"
            minHeight="64px"
            borderColor={props.borderColor}
            placeholder="Enter your email"
            _placeholder={{ color: props.color }}
            borderRadius="50px"
            type="email"
            px="34px"
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </FormControl>
        <InputRightElement w="64px" h="64px">
          <Button
            w="64px"
            h="64px"
            type="submit"
            borderRadius="50px"
            background="transaprent"
            _hover={{ background: "transaprent" }}
            _active={{ background: "transaprent" }}
          >
            <SubmitIcon width="32px" height="32px" color={props.buttonColor} />
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
}

function Newsletter(props) {
  return (
    <MailchimpSubscribe
      url={props.mailChimpURL}
      render={({ subscribe, status, message }) => (
        <>
          <Form
            onValidated={(formData) => subscribe(formData)}
            borderColor={props.borderColor}
            color={props.color}
            buttonColor={props.buttonColor}
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

export { Newsletter };
