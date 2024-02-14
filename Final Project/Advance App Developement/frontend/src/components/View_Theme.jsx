import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Button, TextField } from "@mui/material";
import Theme_Card from "../components/Theme_card";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

import axios from "axios";
import Theme_View_Card from "./View_Theme_card";
import Nav_Bar from "./Nav_Bar";

function View_themes() {
  const user = useSelector(selectUser);

  useEffect(() => {
    const response = axios.get("http://localhost:8080/admin/get-all-themes").then(
      (res) => {
        setCardContent(res.data);
      }
    );
    console.log(response);
  }, [user.email, user.token]);

 


  const [cardContent, setCardContent] = useState([
   
  ]);
 
  return (
  
     
        <>
        <Nav_Bar/>
        <br/>
        <br/>
        <br/>
          <div className="flex-box-card">
            {cardContent &&
              cardContent.map((card, index) => (
                <>
                  <Theme_View_Card key={index} cardContent={card} index={index} />
                </>
              ))}
          </div>
          
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
          <Footer />
        </>
      )}
    
 

export default View_themes;
