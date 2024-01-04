# Flash_Card_Application
This project will be about Flash Card App using React for educational purposes,where users can create, view, edit, and delete flash cards. Each card contains information on both sidesand can be used for learning or memorization
# Flash Card Application

## Description

The Flash Card Application is a dynamic React web app that offers a digital solution for users looking to enhance their learning experience through the use of flashcards. It facilitates the creation, management, and utilization of flashcards, enabling users to efficiently review and memorize information.

## Key Features

- **Interactive Flashcards**: Create flashcards with questions and answers, and interact with them by flipping to reveal content.
- **CRUD Operations**: Full Create, Read, Update, and Delete functionality for flashcard management.
- **Categorization**: Organize flashcards into customizable categories for systematic studying.
- **Progress Tracking**: Keep track of learning progress and review mastered content.

## Built With

- **React.js**: A JavaScript library for building user interfaces.
- **JSON Server**: Simulates a REST API for development and testing purposes.
- **Axios**: A promise-based HTTP client for making HTTP requests.
- **React Router**: A standard library for routing in React.

## Setup and Installation

To get the Flash Card Application up and running on your local development environment, follow these detailed steps:

### Prerequisites

- Node.js and npm installed (You can download them [here](https://nodejs.org/)).
- Basic knowledge of terminal and command line operations.

### Getting Started

1. **Clone the Repository**
   - Open your terminal and run the following command to clone the repo:
     ```
     git clone https://github.com/Kenterum/Flash_Card_Application.git
     ```
   - Navigate to the cloned directory:
     ```
     cd Flash_Card_Application
     ```

2. **Install Dependencies**
   - Install the necessary Node modules for both the React app and JSON server:
     ```
     cd flashcard-app
     npm install
     cd flashcard-server
     npm install
     cd ..
     ```

3. **Configure the Backend Server**
   - Start the JSON server which will serve as your backend API:
     ```
     npm run server
     ```
   - The server will start running on `http://localhost:3000`.

4. **Run the React Application**
   - In a new terminal window, navigate back to the root directory of the project and start the React app:
     ```
     npm start
     ```
   - The application should now be running on `http://localhost:3001`.

5. **Database Setup**
   - The application uses `db.json` from the `flashcard-server` directory as a mock database. You can edit it directly to pre-populate your flashcards.

6. **Environment Variables**
   - If you have environment-specific settings, create a `.env` file in the root directory and add your variables there. For example:
     ```
     REACT_APP_API_URL=http://localhost:5000
     ```

### Production Build

- To create a production build of the application, run:
     ```
    npm run build
     ```
- This command will create a `build` directory with the optimized production build.

## Usage

After installation, you can use the navigation bar to explore different pages within the app. Add, edit, or remove flashcards to tailor your studying experience. Flip flashcards to see questions and answers, and sort them based on your learning needs.

## Contributing

We encourage public contributions! Please follow these steps to contribute:

1. Fork the project repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.
