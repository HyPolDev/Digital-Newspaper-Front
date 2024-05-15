import { useNavigate } from "react-router-dom";
import "./PostFrontPage.css"
export const PostFrontPage = ({ post }) => {

    const navigate = useNavigate()

    const navigatePost = () => {
        const postObj = JSON.stringify(post)
        localStorage.setItem("post", postObj)
        navigate(`/post/${post._id}`)
    }

    const extractImageSrcFromHTML = (htmlString) => {
        // Create a temporary DOM element to parse the HTML string
        const tempElement = document.createElement('div');
        tempElement.innerHTML = htmlString;

        // Find the img element and extract its src attribute
        const imgElement = tempElement.querySelector('img');
        if (imgElement) {
            return imgElement.src;
        } else {
            return ''; // Return empty string if no image found
        }
    }
    const imgSrc = extractImageSrcFromHTML(post.content)

    return (
        <>


            <div className="row-12 front-post" onClick={navigatePost} style={{ backgroundImage: `url(${imgSrc})` }}>

                {post.title}
            </div>
        </>
    )
}