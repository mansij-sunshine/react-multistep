import {type ComponentType } from 'react';

export type stepperCardType = {
    id:number,
    name: ComponentType,
    display:string,
  }
export type stepperPointsType = {
    id: number,
    description: string,
  }

export type userDetailsType = {
    name: string,
    email: string,
    phone: string,
}

export type planOptionsType = {
        id: number,
        name: string,
        pimg: string,
        mprice: number,
        yprice : number,
        free? : string,
    }

export type addonstype = {
        id:number,
        name:string;
        desc: string;
        price: number;

    }

export type userContextType = {
    personalInfo: userDetailsType,
    planChoice: {
        planID: number,
        billingCycle: string,
    },
    addOnChoice: number[],
}

export type userErrorType = {
        name: boolean,
    email: boolean,
    phone: boolean,
}

export type validationErrorType = {
    personalInfo: userErrorType,
    planChoice: boolean,
}