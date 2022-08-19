import { Route, Routes } from "react-router-dom";
import { LoginForm } from "../components/accountBox/loginForm";
import {Predictor} from "../components/accountBox/predictor";
import { SignupForm } from "../components/accountBox/signupForm";
import { Overdraft} from "../components/containers/Loans"
import {Apply} from "../components/containers/Application"



export const AppRoutes = () => {
    return (
       <Routes>
        <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/forgot-password" element={<SignupForm />} />
            <Route path="/predictor" element={<Predictor/>} />
            <Route path="/apply" element={<Apply/>} />
            <Route path="/tracker" element={<Overdraft/>} />
       </Routes>
    ) 
}

