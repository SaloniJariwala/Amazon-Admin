import { Divider, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { COUNTRY_API } from "../../../Constants/SignUp";
import { ICountry, IFormValues } from "../../../Types/SignUp";
import { AntButton, FormWrapper } from "../style";
import EmailContainer from "./EmailContainer";
import NameContainer from "./NameContainer";
import PasswordContainer from "./PasswordContainer";
import PhoneNoContainer from "./PhoneNoContainer";
import { CaretRightOutlined } from "@ant-design/icons";

const SignUpForm: React.FC = () => {

    const methods = useForm<IFormValues>();

    const { handleSubmit } = methods;
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
                setIsLoadingCountries(false)
            });
    }, []);

    const onSubmit = (formData: IFormValues) => {
        console.log(window.location.pathname);
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
                        <a href="">Sign-In <CaretRightOutlined /></a>
                    </div>
                </form>
            </FormProvider>
        </FormWrapper>
    );
};

export default SignUpForm;