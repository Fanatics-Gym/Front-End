import React from 'react'



const LoginForm = () => {
    return(
    <div className='loginForm'>
        <h2>Login</h2>
        <form>
            <h3>Username/Email</h3>
            <input type='text' placeholder='Insert Username or Email' name='username'/>
            <h3>Password</h3>
            <input type='password' placeholder='Insert Password'/>
            <button>Login</button>
        </form>

    </div>)
}

export default LoginForm