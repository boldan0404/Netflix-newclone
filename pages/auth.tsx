import Input from '@/components/Input'
import { useCallback, useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [variant, setVariant] = useState("login")

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === "login" ? "register" : "login");
    }, [])

    return (
        <div className='relative h-full w-full bg-[url(/images/hero.jpg)] bg-no-repeat bg-center bg-fixed bg-cover'>
            <div className='bf-black w-full h-full lg: bg-opacity-50'>
                <nav className='px-12 py-5'>
                    <img src="/images/logo.png" alt="logo" className='h-12' />
                </nav>
                {/* Sign in box holder  */}
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 front-semibold">
                            {variant === "login" ? "Sign In" : "Create an account"}
                        </h2>
                        <div className="input-container flex flex-col gap-4">
                            {variant === "register" && (
                                <Input
                                    id="username"
                                    onChange={(ev: any) => setUsername(ev.target.value)}
                                    value={username}
                                    label="Username"
                                    type=""
                                />)}
                            <Input
                                id="email"
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                value={email}
                                label="Email"
                                type="email"
                            />
                            <Input
                                id="password"
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                value={password}
                                label="Password"
                                type="password"
                            />
                        </div>
                        <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700'>
                            {variant === "login" ? "Login" : "Register"}
                        </button>
                        <p className='text-neutral-500 mt-12'>
                            {variant === "login" ? "First time using Netflix?" : "Already have an account"}
                            <span onClick={toggleVariant}
                                className='text-white ml-1 hover:underline cursor-pointer'>
                                {variant === "login" ? "Create an account" : "Login"}
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Auth;
