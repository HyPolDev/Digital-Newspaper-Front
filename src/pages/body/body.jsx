import "../../common/header/header.css"
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { Header } from "../../common/header/header";
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../app/slices/userSlice";
import { useEffect } from "react";
import { About } from "../About/About";
import { Login } from "../Login/Login";
import { Publish } from "../Publish/Publish";
import { Details } from "../Details/Details";
import { Footer } from "../../common/footer/footer";
import { Profile } from "../Profile/Profile";
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { PostTypesPanel } from "../PostTypesPanel/PostTypesPanel";

export const Body = () => {

    const rdxUser = useSelector(userData);
    const dispatch = useDispatch();

    useEffect(() => {

    }, [rdxUser]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="*" element={<Navigate to={"/"} replace />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/auth" element={<Login />} />
                <Route path="/publish" element={<Publish />} />
                <Route path="/post/types" element={<PostTypesPanel />} />
                <Route path="/post/:id" element={<Details />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/adminpanel" element={<AdminPanel />} />
            </Routes>
            <Footer />
        </>
    );
};
