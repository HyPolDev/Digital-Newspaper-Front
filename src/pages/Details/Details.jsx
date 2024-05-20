import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, getPost } from "../../services/apiCalls";
import "./Details.css"
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../app/slices/userSlice";
import { CLink } from "../../common/Clink/Clink";

export const Details = () => {

    const rdxUser = useSelector(userData);
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const role = rdxUser.credentials.decoded?.role

    const [data, setData] = useState(null)

    let { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {

            const { post } = await getPost(id)

            setData({ post })
        }
        fetchData()
    }, []);

    // Function to create the HTML element from the string
    const createMarkup = (htmlString) => {
        return { __html: htmlString };
    };

    const deletePostFunct = async () => {
        await deletePost(id, rdxUser.credentials.token)
        setTimeout(() => {
            navigate("/")
        }, 500)
    }

    const navigateEdit = async () => {

        localStorage.setItem("content", data.post.content)

        setTimeout(() => {
            navigate("/publish")
        }, 500)
    }

    return (
        <>
            <div>{data?.post?.title}</div>
            <div dangerouslySetInnerHTML={createMarkup(data?.post?.content)} className="details" />
            {role == "admin" || role == "writer" || role == "superadmin" ? (
                <div className="col-2" style={{ position: "relative", left: "50vw", display: "inline-block" }}><div className="dropdown">
                    <div className="dropbtn flex">
                        <i className="uil uil-bars"></i>
                    </div>
                    <div className="dropdown-content">
                        <a href="#" onClick={deletePostFunct}>Eliminar noticia</a>
                        <a href="#" onClick={navigateEdit}>Editar noticia</a>
                    </div>
                </div>
                </div>
            ) : ""}
        </>
    );
}