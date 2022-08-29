import { Divider, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { COUNTRY_API, USER_POST_API } from "../../../Constants/SignUp";
import { ICountry, IFormValues } from "../../../Types/SignUp";
import { AntButton, FormWrapper } from "../style";
import EmailContainer from "./EmailContainer";
import NameContainer from "./NameContainer";
import PasswordContainer from "./PasswordContainer";
import PhoneNoContainer from "./PhoneNoContainer";
import { CaretRightOutlined } from "@ant-design/icons";
import { Routepaths } from "../../../Route/RoutePaths";
import { useNavigate } from "react-router-dom";

const SignUpForm: React.FC = () => {

    const methods = useForm<IFormValues>();

    const { handleSubmit, resetField } = methods;
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

    const handleReset = () => {
        resetField("fullname");
        resetField("countryId");
        resetField("phoneNo");
        resetField("email");
        resetField("password");
    }

    const onSubmit = async (formData: IFormValues) => {
        let userType: string;
        if (window.location.pathname.includes('seller')) {
            userType = 'seller';
        } else {
            userType = 'customer';
        }
        const payload = { ...formData, userType, phoneNo: Number(formData.phoneNo) };
        debugger
        await axios.post(USER_POST_API, payload)
            .then((response) => {
                debugger
                message.success("User Added Successfully");
                handleReset();
            })
            .catch((error) => {
                debugger
                // console.log("Errorrr...", error);
                message.error(error.response.data);
            });
    }

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