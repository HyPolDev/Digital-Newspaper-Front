import "./Cbutton.css"
import "../../pages/Login/Login.css"

export const Cbutton = ({ title, functionEmit, className }) => {

    return (
        <div className={className}
            onClick={functionEmit}
            title={title}>{title}
        </div>
    )
}