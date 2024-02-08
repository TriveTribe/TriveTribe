import React from 'react';
// import ProfileComponent from "@/components/sidebarComponents/ProfileComponent";
import ProfileComponent from "@/components/loginComponents/ProfileComponent";
import LoginField from "@/components/loginComponents/LoginField";
import LoginButton from "@/components/loginComponents/LoginButton";

const LoginPage = () => {
    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <div className="justify-center h-2/3 w-5/6 border-lightGreen border-2">
                <ProfileComponent name="Participant"/>
                <LoginField field={"Login"} details={"Enter Your Username"}></LoginField>
                <LoginField field={"Password"} details={"Enter Your Password"}></LoginField>
                <LoginButton field={"test"}></LoginButton>
            </div>
        </div>


    );
};

export default LoginPage;
