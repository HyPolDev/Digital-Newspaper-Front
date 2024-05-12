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
                    <row-12>
                        <col-9 front-page>
                            {Data?.posts?.length > 0 && <PostFrontPage post={Data.posts[0]} />}
                        </col-9>
                        <col-5>
                            {
                                Data?.posts?.slice(1, 5).map((item) => {
                                    return (
                                        <PostPreview
                                            key={item._id}
                                            post={item}
                                        ></PostPreview>
                                    )
                                })
                            }
                        </col-5>
                    </row-12>
                </div>
                <div className="col-3 sidebar"></div>
            </div>
        </>
    )
}