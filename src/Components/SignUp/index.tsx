import { SignupWrapper } from "./style";
import HeaderImg from "../../Assets/Images/SigninHeader.png";
import { Divider } from "antd";
import { useForm } from "react-hook-form";
import SignUpForm from "./SignUpForm";

const SignUp: React.FC = () => {

    const { control } = useForm();

    return (
        <SignupWrapper>
            <img
                src={HeaderImg}
                alt="logo"
                className="logo"
            />
            <Divider />
            <SignUpForm control={control} />
            <div className="copyright-info">
                <p>&copy; 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </SignupWrapper>
    );
};

export default SignUp;