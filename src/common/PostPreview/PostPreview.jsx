import { useNavigate } from "react-router-dom";

export const PostPreview = ({ post }) => {

    const navigate = useNavigate()

    const navigatePost = () => {
        const postObj = JSON.stringify(post)
        navigate(`/post/${post._id}`)
    }

    return (
        <>
            <div className="row-12" onClick={navigatePost} style={{ width: "18rem", marginBottom: "1em", marginTop: "2em" }}>
                {post.title}
            </div>
        </>
    )
}