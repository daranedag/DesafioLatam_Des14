import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const { setToken } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("")    
    const [errorMail, setErrorMail] = useState(false)
    const [errorMailFormat, setErrorMailFormat] = useState(false)

    const [pass, setPass] = useState("")
    const [errorPass, setErrorPass] = useState(false)
    const [errorPassLargo, setErrorPassLargo] = useState(false)    
    
    const validarInput = (e) =>{
        e.preventDefault()

        setErrorMail(false)
        setErrorPass(false)
        setErrorPassLargo(false)
        setErrorMailFormat(false)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(email === ''){
            setErrorMail(true)
            return
        }

        if (!emailRegex.test(email)) {
            setErrorMailFormat(true)
            return
        }

        if(pass === ''){
            setErrorPass(true)
            return
        }
        if(pass.length < 6){
            setErrorPassLargo(true)
            return
        }

        alert("Autentificación exitosa!!")
        setToken(true);
        navigate("/");
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
            <form onSubmit={validarInput}>
                {errorMail ? <p className="text-bg-danger" id="errorMail">Debes ingresar tu email</p> : null}
                {errorMailFormat ? (<p className="text-bg-danger" id="errorMailFormat">El formato del email no es válido</p>) : null}
                <label htmlFor="correo" className="form-label">Email</label>
                <input type="email" id="correo" name="correo" placeholder="Ingresa tu email" className="form-control mb-2" onChange={cambiarMailInput}/>
                
                {errorPass ? <p className="text-bg-danger">Debes ingresar tu contraseña</p>: null}
                {errorPassLargo ? <p className="text-bg-danger">Tu contraseña debe tener al menos 6 caracteres</p>: null}
                <label htmlFor="pass" className="form-label">Contraseña</label>
                <input type="password" id="pass" name="pass" placeholder="Ingresa tu contraseña" className="form-control mb-2" onChange={cambiarPassInput}/>
                
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default Login;