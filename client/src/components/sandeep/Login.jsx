import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  // Flex,
  FormControl,
  FormLabel,
  // Highlight,
  HStack,
  IconButton,
  Image,
  Input,
  // Spacer,
  // Spinner,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../redux/auth/auth.actions";
import { signInWithGoogle } from "./firbase";
// import Loading from "../sandeep/components/loading";

const Login = () => {
  const { loading, error, errorMessage } = useSelector(
    (store) => store.auth
  );
  const isAuth=false
  const dispatch = useDispatch();
  const [loginCreds, setLoginCreds] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (!loginCreds.email || !loginCreds.password) {
      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      dispatch(login(loginCreds));
    }
  };

  const handleGoogle = () => {
    signInWithGoogle();
    toast({
      title: "Logged in successfully",
      description: "Go and get exciting offers...",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    dispatch(login());
  };

  // if (loading) {
  //   return <Loading />;
  // }
    if (error) {
    toast({
      title: "Wrong Credentials",
      description: "Incorrect Email or Password",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
    return <Navigate to="/login" />;
  }
  if (isAuth) {
    toast({
      title: "Logged in successfully",
      description: "Go and get exciting offers...",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    return <Navigate to="/" />;
  }
  return (
      
      <HStack w="full">
      <VStack
        spacing={2}
        w="100vh"
        padding={{ base: "20px", md: "50px 100px" }}
        // height="100vh"
        >
        <Box marginTop={{base:"0%",md:"-30%"}}><Image w={{base:500,md:500}} paddingRight={{base:"60%",md:"40%"} }src="./Ecotone_small.png"/></Box>
        <Stack w="full" textAlign="left">
          <Text marginTop={{base:"-12%",md:50}} fontSize="3xl" fontWeight="bold" paddingTop={"20%"}>
            Log in
          </Text>
          <Text fontSize="sm"></Text>
        </Stack>

        <Stack spacing={2} w="full">
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input
              onChange={handleChange}
              name="email"
              type="email"
             
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
             
              name="password"
              onChange={handleChange}
              />
          </FormControl>

          <Checkbox defaultChecked>Keep Me Logged in</Checkbox>
        </Stack>

        <Stack textAlign="left" spacing={2} w="full">
          <HStack marginTop={5} marginBottom={5} spacing={20}>
          <Link to="/signup"> <Text color="#6C6763">Create an account</Text></Link>
          <Text fontSize="15px" color="#6C6763" cursor={"pointer"}>
            Forgot your Password?
          </Text>
          </HStack>
          <Button
            onClick={handleClick}
            w="full"
            colorScheme="facebook"
            variant="solid"
            >
            {"Log In"}
            {/* {(
              <Spinner
              thickness="4px"
              speed="0.55s"
              emptyColor="gray.200"
              color="blue.500"
              size="lg"
              />
            )} */}
          </Button>
        </Stack>

        <HStack spacing={2} w="full">
          <Divider minW={1} />
          <Text w="full" fontSize="12px" color="gray.600">
            {" "}
            Or, login with google
          </Text>
          <Divider minW={1} />
        </HStack>

        <Stack spacing={2} w="full" paddingBottom={{base:20,md:0}}>
          <ButtonGroup size="md" isAttached variant="outline">
            <IconButton aria-label="Add to friends">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
                w={25}
                />
            </IconButton>
            <Button
              w="full"
              colorScheme="messenger"
              variant="solid"
              onClick={handleGoogle}
              >
              Log In With Google
            </Button>
          </ButtonGroup>

          {/* <ButtonGroup size="md" isAttached variant="outline">
            <IconButton aria-label="Add to friends">
              <Image
              src="https://cdn-icons-png.flaticon.com/512/3670/3670032.png"
                w={25}
              />
            </IconButton>
            <Button
            onClick={handleGoogle}
            w="full"
            bg="blackAlpha.600"
            color="white"
            variant="solid"
            >
            Sign In With Email
            </Button>
          </ButtonGroup> */}
        </Stack>
      </VStack>

      <VStack
        textAlign="left"
        w="full"
        height="100vh"
        bg="#FADE2A"
        display={{ base: "none", md: "block" }}
        color="black"
        marginBottom={"100px"}
        >
        <Box paddingTop={12} paddingLeft={10}><Button bgColor={"white"} color={"grey"} >New from Buffer</Button></Box>     
        <Text
          fontSize="37"
          fontWeight="bold"
          lineHeight="3rem"
          maxWidth={{ base: "100%", md: "60%", lg: "60%" }}
          paddingBottom="25px"
          paddingLeft={10}
          
          >
          Introducing: A free micro-site by Buffer
        </Text>
        
        <Text
          width="full"
          fontSize="18px"
          color="#3D3D37"
          maxWidth={{ base: "100%", md: "70%", lg: "70%" }}
          fontWeight="semibold"
          paddingLeft={10}
          >
          A Start Page is a beautiful, flexible, mobile-friendly landing page that you can build in minutes and update in seconds
        </Text> <br /><br /> <br /><br />
        <Image  w={"full"} height={503} src="https://login.buffer.com/img/sp-login-image.png" alt="gas-shock-1560\client\src\components\sandeep\assets\login-image.png"/>
      </VStack>
    </HStack>
    
  );
};

export default Login;
