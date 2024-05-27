import { useDispatch, useSelector } from "react-redux";
import { deleteProfileCall } from "../../services/apiCalls";
import "./UserPanel.css"
import { userData } from "../../app/slices/userSlice";
export const UserPanel = ({ profile }) => {

    const form = document.getElementById("edit")

    const toggleEdit = () => {
        form.style.visibility == "hidden" ?
            (form.style.visibility = "visible",
                form.style.height = "auto") :
            (form.style.visibility = "hidden",
                form.style.height = "0");
        localStorage.setItem("userNameEdited", profile.userName)

    }

    const deleteVisuals = () => {
        const div = document.getElementById(profile.userName)
        div.style.color = "red"
    }

    const rdxUser = useSelector(userData);
    const dispatch = useDispatch();

    const token = rdxUser.credentials.token

    return (
        <>
            <div className="row-12 centre flex" id={`${profile.userName}`} style={{ color: "black" }}>

                <div className="col-2">
                    {profile.userName}
                </div>
                <div className="col-2">
                    {profile.email}
                </div>
                <div className="col-2">
                    {profile.role}
                </div>

                <div className="col-2 "><div className="dropdown">
                    <div className="dropbtn flex">
                        <i className="uil uil-edit"></i>
                    </div>
                    <div className="dropdown-content">
                        <a href="#" onClick={toggleEdit}>Edit Profile</a>
                        <a href="#" onClick={async () => {
                            const response = await deleteProfileCall(token, profile.userName)
                            deleteVisuals()
                            if (response.success) {
                                setTimeout(() => {
                                }, 500)
                            }
                            else {
                                const div = document.getElementById("error")
                                div.innerHTML = "Cound not delete account please try later"
                            }
                        }}>Eliminate Account</a>
                    </div>
                </div>
                </div>

            </div>
        </>
    )
}