import React from 'react';

const Login = () => (
        <div>
            <label htmlFor="email">Adres email:</label>
            <input type="email" required/>
            <label htmlFor="password">Hasło:</label>
            <input type="password" required/>
            <button type="submit">Utwórz konto</button>
        </div>
    )
;

export default Login;