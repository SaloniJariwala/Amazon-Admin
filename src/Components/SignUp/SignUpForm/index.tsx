import { IMemoisedComponentProps } from "../../../Types/SignUp";
import { FormWrapper } from "../style";
import NameContainer from "./NameContainer";

const SignUpForm: React.FC<IMemoisedComponentProps> = ({
    control,
}) => {
    return (
        <FormWrapper>
            <h1>Create Account</h1>
            <NameContainer control={control} />
        </FormWrapper>
    );
};

export default SignUpForm;