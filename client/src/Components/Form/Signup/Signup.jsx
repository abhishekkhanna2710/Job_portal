import React, { useState } from 'react'

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleinput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h1>Register</h1>
            <form method='POST'>
                <input type="text"
                    name="name"
                    placeholder='Enter Name'
                    value={user.name}
                    onChange={handleinput}
                />
                <input type="email"
                    name="email"
                    placeholder='Enter Email'
                    value={user.email}
                    onChange={handleinput}
                />
                <input type="password"
                    name="password"
                    placeholder='Enter Password'
                    value={user.password}
                    onChange={handleinput}
                />

                <input type="submit" value="Register" />
                {/* <input type="submit" value="Register" onClick={registerUser} /> */}

            </form>


        </div>
    )
}

export default Signup