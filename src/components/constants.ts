
import ArcadeImg from "../../src/assets/plan1.svg"
import AdvancedImg from "../../src/assets/plan2.svg"
import ProImg from "../../src/assets/plan3.svg"
import type { planOptionsType, addonstype } from "./types";

export const planOptions : planOptionsType[] = [{
        id:1,
        name:"Arcade",
        pimg: ArcadeImg,
        mprice: 9,
        yprice: 90,
        free: "2 months free"
    },
{   
        id:2,
        name:"Advanced",
        pimg: AdvancedImg,
        mprice: 12,
        yprice: 120,
        free: "2 months free"
    },{
        id:3,
        name:"Pro",
        pimg: ProImg,
        mprice: 15,
        yprice: 150,
        free: "2 months free"
    },
] 


export const AddOns : addonstype[] = [{
        id:1,
        name: "Online Service",
        desc:"Access to multiplayer games",
        price: 10,
    },{
        id:2,
        name: "Larger Storage",
        desc:"Extra 1TB of cloud save",
        price: 20,
    },{
        id:3,
        name: "Customizable Profile",
        desc:"Custom theme on your profile",
        price: 20,
    }]