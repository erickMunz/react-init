import React from 'react';
import {Link} from 'react-router-dom';


const Login = () =>(
    <div>
        <h1>Inicio de session</h1>
        <Link to='/registrar'>Registrar</Link>
    </div>
);

export default Login;