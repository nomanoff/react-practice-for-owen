import styled from "styled-components";
import Background from "../../../components/Background";
import ReturnButton from "./ReturnButton";

const Alltext = styled.div`
font-size: 40px;
background: #A5DF00;
width: 80%;
margin-left: 10%;
font-weight: 600;
padding: 30px;
text-align: left;
`

const DetailPageTemplate = ({text, returnToMain}) => {
    return (
      <Background>
        <h1>The Detail</h1>
        <Alltext>{text}</Alltext>
        <ReturnButton returnToMain = {returnToMain}></ReturnButton>
      </Background>
    );
  };
  
  export default DetailPageTemplate;