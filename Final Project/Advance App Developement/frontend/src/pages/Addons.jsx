import { useEffect, useState } from "react";


import Footer from "../components/Footer";
import { Button, TextField } from "@mui/material";

import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Add_on_card from "../components/Add-on_card";

function Addons() {
  const [addOn, setAddOn] = useState(false);
  const [addOns, setAddOns] = useState({});
  const user = useSelector(selectUser);
  // const notify = (msg) => toast.success(msg);
  // const notifyError = (msg) => toast.error(msg);
  useEffect(() => {
    const response = axios.get("http://localhost:8080/admin/get-addons/"+user.email).then(
      (res) => {
        setCardContent(res.data);
      }
    );
    console.log(response);
  }, [user.email, user.token]);
  // console.log(cardContent);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:8080/admin/add-addons/"+user.email,addOns);
      console.log(response);
      setAddOn(false);
      console.log(addOns);
      setCardContent((prevCardContent) => [...prevCardContent, addOns]);
    } catch (err) {
      console.log(err);
      
    }
    
  };
  const [cardContent, setCardContent] = useState([
    {
      addonName: "Dj Party",
      addonDescription: "lorem ipsum dolor sit amet, consectetur ",
      addonImageURL:
        "https://img.freepik.com/free-photo/man-being-dj-party-medium-shot_23-2149646087.jpg?w=1060&t=st=1706631694~exp=1706632294~hmac=2f16a251e4a0971dd8265c77e01d7763577da1a0e8bb2079b12dc8264cd17765",
      addonPrice: "100",
      isPublished: true,
    },
    {
      addonName: "Magic Show",
      addonImageURL:
        "https://img.freepik.com/free-photo/front-view-woman-holding-tombola-tickets_23-2149704899.jpg?w=1060&t=st=1706631008~exp=1706631608~hmac=db20ba210b044e539659a3562f3e79a43ea429dda0c44f239e1bceb9a431423f",
      addonDescription: "lorem ipsum dolor sit amet, consectetur ",
      addonPrice: "200",
      isPublished: true,
    },
    {
      addonName: "Music Show",
      addonImageURL:
        "https://img.freepik.com/free-photo/glowing-stage-light-illuminates-cheering-rock-fans-generated-by-ai_188544-37983.jpg?w=1380&t=st=1706631740~exp=1706632340~hmac=4e8b5d5353b1cb64e5df5ef351d4154095b2f5b627edb740494051c171aaca82",
      addonDescription: "lorem ipsum dolor sit amet, consectetur ",
      addonPrice: "300",
      isPublished: true,
    },
    {
      addonName: "Game Show",
      addonImageURL:
        "https://img.freepik.com/free-photo/young-adults-playing-beer-pong_23-2149402815.jpg?w=1060&t=st=1706631386~exp=1706631986~hmac=833deaeece646a8b4904c2b22ab1a165458c354e415f69a98945ad9e1cf0df6a",
      addonDescription: "lorem ipsum dolor sit amet, consectetur ",
      addonPrice: "500",
      isPublished: false,
    },
  ]);
  
  return (
    
        <>
          {/* <ToastContainer /> */}
          
          <div className="flex-box-card" style={{ color: "#d0d0d0" }}>
            {cardContent &&
              cardContent.map((card, index) => (
                <>
                  <Add_on_card key={index} cardContent={card} index={index} />
                </>
              ))}
          </div>
          <div className="button-center">
            <Button
              onClick={() => {
                setAddOn(!addOn);
              }}
              className="button-bg"
              style={{ color: "white" }}
            >
              {" "}
              + Add-ons
            </Button>
          </div>
          {addOn && (
            <>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <h1>Addons</h1>

                <div className="flex-themes">
                  <div className="fields">
                    <TextField
                      value={addOns.addonName}
                      onChange={(e) => {
                        setAddOns({
                          ...addOns,
                          addonName: e.target.value,
                        });
                      }}
                      required
                      type="text"
                      id="addonName"
                      label="Add-on Name"
                      variant="outlined"
                    ></TextField>
                  </div>
                  <div className="fields">
                    <TextField
                      value={addOns.addonImageURL}
                      onChange={(e) => {
                        setAddOns({
                          ...addOns,
                          addonImageURL: e.target.value,
                        });
                      }}
                      required
                      type="text"
                      id="addonImageURL"
                      label="Image Source"
                      variant="outlined"
                    ></TextField>
                  </div>
                  <div className="fields">
                    <TextField
                      value={addOns.addonDescription}
                      onChange={(e) => {
                        setAddOns({
                          ...addOns,
                          addonDescription: e.target.value,
                        });
                      }}
                      required
                      multiline
                      maxRows={4}
                      id="description"
                      label="Add-on description"
                      variant="outlined"
                      //   fullWidth
                    ></TextField>
                  </div>
                  <div className="fields">
                    <TextField
                      value={addOns.addonPrice}
                      onChange={(e) => {
                        setAddOns({
                          ...addOns,
                          addonPrice: e.target.value,
                        });
                      }}
                      required
                      type="text"
                      id="addonPrice"
                      label="Add-on Cost"
                      variant="outlined"
                      //   fullWidth
                    ></TextField>
                  </div>
                  <div>
                   
                      <Button
                        className="button-bg"
                        style={{ color: "white" }}
                        type="submit"
                      >
                        + New Addons
                      </Button>
                  </div>
                </div>
              </form>
            </>
          )}
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Footer />
        </>
      )}
//     </>
//   );
// }

export default Addons;
