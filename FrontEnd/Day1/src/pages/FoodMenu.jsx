import React from 'react';
import '../assets/css/FoodMenu.css'; 
import Nav_Bar from '../components/Nav_Bar';



const CardList = () => {
  return (
    <>
    <Nav_Bar/>
    <br></br>
    <br></br>
    <h1 className='foodhead'>Food Menu</h1>
    <div className="card-list">
       
      <CardItem
        imageSrc="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D"
        alt="Card Image"
        title="Pizza"
        description="Here are some pizza varieties: Margherita, Pepperoni, Vegetarian, Hawaiian, BBQ Chicken, Meat Lovers, Margarita, Buffalo Chicken, White, Pesto, Supreme, Capricciosa, Quattro Formaggi, Mediterranean, and Taco."
      />
      <CardItem
        imageSrc="https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg"
        alt="Card Image"
        title="Meals"
        description="North Indian Thali, South Indian Breakfast (Idli or Dosa with Sambar and Coconut Chutney), Biryani, Paneer Butter Masala, Chole Bhature, Palak Paneer, Dal Tadka, Tandoori Chicken, Masala Dosa, Rajma Chawal, Aloo Paratha, Butter Chicken, Pani Puri, Samosa Chaat, Dhokla."
      />
      <CardItem
        imageSrc="https://thumbs.dreamstime.com/b/indian-chapati-stack-roti-flat-bread-83341376.jpg"
        alt="Card Image"
        title="Roti"
        description="Plain Roti, Butter Roti, Garlic Roti, Methi Roti, Missi Roti, Aloo Paratha, Gobi Paratha, Onion Paratha, Palak Paratha, Paneer Paratha."
      />
      <CardItem
        imageSrc="https://t4.ftcdn.net/jpg/04/03/73/23/360_F_403732359_edrxlInZnXU0XX8yfVPbeNUtH1hnZAd4.jpg"
        alt="Card Image"
        title="Parota"
        description="Kerala Parotta, Malabar Parotta, Coin Parotta, Ceylon Parotta, and Egg Parotta."
      />
      <CardItem
        imageSrc="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?cs=srgb&dl=pexels-daniel-reche-3616956.jpg&fm=jpg"
        alt="Card Image"
        title="Burger"
        description="Classic Burger, Cheeseburger, Bacon Burger, Veggie Burger, Mushroom Swiss Burger, BBQ Burger, Hawaiian Burger, Chicken Burger, Turkey Burger, Blue Cheese Burger, Jalapeño Burger, Avocado Burger, Teriyaki Burger, Guacamole Burger, Buffalo Chicken Burger."
      />
      <CardItem
        imageSrc="https://t3.ftcdn.net/jpg/01/14/51/60/360_F_114516029_Z2B6FO30AB6ZR3v9WHXjpXmJScaiLtzk.jpg"
        alt="Card Image"
        title="Biriyani"
        description="Chicken Biryani, Vegetable Biryani, Mutton Biryani, Hyderabadi Biryani, Lucknawi Biryani, Kolkata Biryani, Ambur Biryani, Malabar Biryani, Sindhi Biryani, Thalassery Biryani.





        "
      />
    </div>
    </>
  );
};

const CardItem = ({ imageSrc, alt, title, description }) => {
  return (
    <a href="#" className="card-item">
      <img src={imageSrc} alt={alt} />
      <span className={title.toLowerCase()}>{title}</span>
      <h3>{description}</h3>
      <div className="arrow">
        <i className="fas fa-arrow-right card-icon"></i>
      </div>
    </a>
    
  );
};


export default CardList;