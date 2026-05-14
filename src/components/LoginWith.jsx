import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginWith = () => {
    const handelGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
        
    }
    return (
        <div>
            <Button onClick={handelGoogleSignin} className={'w-full rounded-none text-blue-600  border-blue-600'} variant='outline'><FcGoogle /> Login with google</Button>
        </div>
    );
};

export default LoginWith;