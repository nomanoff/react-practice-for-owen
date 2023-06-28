import { useState } from "react";
import DetailPageTemplate from "./template";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const {title} = useParams();
    return (
    <div>
        <DetailPageTemplate text ={title}/>   
    </div>    
    );
};

export default DetailPage;

