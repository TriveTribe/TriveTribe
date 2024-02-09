// import React from 'react';
// import ProfileComponent from "@/components/loginComponents/ProfileComponent";
// import LoginField from "@/components/loginComponents/LoginField";
// import LoginButton from "@/components/loginComponents/LoginButton";
// // import { useFormState, useFormStatus } from 'react-dom';
// // import { authenticate } from '@/app/lib/actions';
//
//
// const LoginPage = () => {
//     // const [errorMessage, dispatch] = useFormState(authenticate, undefined);
//     return (
//         <div className="flex w-screen h-screen justify-center items-center">
//             <div className="justify-center h-2/3 w-5/6 border-lightGreen border-2">
//                 <ProfileComponent name="Participant"/>
//                 <LoginField field={"Login"} details={"Enter Your Username"}></LoginField>
//                 <LoginField field={"Password"} details={"Enter Your Password"}></LoginField>
//                 <LoginButton field={"test"}></LoginButton>
//             </div>
//         </div>
//
//
//     );
// };
//

// export default LoginPage;
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
    formLabel: string;
    isLoading?: boolean;
    onSubmit: SubmitHandler<Inputs>;
    username: string;
    password: string;
};

type Inputs = {
    username: string;
    password: string;
};

const LoginForm: React.FC<Props> = ({ formLabel, isLoading, onSubmit, username, password }: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();

    return (
        <form
            onSubmit={handleSubmit(onSubmit)} // Call the onSubmit function when the form is submitted
            className="flex flex-col space-y-4 mx-auto max-w-xs p-4 border border-gray-300 rounded-md"
        >
            <h2 className="text-lg font-semibold">{formLabel}</h2>
            <input
                {...register("username")}
                defaultValue={username}
                placeholder="Username"
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            />
            <input
                {...register("password")}
                defaultValue={password}
                placeholder="Password"
                type="password"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-600"
                disabled={isLoading}
            >
                {isLoading ? "Loading..." : "Submit"}
            </button>
        </form>
    );
};

export default LoginForm;
