import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import imgLogin from "../../assets/login1.png";
import Button from "@mui/material/Button";
import './Login.sass';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import logoImg from "../../assets/logo.png";

export const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    return <Button onClick={() => loginWithRedirect()} className="client-high-button-error" variant="contained"
                   size="small" color="success">
                    Iniciar sesion
            </Button>
};

function Login() {

    return (
        <div>
                <Home/>
        </div>
    )
}

export default Login;