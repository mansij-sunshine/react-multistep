import { useState, useContext } from "react";
import "./PickAddons.css"

import type {addonstype} from './types'
import {AddOns} from './constants'
import { UserContext } from "./UserContext";

const PickAddOns = () =>{
    const {userDetails, setUserDetails} = useContext(UserContext)

    const addons = userDetails.addOnChoice

    const handleAddon= (addonid: number)=>{
        setUserDetails(
            (prev)=>
            {   
                if(prev.addOnChoice.some(p=>p==addonid)){
                    return {...prev, addOnChoice: prev.addOnChoice.filter(p=>p!==addonid)}
                }
                else{
                    return  {...prev, addOnChoice: [...prev.addOnChoice, addonid]}
                }
            }
        )
    }

    return (
        <div>
            <div className="title">
                <p>Pick your Addons</p>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="addons">
                
                    {AddOns.map(addon=>{
                        return <div key={addon.id} className={`addonOptions ${addons.some(a=>a==addon.id)?" selected":""}`} tabIndex={addon.id}>
                            <input type="checkbox" checked={(userDetails.addOnChoice.some(a=>a==addon.id))} onChange={()=>handleAddon(addon.id)}></input>
                            <div>
                                <p>{addon.name}</p>
                                <p>{addon.desc}</p>
                            </div>
                            <span>+${addon.price}/yr</span>
                        </div>
                    })}
                

            </div>
        </div>
    )
}

export default PickAddOns