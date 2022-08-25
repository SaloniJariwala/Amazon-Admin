import { SigninWrapper } from "./style";
import HeaderImg from "../../Assets/Images/SigninHeader.png";
import Form from "./Form";
import { Divider } from "antd";

const SignIn: React.FC = () => {
    return (
        <SigninWrapper>
            <img
                src={HeaderImg}
                alt="logo"
                className="logo"
            />
            <Form />
            <Divider />
            <div className="copyright-info">
                <p>&copy; 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </SigninWrapper>
    );
};

export default SignIn;