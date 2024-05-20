import { useDispatch, useSelector } from "react-redux";
import "./Profile.css"
import { userData } from "../../app/slices/userSlice";
import { useEffect, useState } from "react";
import { editProfileCall } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export const Profile = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState(null)

    const [profileEdited, setProfileEditet] = useState({})

    const inputHandler = (e) => {
        //genero la función que bindea

        setProfileEditet((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

    };

    useEffect(() => {
        // Wait until the component is mounted and the DOM is available
        setForm(document.getElementById('edit'));
        if (form) {
            // Perform actions with the element

        } else {
            console.error('Element not found');
        }
    }, []);

    const rdxUser = useSelector(userData);
    const dispatch = useDispatch();

    const toggleEdit = () => {
        form.style.visibility == "hidden" ?
            (form.style.visibility = "visible",
                form.style.height = "auto") :
            (form.style.visibility = "hidden",
                form.style.height = "0")
    }

    const submitEdit = async () => {
        const response = await editProfileCall(rdxUser.credentials.token, rdxUser.credentials.decoded.userName, profileEdited)

        setTimeout(() => {
            navigate("/");
        }, 1000)
    }

    return (
        <>
            <div className="row-12">
                <div className="col-12 centre">
                    <div className="row-12">USER NAME: {rdxUser?.credentials.decoded.userName}</div>
                    <div className="row-12">REAL NAME: {rdxUser?.credentials.decoded.realName}</div>
                    <div className="col-2 "><div className="dropdown">
                        <div className="dropbtn flex">
                            <i className="uil uil-edit"></i>
                        </div>
                        <div className="dropdown-content">
                            <a href="#" onClick={toggleEdit}>Edit Profile</a>
                            <a href="#">Eliminate Account</a>
                        </div>
                    </div>
                    </div>

                    <div className="form centre" id="edit" style={{ position: "relative", height: 0, visibility: "hidden" }}>
                        <input type="text" name="userName" placeholder="User Name" onChange={(e) => inputHandler(e)} />
                        <br />
                        <input type="text" name="realName" placeholder="Real Name" onChange={(e) => inputHandler(e)} />
                        <br />
                        <button onClick={submitEdit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}