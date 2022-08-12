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

    const Login = details => {
      console.log(details);
  }
  return (
    <>

    
    <BoxContainer>
      <FormContainer>
        <Input type="text" name="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
        <Input type="email" placeholder="Email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        <Input type="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <button onClick={Login}>Login</button>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    </>
  );
  }