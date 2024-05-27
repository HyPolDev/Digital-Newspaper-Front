import { useEffect, useState } from "react"
import { editProfileCall, getAllUsers } from "../../services/apiCalls"
import { userData } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { UserPanel } from "../../common/UserPanel/UserPanel";
import { RoleSelector } from "../../common/RoleSelector/RoleSelector";

export const AdminPanel = () => {

    const rdxUser = useSelector(userData);
    const dispatch = useDispatch();

    const token = rdxUser.credentials.token

    const [Data, setData] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            const Users = await getAllUsers(rdxUser.credentials.token)

            setData({
                users: Users.data
            })

        }
        fetchData()

    }, [])

    const [profileEdited, setProfileEditet] = useState({})

    const inputHandler = (e) => {
        //genero la función que bindea
        setProfileEditet((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

    };

    const submitEdit = async () => {
        const userName = localStorage.getItem("userNameEdited")

        const response = await editProfileCall(token, userName, profileEdited)
        window.location.reload()
    }

    return (
        <>
            <div className="form centre" id="edit" style={{ position: "relative", height: 0, visibility: "hidden" }}>
                <input type="text" name="userName" placeholder="User Name" onChange={(e) => inputHandler(e)} />
                <br />
                <input type="email" name="email" placeholder="User Email" onChange={(e) => inputHandler(e)} />
                <br />
                <input type="text" name="realName" placeholder="Real Name" onChange={(e) => inputHandler(e)} />
                <br />
                <RoleSelector />
                <div>Re log in to see the changes</div>
                <button onClick={submitEdit}>Submit</button>
                <div id="error"></div>

            </div>
            {Data?.users?.map((item) => {
                return (
                    <>

                        <UserPanel
                            key={item._id}
                            profile={item}
                        ></UserPanel>

                    </>
                )
            })}
        </>
    )
}