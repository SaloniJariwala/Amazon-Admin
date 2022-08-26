import { Control, UseFormProps } from "react-hook-form";

export interface IMemoisedComponentProps {
    methods: any;
}

export interface IFormValues {
    fullname?: string;
    countryId?: string;
    phoneNo?: string;
    email?: string;
    password?: string;
}

export interface ICountry {
    _id?: number;
    code?: string;
    name?: string;
    phoneCode?: string;
}

export interface IPhoneNoContainerProps extends IMemoisedComponentProps {
    countryData: ICountry[];
    isLoading: boolean;
}