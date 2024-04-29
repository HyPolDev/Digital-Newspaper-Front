import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData, logout } from "../../app/slices/userSlice";
import { useState, useEffect } from "react";


export const Home = () => {

    return (
        <>
            <div className="col-4">
                Inicio
            </div>
        </>
    )
}