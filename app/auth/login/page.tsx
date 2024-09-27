'use client';

import {Button, Typography} from "@mui/material";
import Cookies from 'js-cookie';
import {useRouter} from "next/navigation";
export default function Login() {
    const router = useRouter();
    const loginHandler = (): void => {
        Cookies.set('AUTH_USER_TOKEN', 'lee');
        router.push('/dashboard');
    }
    return (
        <>
            <Typography variant={"h2"}>ورود</Typography>
            <Button variant={'contained'} onClick={loginHandler}>ورود به پنل</Button>
        </>
    );
}
