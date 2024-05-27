import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/apiCalls"
import { userData } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { UserPanel } from "../../common/UserPanel/UserPanel";

export const AdminPanel = () => {

    const rdxUser = useSelector(userData);
    const dispatch = useDispatch();

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

    return (
        <>
            {Data?.users?.map((item) => {
                return (
                    <UserPanel
                        key={item._id}
                        profile={item}
                    ></UserPanel>
                )
            })}
        </>
    )
}