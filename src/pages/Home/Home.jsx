import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData, logout } from "../../app/slices/userSlice";
import { useState, useEffect } from "react";
import { getAllNews } from "../../services/apiCalls";
import { PostPreview } from "../../common/PostPreview/PostPreview";
import "./Home.css"
import { PostFrontPage } from "../../common/PostFrontPage/PostFrontPage";


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
            <div className="row-12 home-body">
                <div className="col-3 sidebar"></div>
                <div className="col-6 home-content">
                    <div className="row-12" style={{ display: "flex" }}>
                        <div className="col-9 front-page">
                            {Data?.posts?.length > 0 && <PostFrontPage post={Data.posts[Data.posts.length - 1]} />}
                        </div>
                        <div className="col-5" style={{ marginLeft: "-3em", width: "30rem" }} >
                            {
                                Data?.posts?.slice(1, 7).map((item) => {
                                    return (
                                        <PostPreview
                                            key={item._id}
                                            post={item}
                                        ></PostPreview>
                                    )
                                })
                            }
                        </div>
                        <div className="row-12">
                        </div>
                        <div className="col-3 sidebar"></div>
                    </div>
                </div>
            </div>

        </>
    )
}