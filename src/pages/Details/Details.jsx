

export const Details = () => {

    const postStr = localStorage.getItem("post")
    const post = JSON.parse(postStr)

    return (
        <>
            <p>{post.title}</p>
            <p>{post.subTitle}</p>
            <p>{post.author}</p>
        </>
    )
}