import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
 
    const [errorMail, setErrorMail] = useState(false)
    const [errorMailFormat, setErrorMailFormat] = useState(false)    
    const [errorPass, setErrorPass] = useState(false)
    const [errorPassLargo, setErrorPassLargo] = useState(false)    
    
    const validarInput = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = true;

        setErrorMail(false)
        setErrorMailFormat(false)
        setErrorPass(false)
        setErrorPassLargo(false)

        if(email === ''){
            setErrorMail(true)
            isValid = false;
        }
        if (!emailRegex.test(email)) {
            setErrorMailFormat(true)
            isValid = false;
        }
        if(pass === ''){
            setErrorPass(true)
            isValid = false;
        }
        if(pass.length < 6){
            setErrorPassLargo(true)
            isValid = false;
        }

        return isValid;
    };

    const handleLogin = async (e) =>{
        e.preventDefault()

        if(!validarInput()){
            return;
        }

        const isAuthenticated = await login(email, pass);
        if(isAuthenticated) {
            navigate("/profile");
        }
        else{
            alert("Usuario o Contraseña incorrectos");
        }
    }

    const cambiarMailInput = (e) => {
        setEmail(e.target.value);
    
        if (e.target.value !== "") {
            setErrorMail(false);
        }
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
            setErrorMailFormat(false);
        }
    };

    const cambiarPassInput = (e) => {
        setPass(e.target.value);
    
        if (e.target.value !== "") {
          setErrorPass(false);
        }
    
        if (e.target.value.length >= 6) {
          setErrorPassLargo(false);
        }
    };
    return(
        <div className="container mt-3 mb-5">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                {errorMail ? (<div className="alert alert-danger" role="alert">Debes ingresar tu email</div>) : null}
                {errorMailFormat ? (<div className="alert alert-danger" role="alert">El formato del email no es válido</div>) : null}
                <label htmlFor="correo" className="form-label">Email</label>
                <input type="email" id="correo" name="correo" placeholder="Ingresa tu email" className="form-control mb-2" onChange={cambiarMailInput}/>
                
                {errorPass ? (<div className="alert alert-danger" role="alert">Debes ingresar tu contraseña</div>) : null}
                {errorPassLargo ? (<div className="alert alert-danger" role="alert">Tu contraseña debe tener al menos 6 caracteres</div>) : null}
                <label htmlFor="pass" className="form-label">Contraseña</label>
                <input type="password" id="pass" name="pass" placeholder="Ingresa tu contraseña" className="form-control mb-2" onChange={cambiarPassInput}/>
                
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default Login;