import React from 'react'
import{useNavigate} from 'react-router-dom';

const LoginRedirect= () => {
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('http://localhost:3000/register');
    }
    return (
        <div>
            <button onClick={handleClick}>Register</button>
        </div>
};

export default React.memo(LoginRedirect);