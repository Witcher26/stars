import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import './styles.css';

interface IErrorProps {
    error: string | null;
}

const ErrorFallback: React.FC<IErrorProps> = ({ error }) => {
    if (!error) {
        return null;
    }

    return (
        <div className="error-boundary">
            <p className="error-boundary__title">
                Что-то пошло не так...
                <div className="error-boundary__error">
                    {error}
                </div>
            </p>
        </div>
    );
};

interface IChildrenProps {
    children: JSX.Element | JSX.Element[];
}

const ErrorBoundaryHandler: React.FC<IChildrenProps> = ({ children }) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            {children}
        </ErrorBoundary>
    );
};

export default ErrorBoundaryHandler;