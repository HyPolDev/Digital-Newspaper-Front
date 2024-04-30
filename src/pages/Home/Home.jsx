import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData, logout } from "../../app/slices/userSlice";
import { useState, useEffect } from "react";
import { getAllNews } from "../../services/apiCalls";
import { PostPreview } from "../../common/PostPreview/PostPreview";


export const Home = () => {

    const [Data, setData] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            const Posts = await getAllNews()

            setData({
                posts: Posts.posts
            })

        }
        fetchData()

    }, [])

    return (
        <>
            <div className="col-4">
                Inicio

                {
                    Data?.posts?.map((item) => {
                        return (
                            <PostPreview
                                key={item._id}
                                post={item}
                            ></PostPreview>
                        )
                    })
                }

            </div>
        </>
    )
}