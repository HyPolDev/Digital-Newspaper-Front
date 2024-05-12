import "./header.css"
import { useState } from "react";
import { CLink } from "../Clink/Clink.jsx";
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../app/slices/userSlice";
import { updateCriteria } from "../../app/slices/searchSlice";
import { useEffect } from "react";

export const Header = () => {

    const rdxUser = useSelector(userData);
    const dispatch = useDispatch();

    const role = rdxUser.credentials.decoded?.role

    useEffect(() => {

    }, [rdxUser]);

    return (
        <>
            <div className="row-12 header-design">
                <div className="col-3 mt-2 ">
                    <row-12>
                        <col-2 ><i className="uil uil-instagram"></i></col-2>
                        <col-2 ><i className="uil uil-google-hangouts"></i></col-2>
                        <col-2 ><i className="uil uil-whatsapp"></i></col-2>
                        <col-2 ><i className="uil uil-telegram"></i></col-2>
                        <col-2 ><i className="uil uil-twitter"></i></col-2>
                        <col-2 ><i className="uil uil-youtube"></i></col-2>
                    </row-12>
                </div>
                <div className="col-6">
                    <div className="row-6 title">
                        <div className="col-2">
                            <img src="../../../public/ico.svg" alt="" className="ico" />
                        </div>
                        <div className="col-4 head">
                            DE PODER <br /> <div className="second-line"> EQUILIBRIO</div>
                        </div>
                    </div>
                </div>
                <div className="col-3 left-col"></div>
            </div>
            <div className="row-12 header-design header">
                <div className="col-2">
                    {role ? (
                        <div
                            className="out-design"
                            onClick={() => dispatch(logout({ credentials: "" }))}
                            style={{ cursor: "pointer" }}
                        >
                            log out
                        </div>
                    ) : ""
                    }
                </div>
                <div className="col-2"><CLink path="/" title="Inicio" /></div>

                <div className="col-2"><div className="dropdown">
                    <div className="dropbtn flex">
                        <CLink path="/" title="Secciones" /> <i className="uil uil-angle-down"></i>
                    </div>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                </div>

                <div className="col-2"><div className="dropdown">
                    <div className="dropbtn flex">
                        <CLink path="/" title="Regiones" /> <i className="uil uil-angle-down"></i>
                    </div>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                </div>

                <div className="col-2"><CLink path="/about" title="Nosotros" /></div>

                {console.log("REDUX CLG", rdxUser)}
                {role == "admin" || role == "writer" || role == "superadmin" ?
                    <div id="col-2"><CLink path="/publish" title="Publica" /></div>
                    : <div className="col-2"></div>}
            </div>
        </>
    );
};
