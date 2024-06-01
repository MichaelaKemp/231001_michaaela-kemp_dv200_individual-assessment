Plant Shop
Plant Shop is a web application for browsing, viewing details, and purchasing various plants. The application allows users to add plants to their cart and proceed to checkout.


Table of Contents

Plant Shop
 Table of Contents
 Features
 Tech Stack
 Installation
  Frontend
  Backend
Usage
Folder Structure
Screenshots
License


Features
• Browse a list of plants.
• View detailed information about each plant.
• Add plants to the cart.
• View and manage items in the cart.


Tech Stack
• Frontend:
  ° React
  ° React Router DOM
  ° Axios
  ° CSS
• Backend:
  ° Node.js
  ° Express
  ° MongoDB
  ° Mongoose

  
Installation
Frontend
1. Clone the repository:
  • git clone [https://github.com/yourusername/plant-shop.git](https://github.com/MichaelaKemp/231001_michaaela-kemp_dv200_individual-assessment.git)
  • cd plant-shop/plant-shop-frontend

2. Install dependencies:
  • npm install

3. Start the development server:
  • npm start

Backend
1. Clone the repository if not already done:
  • git clone [https://github.com/yourusername/plant-shop.git](https://github.com/MichaelaKemp/231001_michaaela-kemp_dv200_individual-assessment.git)
  • cd plant-shop/plant-shop-backend

2. Install dependencies:
  • npm install

3. Create a .env file in the root directory of plant-shop-backend and add the following:
  • MONGODB_URI=mongodb+srv://dbUser:dbUserPassword@plant-shop.c6zl7mo.mongodb.net/plantshop?retryWrites=true&w=majority

4. Start the backend server:
  • node server.js


Usage
1. Navigate to http://localhost:3001 in your web browser.
2. Browse the list of plants.
3. Click on a plant to view its details.
4. Add plants to the cart.
5. View and manage your cart.


Folder Structure

plant-shop/
├── plant-shop-frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── plant-shop-backend/
    ├── models/
    ├── server.js
    ├── .env
    ├── package.json
    └── README.md

    
Screenshots
{Home Page}https://github.com/MichaelaKemp/231001_michaaela-kemp_dv200_individual-assessment/blob/main/plant-shop-frontend/Screenshots/HomePage.png 

{Plant List}https://github.com/MichaelaKemp/231001_michaaela-kemp_dv200_individual-assessment/blob/main/plant-shop-frontend/Screenshots/PlantList.png 

{Plant Details 01}https://github.com/MichaelaKemp/231001_michaaela-kemp_dv200_individual-assessment/blob/main/plant-shop-frontend/Screenshots/PlantDetails01.png 

{Plant Detail 02}https://github.com/MichaelaKemp/231001_michaaela-kemp_dv200_individual-assessment/blob/main/plant-shop-frontend/Screenshots/PlantDetails02.png

{Cart}https://github.com/MichaelaKemp/231001_michaaela-kemp_dv200_individual-assessment/blob/main/plant-shop-frontend/Screenshots/Cart.png


License
This project is licensed under the MIT License.
