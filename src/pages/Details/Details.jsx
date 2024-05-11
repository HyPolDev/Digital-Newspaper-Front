

export const Details = () => {

    const postStr = localStorage.getItem("post")
    const post = JSON.parse(postStr)

    // Function to create the HTML element from the string
    const createMarkup = (htmlString) => {
        return { __html: htmlString };
    };

    return (
        <div dangerouslySetInnerHTML={createMarkup(post.content)} />
    );
}