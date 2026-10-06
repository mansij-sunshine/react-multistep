
import './App.css'
import { useState} from 'react'
import PickAddOns from './components/PickAddons'
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import Summary from './components/Summary'
import Confirmation from './components/Confirmation'
import {UserContext} from './components/UserContext'
import { Analytics } from "@vercel/analytics/react"

import * as types from './components/types'

function App() {
  const [stepNumber, setStepNumber] = useState(1)

  const stepperPoints : types.stepperPointsType[] = [{
      "id":1,
      "description":"Your Info"
    },
    {
      "id":2,
      "description":"Select Plan"
    },
    {
      "id":3,
      "description":"ADD-ONS",
    },
    {
      "id":4,
      "description":"Summary"
    }]

  const stepperCard : types.stepperCardType[] = [{
    "id":1,
    "name":PersonalInfo,
    "display":"Personal Info"
  },{
    "id":2,
    "name":SelectPlan,
    "display":"Choose your Plan"
  },{
    "id":3,
    "name":PickAddOns,
    "display":"Pick add-ons"
  },{
    "id":4,
    "name": Summary,
    "display":"Summary"
  }
]
const validatePersonalInfo =()=>{
  const errors = {
      name:userDetails.personalInfo.name.length<3,
      email:!(userDetails.personalInfo.email.includes("@")&&userDetails.personalInfo.email.includes(".com")),
      phone:userDetails.personalInfo.phone.length<7,
  }
      setValidationError((prev)=> ({...prev, personalInfo:{...prev.personalInfo, ...errors}}));
      return errors;
  }

const validatePlans=()=>{
  const planError = userDetails.planChoice.planID==0
  setValidationError((prev)=>({...prev, planChoice:planError}));
  return planError;
}

  const hasError = ():boolean =>{
    if (stepNumber==1){
      const errors = validatePersonalInfo();
      
      return Object.values(errors).some(Boolean)
    }
    else if(stepNumber==2)
{
      const errors = validatePlans();
      return errors; 
}      
    return false
  }

  const nextStep = () =>{
    if(stepNumber<5)
      !hasError() && setStepNumber(stepNumber+1)
  
  }
  const previousStep=()=>{
    if(stepNumber>1)
      setStepNumber(stepNumber-1)
  }

const [userDetails, setUserDetails] = useState<types.userContextType>({
                                          personalInfo: { name: '', email: '', phone: '' },
                                          planChoice: { 
                                            planID: 0, 
                                            billingCycle: 'monthly'
                                          },
                                          addOnChoice: []
                                        });
                                        
const [validationError, setValidationError] = useState<types.validationErrorType>({
                                          personalInfo:{
                                            name:false,
                                            email:false,
                                            phone:false
                                          },
                                          planChoice:false
                                        })


  return (
    <UserContext value={{userDetails,setUserDetails, validationError, setValidationError, setStepNumber}}>
    <div className='main'>
        <div className="stepper">

            <div className='mainstepper'>
              {stepperPoints.map(s=>{
                  return <div key={s.id}>
                    <div className= {s.id==stepNumber?"selectedStepper":"unselectedStepper"}>{s.id}</div>
                    <div className='step'>
                      <p>Step {s.id}</p>
                      <p>{s.description}</p>
                    </div>
                  </div>
                })}

            </div>
            <div className='secondstepper'>
              
            {stepperCard.map((s)=>{
              if(s.id==stepNumber)
                return <div className='options' key={s.id}><s.name /></div>
              })}
              {stepNumber==5 && <div className='confirmwrapper'><Confirmation/></div>}
            

            {stepNumber<5 &&
              <div className='nav'>
                <a className={`back ${stepNumber>1?"show":""}`} onClick={()=>previousStep()}>Go Back</a>
                {stepNumber==4 ? <button className='confirm' onClick={()=>nextStep()}>Confirm</button> : <button className='next' onClick={()=>nextStep()}>Next Step</button>}
                </div>
            }

            </div>
                     

            
      </div>
      
     </div>
     <Analytics/>
    </UserContext>


  )
}

export default App