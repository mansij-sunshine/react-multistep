import confirm from "../../src/images/Confirmation.svg"
import "./Confirmation.css"

const Confirmation = ()=>{
    return (
        <div className="confirmation">
            <img src={confirm}></img>
            <p>Thank you!</p>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}

export default Confirmation;