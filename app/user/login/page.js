"use client"
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("${process.env.NEXT_PUBLIC_URL}/api/user/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const jsonData = await response.json()
            alert(jsonData.message)

        } catch {
            alert("login failed")
        }
    }

    return (
        <div>
            <title>loginpage</title>
            <meta name="description" content="loginpage"/>
            <h1 className="page-title">User Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    required
                />

                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="パスワード"
                    required
                />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login