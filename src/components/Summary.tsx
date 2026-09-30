import { useContext } from "react";
import { UserContext } from "./UserContext";
import { planOptions, AddOns } from "./constants";
import './Summary.css'

const Summary = () =>{
    const {userDetails, setStepNumber} = useContext(UserContext)
    const isYearly = userDetails.planChoice.billingCycle === 'yearly';
    const selectedPlan = planOptions.find((plan)=> plan.id === userDetails.planChoice.planID)

    if (!selectedPlan) {
        return <div>No plan selected.</div>;
    }
    const planPrice = selectedPlan? (isYearly?selectedPlan.yprice:selectedPlan.mprice):0;

    const selectedAddOns= AddOns.filter((addon)=>userDetails.addOnChoice.includes(addon.id))
    console.log('selected addons',selectedAddOns)
    const addonPrice = selectedAddOns.reduce((sum, current)=>{
        const aprice = current.price;
        return sum + aprice;
    },0)

  

    const total = planPrice + addonPrice;

    return(
        <div>
            <div className="title">
                <p>Finishing up</p>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div className="summary">
                 <div className="plan">
                   <p> {selectedPlan.name}({isYearly?"Yearly":"Monthly"})</p>
                  <p>${planPrice}{isYearly?"/yr":"/mo"}</p>
                  <a href="#" onClick={(e)=>{e.preventDefault(); setStepNumber(2)}}>Change</a>
                  <hr aria-hidden/>
                  <div>{selectedAddOns.map(addon=><div className="addonslist" key={addon.id}><span>{addon.name}</span><span>+${addon.price}{isYearly?"/yr":"/mo"}</span></div>)}</div>
                 </div>
                   <div className="totalamount">
                        <span>Total(per {isYearly?"year":"month"})</span>
                        <span> +${total}{isYearly?"/yr":"/mo"}</span>
                    </div>
            </div>
        </div>
    )

}

export default Summary;