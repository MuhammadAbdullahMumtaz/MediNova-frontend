import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import axios from "axios";

import { toast } from 'react-toastify';

const UserSidebar = ({ isOpen, onClose, onSignupClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userRole, setUserRole] = useState("");

    const isEmailActive = email.trim() !== "";
    const isPasswordActive = password.trim() !== "";

    useEffect(() => {
        if (!isOpen) {
            setEmail("");
            setPassword("");
        }
    }, [isOpen]);

    const isLoggedIn = !!localStorage.getItem("user");

    useEffect(() => {
        if (isOpen) {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                setUserName(parsedUser.fullName);
                setUserRole(parsedUser.role);
            }
        }
    }, [isOpen]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUserName("");
        toast.success("Logged out successfully!");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/api/signin', {
                email,
                password,
            });

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            toast.success(res.data.message);
            onClose();
        } catch (err) {
            const errorMessage =
                err.response?.data?.message || 'Something went wrong during sign-in';
            toast.error(errorMessage);
        }
    };

    return (
        <div
            className={`fixed inset-0 bg-black/50 z-50 flex justify-end transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
        >
            <div
                className={`w-full max-w-md bg-white h-full overflow-y-auto transition-transform duration-300 transform p-8 pt-28 relative ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-5 right-6 text-gray-500">
                    <IoClose className="h-6 w-6" />
                </button>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Welcome Back
                    {userName && <span className="text-green-600"> {userName}</span>}
                </h2>
                <p className="text-center text-gray-600 mt-2 mb-6">
                    Sign in below to check order status, change subscription frequency, and more.
                </p>

                {/* Conditional rendering based on login */}
                {isLoggedIn ? (
                    <div className="flex justify-center mt-6">
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="underline text-red-500 hover:text-red-700 text-sm"
                        >
                            Logout here
                        </button>
                        {userRole === "admin" && (
                            <div className="text-center mb-4">
                                <Link
                                    to="/admin"
                                    className="text-sm underline text-blue-600 hover:text-blue-800"
                                    onClick={onClose}
                                >
                                    Go to Admin Panel
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <form id="signinForm" className="space-y-6" onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className={`relative email ${isEmailActive ? "active" : ""}`}>
                            <label
                                htmlFor="signinEmail"
                                className={`email-profile absolute left-4 transition-all duration-300 ${isEmailActive
                                        ? "top-0 text-xs px-2 bg-white text-green-600"
                                        : "top-3 text-sm text-gray-400"
                                    }`}
                            >
                                Email address *
                            </label>
                            <input
                                type="email"
                                id="signinEmail"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="email-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                        </div>

                        {/* Password Field */}
                        <div className={`relative email ${isPasswordActive ? "active" : ""}`}>
                            <label
                                htmlFor="signinPassword"
                                className={`email-profile absolute left-4 transition-all duration-300 ${isPasswordActive
                                        ? "top-0 text-xs px-2 bg-white text-green-600"
                                        : "top-3 text-sm text-gray-400"
                                    }`}
                            >
                                Password *
                            </label>
                            <input
                                type="password"
                                id="signinPassword"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="email-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <a
                                href="#"
                                className="text-gray-500 text-sm underline hover:text-green-500 transition duration-200"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="sign-in w-1/2 py-3 rounded-full font-semibold bg-green-200 text-black border-2 border-green-200 hover:bg-green-100 hover:border-black transition"
                        >
                            Sign In
                        </button>

                        {/* Signup Prompt */}
                        <div className="create-account flex gap-2 mt-6 text-sm text-gray-600">
                            <p>Don’t have an account yet?</p>
                            <button
                                type="button"
                                onClick={onSignupClick}
                                className="underline hover:text-green-500"
                            >
                                Create one here.
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default UserSidebar;
