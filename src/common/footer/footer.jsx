import "./header.css"
import { useState } from "react";
import { CLink } from "../Clink/Clink.jsx";
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../app/slices/userSlice";
import { updateCriteria } from "../../app/slices/searchSlice";
import { useEffect } from "react";

export const Header = () => {
    //Instancia de conexion a modo lectura
    const rdxUser = useSelector(userData);
    //Instancia de conexion a modo escritura
    const dispatch = useDispatch();

    const role = rdxUser.credentials.decoded?.role

    useEffect(() => {

    }, [rdxUser]);

    return (
        <>
            <div className="row-12 header-design">
                <div id="col-2"><CLink path="/" title="Inicio" /></div>
                <div id="col-2"><CLink path="/" title="Secciones" /></div>
                <div id="col-2"><CLink path="/" title="Regiones" /></div>
                <div id="col-2"><CLink path="/about" title="Nosotros" /></div>
            </div>
        </>
    );
};
