const root = "http://localhost:4000";

export const getAllNews = async () => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    };
    try {
        const response = await fetch(`${root}/posts/`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message)
        }
        return data
    } catch (error) {
        return error
    }
}