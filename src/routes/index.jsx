import { Route, Routes } from "react-router-dom";
import { LoginForm } from "../components/accountBox/loginForm";
import { SignupForm } from "../components/accountBox/signupForm";
import { Dashboard} from "../components/dashboard"


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/forgot-password" element={<SignupForm />} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    ) 
}

