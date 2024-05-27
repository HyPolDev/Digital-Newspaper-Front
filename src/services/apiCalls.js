import { useDispatch, useSelector } from "react-redux";
import { logout, userData } from "../app/slices/userSlice"

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

export const loginCall = async (user) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    };

    try {
        const response = await fetch(`${root}/login`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        //SI NECESITASE TOKEN
        if (data.message === "Token Error") {
            dispatch(logout({ credentials: "" }))
        }


        return data;
    } catch (error) {
        return error;
    }
};

export const registerCall = async (user) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    };

    try {
        const response = await fetch(`${root}/register`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        //SI NECESITASE TOKEN
        if (data.message === "Token Error") {
            dispatch(logout({ credentials: "" }))
        }

        return data;
    } catch (error) {
        return error;
    }
};

export const createPostCall = async (params, token) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(params)
    };

    try {
        const response = await fetch(`${root}/posts/create`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        //SI NECESITASE TOKEN
        if (data.message === "Token Error") {
            dispatch(logout({ credentials: "" }))
        }

        return data;
    } catch (error) {
        return error;
    }
}

export const getPost = async (id) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const response = await fetch(`${root}/posts/${id}`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message)
        }
        return data
    } catch (error) {
        return error
    }
}

export const deletePost = async (id, token) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const response = await fetch(`${root}/posts/${id}`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message)
        }
        return data
    } catch (error) {
        return error
    }
}

export const editProfileCall = async (token, userName, body) => {
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    }
    try {
        console.log(body);
        const response = await fetch(`${root}/users/${userName}`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message)
        }
        return data
    } catch (error) {
        return error
    }
}

export const deleteProfileCall = async (token, userName) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const response = await fetch(`${root}/users/${userName}`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message)
        }
        return data
    } catch (error) {
        return error
    }
}