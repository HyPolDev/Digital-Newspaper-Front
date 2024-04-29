import { useNavigate } from "react-router-dom"
import "./Clink.css"

export const CLink = ({ path, title }) => {

    const navigate = useNavigate()

    return (
        <div className="clink-design" onClick={() => navigate(path)}>{title}</div>
    )
}