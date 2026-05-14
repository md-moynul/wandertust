'use client'

import LoginWith from "@/components/LoginWith";
import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
const LoginPage = () => {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(false)
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())
        console.log(userData);
        
        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
        })
        
        if (data) {
            toast.success('Sign in successful')
            router.push('/')
        }
        if (error) {
            toast.error(error.message)
        }

    }
    return (
        <div className=" flex justify-center py-10">
            <div>
                <h2 className="text-center text-2xl md:text-4xl pb-6">Login</h2>
               
                <Card className="p-5 rounded-none">
                    <Form className="flex min-w-xs flex-col gap-4 " onSubmit={onSubmit}>
                       
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="Enter your email" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type={isVisible ? "text" : "password"}
                            className={'relative'}
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >

                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <span onClick={() => setIsVisible(!isVisible)} className="cursor-pointer absolute top-8 right-3">{isVisible ? <FaEye size={22} /> : <FaEyeSlash size={23} />}</span>

                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                        <div className="flex gap-2">
                            <Button className={'bg-cyan-500 rounded-none w-full'} type="submit">

                               login
                            </Button>

                        </div>
                    </Form>

                    <div className="flex justify-center items-center gap-2">
                        <Separator />
                        <p className="whitespace-nowrap">Or sign up with</p>
                        <Separator />
                    </div>
                    <LoginWith />
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;