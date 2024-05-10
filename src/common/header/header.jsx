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
            <div className="row-12 header-design">
                <div className="col-3"></div>
                <div className="col-6">hello from above</div>
                <div className="col-3"></div>
            </div>
            <div className="row-12 header-design">
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

                <div className="col-2"><div class="dropdown">
                    <div class="dropbtn flex">
                        <CLink path="/" title="Secciones" /> <i class="uil uil-angle-down"></i>
                    </div>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                </div>

                <div className="col-2"><div class="dropdown">
                    <div class="dropbtn flex">
                        <CLink path="/" title="Regiones" /> <i class="uil uil-angle-down"></i>
                    </div>
                    <div class="dropdown-content">
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
