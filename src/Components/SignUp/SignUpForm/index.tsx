import { Divider, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {API_KEY, COUNTRY_API, USER_SIGN_UP_API} from "../../../Constants/ApiEndpoints";
import { ICountry, IFormValues } from "../../../Types/SignUp";
import { AntButton, FormWrapper } from "../style";
import EmailContainer from "./EmailContainer";
import NameContainer from "./NameContainer";
import PasswordContainer from "./PasswordContainer";
import PhoneNoContainer from "./PhoneNoContainer";
import { CaretRightOutlined } from "@ant-design/icons";
import { Routepaths } from "../../../Route/RoutePaths";
import { useNavigate } from "react-router-dom";

import bcrypt from "bcryptjs";

const SignUpForm: React.FC = () => {

    const methods = useForm<IFormValues>();

    const { handleSubmit, resetField, setError } = methods;
    const navigate = useNavigate();
    const [isLoadingCountries, setIsLoadingCountries] = useState<boolean>(false);
    const [countryData, setCountryData] = useState<ICountry[]>([]);

    useEffect(() => {
        setIsLoadingCountries(true);
        axios.get(COUNTRY_API)
            .then((response) => {
                setCountryData(response.data);
            })
            .catch((error) => {
                message.error(error);
            })
            .finally(() => {
                setIsLoadingCountries(false);
            });
    }, []);

    const onSubmit = async (formData: IFormValues) => {
        let userType: string;
        if (window.location.pathname.includes('seller')) {
            userType = 'seller';
        } else {
            userType = 'customer';
        }
        const payload = { ...formData, userType, phoneNo: Number(formData.phoneNo) };

        const token = await bcrypt.hash(API_KEY, 10);
        await axios.post(`${USER_SIGN_UP_API}?token=${token}`, payload)
            .then((response) => {
                navigate(Routepaths.signin);
            })
            .catch((error) => {
                console.log(error);
                if (error?.response?.data?.code === 11000 && error?.response?.data?.keyValue?.email) {
                    setError("email", { type: 'custom', message: 'Email is alredy in use' });
                } else {
                    message.error(error.response.data);
                }
                if (error?.response?.data?.code === 11000 && error?.response?.data?.keyValue?.phoneNo) {
                    debugger
                    setError("phoneNo", { type: 'custom', message: 'Mobile number is already in use' });
                } else {
                    message.error(error.response.data);
                }
            });
    };

    return (
        <FormWrapper>
            <h1>Create Account</h1>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <NameContainer
                        methods={methods}
                    />
                    <PhoneNoContainer
                        methods={methods}
                        countryData={countryData}
                        isLoading={isLoadingCountries}
                    />
                    <EmailContainer
                        methods={methods}
                    />
                    <PasswordContainer
                        methods={methods}
                    />
                    <p>We will send you an email to verify your email.</p>
                    <AntButton htmlType="submit">Continue</AntButton>
                    <Divider />
                    <div className="sign-in">
                        <p>Already have an account?</p>&nbsp;
                        <a href="" onClick={() => navigate(Routepaths.signin)}>Sign-In <CaretRightOutlined /></a>
                    </div>
                </form>
            </FormProvider>
        </FormWrapper>
    );
};

export default SignUpForm;