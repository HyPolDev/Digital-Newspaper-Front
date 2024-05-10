import "./footer.css"
import { useState } from "react";
import { CLink } from "../Clink/Clink.jsx";
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../app/slices/userSlice";
import { updateCriteria } from "../../app/slices/searchSlice";
import { useEffect } from "react";

export const Footer = () => {
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
                <div className="col-2">
                    <h3>Sobre Nosotros</h3>
                    <p>
                        Este diario es un sitio web enfocado en examinar y entender la política global. Nos adentramos en temas como enfrentamientos, negociaciones comerciales, procesos electorales, manifestaciones y otros eventos relevantes en el panorama internacional.
                    </p>
                </div>
                <div id="col-2"><CLink path="/auth" title="Eres escritor de este periodico?" /></div>
            </div>
        </>
    );
};
