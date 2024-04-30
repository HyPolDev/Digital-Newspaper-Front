import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./Publish.css";
import { CInput } from "../../common/CInput/CInput";

export const Publish = () => {

    const [postInfo, setPostInfo] = useState({
        title: '',
        description: '',
        content: ''
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
            console.log(postInfo);
        } catch (error) { throw error; }
    }

    return (
        <>
            <div className="App">
                <div className="container">
                    <div className="row margintop">
                        <form onSubmit={addDetails} className="update__forms">
                            <div className="form-row center">
                                <div className="form-group col-md-12">
                                    <CInput
                                        typeProp={"title"}
                                        nameProp={"subTitle"}
                                        handlerProp={(e) => inputHandler(e)}
                                        placeholderProp={"Title"}
                                    />
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
                                    <button type="submit" className="btn btn__theme"> Submit  </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}