import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Heading, Container, VStack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const signup = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();
    if (password == repeatPassword) {
      try {
        await signup(email, password);
        navigate("/");
      } catch (error:any) {
        console.log(error);
        setError(error.code);
      }
    } else {
      setError("Passwords do not match");
    }
  };
  return (
    <>
        <VStack spacing={4}>
          <Heading size="xl">Sign up</Heading>
          <form onSubmit={e => {handleSubmit(e)}}>
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
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <Button>Sign up</Button>
          {error && <p>{error}</p>}

          </form>
          <Link to="/login">Do you already have an account?</Link>
        </VStack>
    </>
  );
}
