import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const loginPages = () => {
        if (email === 'admin@gmail.com' && password === '12345') {
            navigate('/dashboard');
        } else {
             
        }
    };

    return (
        <div>
            <header>
                <h1 className="text-5xl text-center mt-6">
                    Welcome to your <span className="font-semibold text-orange-600">Baap Er Bank</span>!!!
                </h1>
            </header>
            <section className="bg-orange-100 w-9/12 mx-auto mt-12 p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl mb-4 font-medium text-orange-500">Please Login</h3>
                <div>
                    <input
                        className="w-9/12 block mb-3 py-2 px-3 border border-gray-300 rounded-md"
                        type="email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="w-9/12 block mb-3 py-2 px-3 border border-gray-300 rounded-md"
                        type="password"
                        placeholder="Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="mt-2 bg-amber-600 px-8 py-2 text-white font-medium rounded-lg hover:bg-amber-700 transition"
                        onClick={loginPages}
                    >
                        Login
                    </button>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl text-center mt-6">
                    <p>
                        <span className="font-semibold">Gmail:</span>{" "}
                        <span className="text-green-500">admin@gmail.com</span>
                    </p>
                    <p>
                        <span className="font-semibold">Password:</span>{" "}
                        <span className="text-red-500">12345</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
