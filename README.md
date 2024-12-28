# Grocery Store Application

This is a full-stack grocery store application where users can browse, add products to the cart, sign up, sign in, and proceed to checkout. It includes features such as a product listing, user authentication, and a shopping cart.

---

## Features

- **Product List**: Browse and view details of various products.
- **Authentication**: User sign-up and sign-in functionality.
- **Shopping Cart**: Add products to the cart and update quantities.
- **Checkout**: Complete the order by providing personal details.
- **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.

---

## Tech Stack

- **Frontend**: React.js, React Router
- **Backend**: Node.js (if you integrate a backend)
- **State Management**: React Context API (for Cart and User contexts)
- **Styling**: CSS
- **Database**: (Optional, depending on backend integration)

---

## Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** and **npm**: To run the application and manage dependencies.
  - [Download Node.js](https://nodejs.org/)
  
---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/grocery-app.git
   cd grocery-app

2. **Install dependencies**:

    Navigate to the frontend folder and run the following command:

    ```bash
    cd frontend
    npm install

3. **Run the Application**:

    To start the application in development mode:

    ```bash
    npm start

This will launch the app at http://localhost:3000 in your browser.

4. **Usage**
    Sign Up:

    Go to the Sign Up page to create a new user account. You'll need to provide a username, email, and password.

    Sign In:

    Once signed up, you can sign in using your username and password to access personalized features like the shopping cart.

    Browse Products:

    Navigate through the Product List where you can see the available grocery products. Each product has a "View Details" link and an "Add to Cart" button.

    Add to Cart:

    After browsing products, you can add them to your shopping cart. You can modify quantities and proceed to checkout.

    Checkout:

    After adding products to the cart, go to the Cart page and click on Proceed to Checkout. Provide your delivery information, and confirm your order.

5. **Folder Structure**

    ```plaintext
    grocery-app/
    │
    ├── frontend/                       # Frontend React application
    │   ├── src/
    │   │   ├── components/             # Contains all the UI components
    │   │   ├── context/                # Contains React Context for User and Cart
    │   │   ├── pages/                  # Contains page components (Sign In, Sign Up, Cart, etc.)
    │   │   ├── App.js                  # Main React component
    │   │   ├── index.js                # Entry point of the app
    │   │   └── ...
    │   ├── public/
    │   └── package.json                # Node package file for frontend dependencies
    │
    ├── backend/                        # (Optional) Backend if needed for user authentication, products, etc.
    │
    └── README.md                       # This README file

6. **Troubleshooting**
    Cart not updating: Ensure the CartContext is set up correctly and make sure that the useCart hook is used in your components properly.

7. **Authentication errors**: 
    Double-check that the UserContext is correctly implemented and wrapped around your application.


