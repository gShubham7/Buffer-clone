import {
  Button,
  Center,
  // ButtonGroup,
  // Checkbox,
  // Divider,
  // Flex,
  FormControl,
  FormLabel,
  // Highlight,
  HStack,
  Image,
  // IconButton,
  Input,
  // Spacer,
  Spinner,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import "./components/Register.css"
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { registerUser } from "../../redux/register/register.actions";
import Recaptcha from "./components/Recaptcha";
// import Loading from "../Sufiyan/components/Loding";

const Register = () => {
  // const { isAuth } = useSelector((store) => store.auth);
  const { isRegistered, loading, error, successMessage, errorMessage } =
    useSelector((store) => store.register);
  const dispatch = useDispatch();
  const [registerCreds, setRegisterCreds] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterCreds({
      ...registerCreds,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (
      !registerCreds.email ||
      !registerCreds.password
    ) {
      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Your account is created",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      dispatch(registerUser(registerCreds));
    }
  };

  if (isRegistered) {
    return <Navigate to="/login" />;
  }
  // if (loading) {
  //   return <Loading />;
  // }
   if (error) {
    return toast({
      title: "Wrong Credentials",
      description: "Incorrect Email or Password",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  }
  return (
    <HStack w="full">
      <VStack
        spacing={3}
        w="250vh"
        padding={{ base: "20px", md: "50px 100px" }}
        height="100vh"
      >
        <Stack w="85%" textAlign="left">
          <Text marginTop={250} fontSize="3xl" fontWeight="bold">
            Let's get your account set up
          </Text>
        </Stack>

        <Stack spacing={3} w="85%">
          {/* <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Enter Your Name..."
            />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input
              onChange={handleChange}
              name="surname"
              type="text"
              placeholder="Enter Your Surname..."
            />
          </FormControl> */}
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter Your Email..."
            />
          </FormControl>

          <FormControl>
            <FormLabel>Create a Password</FormLabel>
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Enter Your Password..."
            />
          </FormControl>
          {/* <FormControl>
            <FormLabel> Confirm Password</FormLabel>
            <Input type="password" placeholder="Re-Enter Your Password..." />
          </FormControl> */}
        </Stack>
        <Stack textAlign="left" spacing={3} w="85%">
          <Recaptcha />
          <Button
            onClick={handleClick}
            w="full"
            colorScheme="facebook"
            variant="solid"
          >
            {"Sign Up"}
            {loading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
          </Button>
        </Stack>
        <HStack className="display" >
          <Text>I agree to <span>Buffer's Terms of Service</span></Text>
          <Link to='/login'><Text>Already have an account?</Text></Link>
        </HStack>
      </VStack>

      <VStack
        textAlign="left"
        w="full"
        padding={100}
        height="100vh"
        bg="grey"
        color={"white"}
        display={{ base: "none", md: "block" }}
        paddingTop={300}
      >
        <Text width="110%" fontSize="24px" fontWeight="semibold" lineHeight={1.3}>
          “With Buffer I can build social content out as far as I want into the future 
          but also tailor campaigns if we see certain trends within the industry.”
        </Text> <br />
        <Center>
        <Image
          // paddingLeft="20"
          width="30%"
          src="https://static.buffer.com/login/public/img/signup-avatar-publish.png"
        /> 
        </Center>
        <Center>
          <Text
            width="full"
            fontSize="15px"
            fontWeight="thin"
            maxWidth={{ base: "100%", md: "65%", lg: "65%" }}
            color="White"
          >
            <Text paddingLeft={10} fontWeight="bold"> Justin Ozanich</Text>
            <Text paddingLeft={8} fontWeight="semibold">Marketing Manager</Text>
            <Text paddingLeft={5} fontWeight="semibold">Foster Coffee Company</Text>         
          </Text>
        </Center>
        
      </VStack>
    </HStack>
  );
};

export default Register;
