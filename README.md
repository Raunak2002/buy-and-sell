# Ecommerce Website with React and Firebase

This is an Ecommerce website built using React and Firebase. The website allows users to browse through a collection of products, add items to their cart, and proceed with the checkout process. Firebase is used for backend storage and authentication, providing a seamless and secure shopping experience.

## Features

- Product Catalog: Browse through various products with details like name, description, price, and images.
- Product Search: Search for specific products by name or keywords.
- Shopping Cart: Add products to the cart, view the cart items, update quantities, and remove items as needed.
- Checkout Process: Proceed with the checkout process, and enter shipping and payment details.
- User Authentication: Users can sign up and log in to track their orders and manage their accounts.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Firebase: Backend-as-a-Service platform for handling data storage, authentication, and hosting.
- React Router: For handling routing within the React application.
- Firebase Authentication: For managing user authentication.
- Firebase Firestore: To store product data, user information, and order details.

## Getting Started

To get the Ecommerce website up and running on your local machine, follow these steps:

1. Clone this repository:

2. Install dependencies using npm or yarn:

```bash
npm install
```
3. Set up Firebase:

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Enable Firebase Authentication with the desired sign-in methods (e.g., Email/Password, Google, etc.).
   - Create a Firebase Realtime Database and set the rules to allow read and write access only to authenticated users.
   - Copy the Firebase configuration details (apiKey, authDomain, databaseURL, projectId, etc.) and replace them in `src/firebase.js` file.

4. Populate Product Data:

   - In the Firebase Firestore, create a collection named "products."
   - Add product documents with details like name, description, price, and image URLs.

5. Start the development server:

```bash
npm start
```

6. Open your browser and go to `http://localhost:3000` to view the app.

## How to Use

Home Page:

When you open the website, you will be directed to the home page. The home page displays various products from the product catalog.
Browse through the products, view their details and images.

User Authentication:

If you wish to add items to your cart and proceed with the checkout process, you need to sign up or log in. Click on the "Sign Up" or "Log In" button in the navigation bar to access the authentication page. Provide your email address and a password to create a new account or log in with your existing credentials.

Add to Cart:

Once logged in, you can add products to your shopping cart. On the product page, click the Cart icon to add the selected product to your cart.
The cart icon in the navigation bar will display the number of items currently in your cart.

View Cart:

Click on the cart icon in the navigation bar to view your cart. Here, you can see the list of products you have added, along with their quantities and total prices.
You can update the quantity or remove items from your cart as needed.

Checkout:

When you are ready to proceed with the purchase, click on the "Checkout" button on the cart page.

If you want to log out of the website, click on the "Logout" button in the navigation bar.

That's it! Now you can use the Ecommerce website to browse products, add them to your cart, and complete the checkout process. Happy shopping!
