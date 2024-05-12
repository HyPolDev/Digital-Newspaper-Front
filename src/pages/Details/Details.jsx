import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services/apiCalls";


export const Details = () => {

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

    return (
        <div dangerouslySetInnerHTML={createMarkup(data?.post?.content)} />
    );
}