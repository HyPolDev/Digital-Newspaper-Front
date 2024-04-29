import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData, logout } from "../../app/slices/userSlice";
import { useState, useEffect } from "react";
import { getAllNews } from "../../services/apiCalls";


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
            {console.log(Data)}
            <div className="col-4">
                Inicio
            </div>
        </>
    )
}