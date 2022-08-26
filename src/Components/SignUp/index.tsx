import { SignupWrapper } from "./style";
import HeaderImg from "../../Assets/Images/SigninHeader.png";
import { Divider } from "antd";
import SignUpForm from "./SignUpForm";

const SignUp: React.FC = () => {

    return (
        <SignupWrapper>
            <img
                src={HeaderImg}
                alt="logo"
                className="logo"
            />
            <SignUpForm />
            <Divider />
            <div className="copyright-info">
                <p>&copy; 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </SignupWrapper>
    );
};

export default SignUp;