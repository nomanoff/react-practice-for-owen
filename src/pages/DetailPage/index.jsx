import { useState } from "react";
import DetailPageTemplate from "./template";
import { useParams,useNavigate, Navigate } from "react-router-dom";


const DetailPage = () => {
    const {title} = useParams();
    const navigate = useNavigate();

    const returnToMain = () => {
        navigate("/");
    }

    return (
    <div>
        <DetailPageTemplate text ={title} returnToMain = {returnToMain}/>   
    </div>    
    );
};

export default DetailPage;

