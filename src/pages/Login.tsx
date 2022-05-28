import React, { useState } from "react";
import { Link } from "react-router-dom";
//components
import { Heading, VStack, Container, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <VStack spacing={4}>
        <Heading as={"h2"} size="xl">
          Login
        </Heading>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <Button variant="solid" colorScheme="cyan">
            Login
          </Button>
        <Link to="/signup">Create a new account</Link>
      </VStack>
    </Container>
  );
}
