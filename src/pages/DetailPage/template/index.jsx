import styled from "styled-components";
import Background from "../../../components/atoms/Background";
import ReturnButton from "../../../components/atoms/ReturnButton";

const Alltext = styled.div`
font-size: 40px;
background: #E6E6E6;
width: 80%;
margin-left: 10%;
font-weight: 600;
padding: 30px;
text-align: left;
word-break: break-all;
border-radius: 30px;
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