import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React, {useState} from "react";
import "./styles.scss";
import {TiUserOutline, TiLockClosedOutline} from "react-icons/ti";
import {Link} from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    userPwd: "",
  });

  const {username, userPwd} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <HStack className="main-container" spacing={0}>
      <HStack className="logo-container">
        <img src={require("../../images/logo.png")} alt="logo" />
        <h2>ACES DBMS</h2>
      </HStack>

      <div className="left-container">
        <Stack spacing={2}>
          <h1 className="create-admin-account">Welcome back, log in</h1>

          <div className="username-container">
            <InputGroup className="username-input" w="80vw">
              <InputLeftElement
                pointerEvents="none"
                children={
                  <TiUserOutline className="icon" size={25} color="gray" />
                }
              />

              <Input
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                border="2px"
                borderColor="gray.300"
                isInvalid={
                  username.length === 0
                    ? false
                    : username.length > 0
                    ? false
                    : true
                }
                errorBorderColor="red.300"
                size="lg"
                onChange={onChange}
              />
            </InputGroup>
          </div>

          <div className="pwd-container">
            <InputGroup className="pwd-input" w="80vw">
              <InputLeftElement
                pointerEvents="none"
                children={
                  <TiLockClosedOutline
                    className="icon"
                    size={25}
                    color="gray"
                  />
                }
              />

              <Input
                type="password"
                name="userPwd"
                value={userPwd}
                placeholder="Password"
                isInvalid={
                  userPwd.length === 0
                    ? false
                    : userPwd.length > 8
                    ? false
                    : true
                }
                errorBorderColor="red.300"
                border="2px"
                borderColor="gray.300"
                size="lg"
                onChange={onChange}
              />
            </InputGroup>
          </div>
        </Stack>

        <Stack spacing={2}>
          <div className="link-container">
            <Button
              color="white"
              size="lg"
              colorScheme="blackAlpha"
              type="submit"
              className="login-btn"
            >
              Log in
            </Button>
          </div>
          <div>
            <Link to="/signup">
              <Button
                className="go-to-signup-link"
                color="blackAlpha.500"
                size="sm"
                mt={"2vh"}
                variant="link"
                colorScheme="blackAlpha"
              >
                <h2>Already have an account? Go to signup</h2>
              </Button>
            </Link>
          </div>
        </Stack>
      </div>

      <div className="right-container">
        <img
          src={require("../../images/img.png")}
          alt="people in church"
          className="img"
        />
      </div>
    </HStack>
  );
};

export default Login;
