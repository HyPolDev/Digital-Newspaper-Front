import { useDispatch, useSelector } from "react-redux";
import { deletePostTypesCall, deleteProfileCall } from "../../services/apiCalls";
import { userData } from "../../app/slices/userSlice";
export const PostType = ({ profile }) => {

    const form = document.getElementById("edit")

    const toggleEdit = () => {
        form.style.visibility == "hidden" ?
            (form.style.visibility = "visible",
                form.style.height = "auto") :
            (form.style.visibility = "hidden",
                form.style.height = "0");
        localStorage.setItem("PostTypeNameEdited", profile.name)

    }

    const deleteVisuals = () => {
        const div = document.getElementById(profile.name)
        div.style.color = "red"
    }

    const rdxUser = useSelector(userData);
    const dispatch = useDispatch();

    const token = rdxUser.credentials.token

    return (
        <>
            <div className="row-12 centre flex" id={`${profile.name}`} style={{ color: "black" }}>

                <div className="col-2">
                    {profile.name}
                </div>
                <div className="col-2">
                    {profile.description}
                </div>

                <div className="col-2 "><div className="dropdown">
                    <div className="dropbtn flex">
                        <i className="uil uil-edit"></i>
                    </div>
                    <div className="dropdown-content">
                        <a href="#" onClick={toggleEdit}>Edit PostType</a>
                        <a href="#" onClick={async () => {
                            const response = await deletePostTypesCall(token, profile.name)
                            deleteVisuals()
                            if (response.success) {
                                setTimeout(() => {
                                }, 500)
                            }
                            else {
                                const div = document.getElementById("error")
                                div.innerHTML = "Cound not delete account please try later"
                            }
                        }}>Eliminate PostType</a>
                    </div>
                </div>
                </div>

            </div>
        </>
    )
}