import {createContext} from 'react';
import type { userContextType, validationErrorType } from '../components/types';

interface userInterfaceType {
    userDetails: userContextType;
    setUserDetails: React.Dispatch<React.SetStateAction<userContextType>>;
    validationError: validationErrorType;
    setValidationError: React.Dispatch<React.SetStateAction<validationErrorType>>;
    setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}
export const UserContext = createContext({} as userInterfaceType);