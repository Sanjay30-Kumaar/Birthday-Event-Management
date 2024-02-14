import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import axios from "axios";
import Food_View_Card from "./View_Food_card";
import Nav_Bar from "./Nav_Bar";

function View_Food() {
  
  const user = useSelector(selectUser);

  useEffect(() => {
    const response = axios.get("http://localhost:8080/admin/get-all-foods").then(
      (res) =>
      setCardContent(res.data)
      );
      console.log(cardContent);
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
                  <Food_View_Card key={index} cardContent={card} index={index} />
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


export default View_Food;
