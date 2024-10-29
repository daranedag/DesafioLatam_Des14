import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () =>{
    const { register } = useContext(UserContext);
    const [email, setEmail] = useState("")    
    const [pass, setPass] = useState("")
    const [confPass, setConfPass] = useState("")
    const navigate = useNavigate();

    const [errorMail, setErrorMail] = useState(false)
    const [errorMailFormat, setErrorMailFormat] = useState(false)    
    const [errorPass, setErrorPass] = useState(false)
    const [errorPassLength, setErrorPassLength] = useState(false)    
    const [errorConfPass, setErrorConfPass] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault();
        if(!validarInput()){
            return;
        }

        const isRegistered = await register(email, pass);
        if (isRegistered){
            alert("Registro exitoso");
            navigate("/profile");
        }
        else{
            alert("Error al registrarse");
        }
    };

    

    const validarInput = (e) =>{
        setErrorMail(false)
        setErrorMailFormat(false)
        setErrorPass(false)
        setErrorPassLength(false)
        setErrorConfPass(false)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let isValid = true;

        if(email === ''){
            setErrorMail(true)
            isValid = false;
        }
        else if(!emailRegex.test(email)){
            setErrorMailFormat(true)
            isValid = false;
        }

        if(pass === ''){
            setErrorPass(true)
            isValid = false;
        }
        else if(pass.length < 6){
            setErrorPassLength(true)
            isValid = false;
        }

        if(confPass !== pass){
            setErrorConfPass(true)
            isValid = false;
        }

        return isValid;
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
          setErrorPassLength(false);
        }
    };

    const cambiarConfPassInput = (e) => {
        setConfPass(e.target.value);
    
        if (e.target.value !== "") {
            setErrorConfPass(false);
        }
    
        if (e.target.value !== pass) {
            setErrorConfPass(false);
        }
    };

    return(        
        <div className="container mt-3 mb-5">
            <h1>Registro</h1>
            <form onSubmit={handleRegister}>
                {errorMail ? <p className="text-bg-danger" id="errorMail">Debes ingresar tu email</p> : null}
                {errorMailFormat ? (<p className="text-bg-danger" id="errorMailFormat">El formato del email no es válido</p>) : null}
                <label htmlFor="correo" className="form-label">Email</label>
                <input type="email" id="correo" name="correo" placeholder="Ingresa tu email" className="form-control mb-2" onChange={cambiarMailInput}/>

                {errorPass ? <p className="text-bg-danger">Debes ingresar tu contraseña</p>: null}
                {errorPassLength ? <p className="text-bg-danger">Tu contraseña debe tener al menos 6 caracteres</p>: null}
                <label htmlFor="correo" className="form-label">Contraseña</label>
                <input type="password" id="pass" name="pass" placeholder="Ingresa tu contraseña" className="form-control mb-2" onChange={cambiarPassInput}/>

                {errorConfPass ? <p className="text-bg-danger">La confirmación y la contraseña deben coincidir</p>: null}
                <label htmlFor="correo" className="form-label">Confirma Contraseña</label>
                <input type="password" id="confirmapass" name="confirmapass" placeholder="Repite tu contraseña" className="form-control mb-2" onChange={cambiarConfPassInput}/>
                
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    )
}

export default Register;