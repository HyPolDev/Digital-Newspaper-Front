import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./Publish.css";
import { CInput } from "../../common/CInput/CInput";
import { createPostCall } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../../app/slices/userSlice";
import { RegionSelector } from "../../common/RegionSelector/RegionSelector";
import { TypeSelector } from "../../common/TypeSelector/TypeSelector";
import { RelevanceSelector } from "../../common/RelevanceSelector/RelevanceSelector";

export const Publish = () => {

    const navigate = useNavigate()

    const rdxUser = useSelector(userData);

    const [postInfo, setPostInfo] = useState({
        content: localStorage.getItem("content")
    });

    const inputHandler = (e) => {
        //genero la función que bindea

        setPostInfo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

    };

    const ondescription = (value) => {
        setPostInfo({
            ...postInfo,
            content: value
        });
    }


    const [isError, setError] = useState(null);

    const addDetails = async (event) => {
        try {
            event.preventDefault();
            event.persist();
            if (postInfo.content.length < 50) {
                setError('Required, Add description minimum length 50 characters');
                return;
            }
        } catch (error) { throw error; }
    }

    const submit = async () => {

        setPostInfo((prevState) => ({
            ...prevState,
            region: localStorage.getItem('region'),
            type: localStorage.getItem('type'),
            relevance: localStorage.getItem('relevance'),

        }));
        console.log(postInfo)

        const response = await createPostCall(postInfo, rdxUser.credentials.token)
        console.log(response);
        if (response?.success) {
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } else {
            console.log("couldnt create post");
        }

    }

    return (
        <>
            <div className="App">
                <div className="container">
                    <div className="row margintop">
                        <form onSubmit={addDetails} className="update__forms">
                            <div className="form-row center">
                                <div className="form-group col-md-12 center">
                                    <CInput
                                        typeProp={"title"}
                                        nameProp={"title"}
                                        handlerProp={(e) => inputHandler(e)}
                                        placeholderProp={"Title"}
                                    />
                                    <br />
                                    <CInput
                                        typeProp={"subTitle"}
                                        nameProp={"subTitle"}
                                        handlerProp={(e) => inputHandler(e)}
                                        placeholderProp={"Sub Title"}
                                    />
                                    <br />

                                    <TypeSelector />

                                    <br />

                                    <RelevanceSelector />

                                    <br />

                                    <RegionSelector />

                                </div>
                                <div className="clearfix"></div>
                                <div className="form-group col-md-12 editor group">
                                    <EditorToolbar toolbarId={'t1'} />
                                    <ReactQuill
                                        theme="snow"
                                        value={postInfo.content}
                                        onChange={ondescription}
                                        placeholder={"Write something awesome..."}
                                        modules={modules('t1')}
                                        formats={formats}
                                    />
                                </div>
                                {isError !== null && <div className="errors"> {isError} </div>}
                                <div className="form-group col-sm-12 text-right">
                                    <button type="submit" className="btn btn__theme" onClick={submit}> Submit  </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}