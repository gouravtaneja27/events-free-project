import React, { useState } from 'react'
import Button from './button';

function Form() {

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        let newErrors = {};

        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const about = form.about.value.trim();

        if (!firstName) newErrors.firstName = "First name is required";
        if (!lastName) newErrors.lastName = "Last name is required";

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email address";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (confirmPassword !== password) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (!about) newErrors.about = "About me is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully 🎉");
            form.reset();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full">
                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className="font-Poppins font-normal text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] w-full"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div className="w-full">
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="font-Poppins font-normal text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] w-full"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
            </div>

            <div>
                <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="font-Poppins font-normal text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] w-full"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full">
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="font-Poppins font-normal text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] w-full"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div className="w-full">
                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="font-Poppins font-normal text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] w-full"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
            </div>

            <div>
                <textarea
                    name="about"
                    placeholder="About Me"
                    rows={4}
                    className="font-Poppins font-normal text-[16px] leading-[100%] px-4 py-3 border border-[#00000066] rounded-lg focus:outline-none focus:border-[#2C49FE] w-full max-h-[124px] resize-none overflow-y-auto"
                />
                {errors.about && <p className="text-red-500 text-sm mt-1">{errors.about}</p>}
            </div>

            <Button
                text="Sign Up"
                className="w-full h-[46px] rounded-[23px] px-7 py-[11px] bg-[#2C49FE] hover:bg-[#162fd1] font-Poppins font-semibold text-[16px] leading-[150%] text-white cursor-pointer mt-[21px] mb-[90px]"
            />
        </form>
    );
}

export default Form;