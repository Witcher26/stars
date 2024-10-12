import React from 'react';
import { sessionDataMock } from '../mockData';

interface IUser {
    surname: string;
    login: string;
    name: string;
    middleName: string;
    mobilePhone?: string;
    email: string;
    position: string;
    personnelNumber: string;
}

type TSessionDataMock = {
    user: IUser;
    rights: string[];
};

type TAuthProviderProps = {
    children: (authContext: TSessionDataMock) => React.ReactNode;
};

const sessionData: TSessionDataMock = {
    ...sessionDataMock
};

function AuthProvider({ children }: TAuthProviderProps) {
    return (
        <>
            {children(sessionData)}
        </>
    );
}

export default AuthProvider;