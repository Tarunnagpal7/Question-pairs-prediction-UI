# Duplicate Question Pairs Predictor (Frontend)

This is the frontend of the **Duplicate Question Pairs Predictor** project. It is a React application that allows users to input two questions and determine whether they are duplicate or not based on predictions from a backend API.

---

## Features

- User-friendly interface to input two questions.
- Form validation to ensure both questions are entered.
- Displays the prediction result as either **Duplicate** or **Non-Duplicate**.
- Handles errors gracefully and provides meaningful error messages.
- Loading state indication during the prediction process.

---

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For making API requests to the backend.
- **Tailwind CSS**: For styling and responsive design.

---
## Backebd : https://github.com/Tarunnagpal7/Question-pairs-prediction-Backend
## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js) or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/duplicate-question-pairs-frontend.git
   cd duplicate-question-pairs-frontend
2. Install dependencies
   
      npm install
      # or
      yarn install
3. Setup your backend API

   Create a config.js file in the src directory.
   Add the following content and replace <BACKEND_API_URL> with the URL of your backend:
     ```bash
      const API_BASE_URL = "<BACKEND_API_URL>";
      export default API_BASE_URL;

4. start your server

    npm start
    # or
    yarn start
    
5. Open the application in your browser:

  The application will be available at http://localhost:3000 by default.

# Folder Structure
      ```
      src/
      ├── components/      # Reusable components
      ├── pages/           # Page-level components
      ├── App.js           # Main app file
      ├── index.js         # Entry point
      ├── config.js        # Backend API URL
      └── styles/          # Tailwind CSS configuration


# Usage
   - Open the application in your browser.
   - Enter two questions in the respective input fields.
   - Click the Predict button.
   - The application will display if the questions are Duplicate or Non-Duplicate.

