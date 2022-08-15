import React, {useState, useContext } from "react";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [details, setDetails] = useState({name: "", email: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("");

  const adminUser = {
    email: "zachariarian@gmail.com",
    password: "123@abc"
  }

    const Login = details => {
      console.log(details);

      if (details.email === adminUser.email && details.password === adminUser.password) {
        console.log("Logged in");
        setUser({
          name: details.name,
          email: details.email
        });
      } else {
        console.log("Details do not match!");
        setError("Details do not match!");
      }
    }


    const Logout = details => {
      setUser({name: "", email: ""});
      console.log(Logout);
  
  }
  return (
    <>
    <form onSubmit={submitHandler}></form>
    <Login>Login</Login>
    {(error !== "") ? (<error>({error})</error> ) : ""}
    <React.Fragment> {(user.email !== "") ? (
      "Welcome", <><span>{user.name} </span>
      <button onClick={Logout}> Logout </button></> )
      : (
        <LoginForm Login={Login} error={error}/>
      )} </React.Fragment>
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
        <Input type="email" placeholder="Email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        <Input type="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        <input type="submit" value={Login}/>
        </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <button onClick={Login}>Login</button>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    </>
  );
  }