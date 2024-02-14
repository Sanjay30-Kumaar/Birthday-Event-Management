import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import axios from "axios";
import Addon_View_Card from "./View_Addon_card";
import Nav_Bar from "./Nav_Bar";

function View_Addons() {
  const user = useSelector(selectUser);
  useEffect(() => {
    const response = axios.get("http://localhost:8080/admin/get-all-addons").then(
      (res) => {
        setCardContent(res.data);
      }
    );
  }, [user.email, user.token]);


  const [cardContent, setCardContent] = useState([
    
  ]);
  
  return (
    
        <>
          <Nav_Bar/>
          <br/>
          <br/>
          <br/>
          <br/>
          
          <div className="flex-box-card" style={{ color: "#d0d0d0" }}>
            {cardContent &&
              cardContent.map((card, index) => (
                <>
                  <Addon_View_Card key={index} cardContent={card} index={index} />
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
          
          <Footer />
        </>
      )}


export default View_Addons;
