
import { useContext, useEffect } from "react";

import './SelectPlan.css';
import { UserContext } from "./UserContext";
import {planOptions} from './constants'

const SelectPlan = () => {
    const {userDetails, setUserDetails ,setValidationError} = useContext(UserContext)
    const isYearly = userDetails.planChoice.billingCycle === 'yearly';

    const choosePlan = (planid:number) => {
        setUserDetails((prev)=>{
       return  {...prev, planChoice: {...prev.planChoice,planID:planid}}
    })
    }

    const handleBillingCycle = (e:React.ChangeEvent<HTMLInputElement>): void=>{
        setUserDetails((prev)=>{
            return {...prev,planChoice:{...prev.planChoice,billingCycle:e.target.checked?'yearly':'monthly'}}
        })
    }

    useEffect(()=>{
        setValidationError(prev=>({...prev,planChoice: (userDetails.planChoice.planID==0)}))
        
    },[userDetails.planChoice])

    return (
        <div className="mainplan">
            <div className='selectplan'>
                <div>Select your Plan</div>
                <div>You have the option of monthly or yearly billing.</div>
                
            </div>
            <div className='planoptions'>
              
              {planOptions.map(p=>{
                return <div className={userDetails.planChoice.planID==p.id?"selected":""} tabIndex={p.id} key={p.id}
                onClick={()=>choosePlan(p.id)}> 
                            <img src={p.pimg}/>
                            <span>{p.name}</span>
                            <span>${isYearly ? `${p.yprice}/yr`: `${p.mprice}/mo`}</span> 
                            <span className={isYearly?"show":""}>{p.free}</span>
                </div>
            })}

            </div>

              <div className='toggle'>
               <p className={isYearly?"toggle":"toggleSelected"}> Monthly </p>
                <div className='switch'>
                    <input className='checkbox' type='checkbox' checked={isYearly} id="plan" onChange={e=>handleBillingCycle(e)}/>
                    <label className='label' htmlFor='plan' />
                </div>
               <p className={isYearly?"toggleSelected":"toggle"}> Yearly</p>
              </div>
        </div>
    )
}

export default SelectPlan