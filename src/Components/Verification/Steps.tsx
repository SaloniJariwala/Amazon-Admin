import React, {useState} from "react";
import { ReactComponent as Login } from "../../Assets/Logo/Login.svg";
import { Steps } from "antd";

const { Step } = Steps;

const StepsCom: React.FC = () => {

    const [current, setCurrent] = useState<number>(0);

    const steps = [
        {
            title: 'Login',
            content: "Dirst-content",
        },
        {
            title: 'Personal Details',
            content: 'Personal Details'
        },
        {
            title: 'Bank Details',
            content: 'Bank Details',
        }
    ];

    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} style={{ backgroundColor: 'transparent' }} />
                ))}
            </Steps>
        </>
    );
};

export default StepsCom;