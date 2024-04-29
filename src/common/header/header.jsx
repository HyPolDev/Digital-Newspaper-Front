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

    useEffect(() => {

    }, [rdxUser]);

    const [criteria, setCriteria] = useState("");

    const searchHandler = (e) => {
        setCriteria(e.target.value);
    };

    useEffect(() => {
        const searching = setTimeout(() => {
            dispatch(updateCriteria(criteria));
        }, 375);

        return () => clearTimeout(searching);
    }, [criteria]);

    return (
        <>
            <div className="col-2"></div>
            <div id="col-2"><CLink path="/" title="Inicio" /></div>
            <div id="col-2"><CLink path="/" title="Secciones" /></div>
            <div id="col-2"><CLink path="/" title="Regiones" /></div>
            <div id="col-2"><CLink path="/about" title="Nosotros" /></div>
            <div className="col-2"></div>
        </>
    );
};
