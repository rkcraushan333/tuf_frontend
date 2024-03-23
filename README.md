# Frontend App README

This frontend application provides a user-friendly interface for code submission, execution, and viewing submission history. Below is an overview of the application structure, components, and functionalities.

## Components:

### 1. App.js

- Entry point for the React application.
- Sets up routing using React Router.
- Renders the `Form` component for code submission and the `SubmissionTable` component for viewing submission history.

### 2. Form.js

- Renders a form for users to submit their code.
- Includes input fields for username, code language, standard input, and source code.
- Submits code to the backend for execution and stores submission data.

### 3. SubmissionTable.js

- Displays submission history in a table format.
- Fetches submission data from the backend.
- Users can view details of past submissions including username, code language, timestamp, and output.

## Functionality:

- **Code Submission**: Users input username, select code language, provide standard input, and paste source code. Code is sent to the backend for execution.
- **Code Execution**: Submitted code is executed on the backend using an API. Users can view output once execution is completed.

- **Submission History**: Users can view past submissions including details such as username, code language, timestamp, and output.

## Getting Started:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies with `npm install` or `yarn install`.
4. Start the development server using `npm start` or `yarn start`.
5. Access the application at `http://localhost:3000`.

## Dependencies:

- React: JavaScript library for building user interfaces.
- React Router: Declarative routing for React applications.
- Axios: Promise-based HTTP client for making requests to the backend server.

## Additional Notes:

- This frontend communicates with a backend server for code execution and submission data storage.
- Ensure the backend server is running and accessible to handle API requests from the frontend.

Feel free to explore the codebase and customize it according to your requirements. If you have any questions or issues, please refer to the documentation or contact the project maintainers.
