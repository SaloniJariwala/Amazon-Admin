import { SigninWrapper } from "./style";
import HeaderImg from "../../Assets/Images/SigninHeader.png";
import { Divider } from "antd";
import SignInForm from "./SignInForm";

const SignIn: React.FC = () => {
    return (
        <SigninWrapper>
            <img
                src={HeaderImg}
                alt="logo"
                className="logo"
            />
            <SignInForm />
            <Divider />
            <div className="copyright-info">
                <p>&copy; 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </SigninWrapper>
    );
};

export default SignIn;