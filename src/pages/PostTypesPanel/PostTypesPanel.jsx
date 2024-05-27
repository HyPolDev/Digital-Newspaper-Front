import { useEffect, useState } from "react"
import { createPostTypeCall, editProfileCall, getAllUsers, getPostTypesCall, updatePostTypesCall } from "../../services/apiCalls"
import { userData } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RoleSelector } from "../../common/RoleSelector/RoleSelector";
import { PostType } from "../../common/PostType/PostType";

export const PostTypesPanel = () => {

    const rdxUser = useSelector(userData);
    const dispatch = useDispatch();

    const token = rdxUser.credentials.token

    const [Data, setData] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            const PostTypes = await getPostTypesCall(rdxUser.credentials.token)

            setData({
                postTypes: PostTypes.posts
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
        const name = localStorage.getItem("postTypeNameEdited")

        const response = await updatePostTypesCall(token, name, profileEdited)
        window.location.reload()
    }

    const submitNewPost = async () => {
        const response = await createPostTypeCall(profileEdited, token)
        window.location.reload()
    }
    return (
        <>
            <h4>Create a Post Type</h4>
            <div className="center">
                <input type="" name="name" placeholder="Type Name" onChange={(e) => inputHandler(e)} />
                <br />
                <input type="text" name="description" placeholder="Description" onChange={(e) => inputHandler(e)} />
                <br />
                <button onClick={submitNewPost}>Submit</button>
                <div id="error"></div>
            </div>

            <h4>Edit Post Type</h4>
            <div className="form centre" id="edit" style={{ position: "relative", height: 0, visibility: "hidden" }}>
                <input type="text" name="name" placeholder="Type Name" onChange={(e) => inputHandler(e)} />
                <br />
                <input type="text" name="description" placeholder="Description" onChange={(e) => inputHandler(e)} />
                <br />
                <button onClick={submitEdit}>Submit</button>
                <div id="error"></div>

            </div>
            {Data?.postTypes?.map((item) => {
                return (
                    <PostType key={item._id} profile={item} />
                )
            })}
        </>
    )
}