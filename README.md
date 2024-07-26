# Ice Cream App with React Unit Test

## Test Coverage

The project includes comprehensive tests for all components and functionalities. The test coverage is currently at 96.55%, ensuring that all code paths and features are thoroughly tested.

![](/public/images/Test-Coverage.png)

```bash
npm test -- --coverage
```

## Description

This project is an ice cream shop application built with React. It includes unit testing to ensure the functionality and reliability of the app.

## Features

- Browse various ice cream flavors
- Add toppings to your order
- Customize your ice cream scoops
- View and modify your order summary
- Responsive design for seamless usage on different devices
- User-friendly interface with a modern look

## Libraries

- **@testing-library/user-event@14.0**: For simulating user interactions in tests
- **jest**: For running unit tests
- **axios@^0.27.2**: For making HTTP requests
- **json-server**: For creating a mock REST API
- **bootstrap**: For styling the application

## Preview

![](/public/images/IceCream.gif)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/KamilErdogmus/Unit_Test-Ice_Cream.git
```

2. Navigate to the project directory:

```bash
cd your-repository
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your web browser and visit http://localhost:3000 to view the application.

## Testing

To ensure the quality and functionality of the app, we have included unit tests. Follow the steps below to run the tests:

1. **Run the tests**:

   ```bash
   npm test
   ```

2. **Testing Details**:

   - The tests cover various components and functionalities of the application.
   - Tests simulate user interactions such as clicking buttons and filling forms using `@testing-library/user-event`.
   - The test suite is managed by `jest` and ensures that the components render correctly, handle user input, and interact with the mock server as expected.

3. **View Test Coverage**:
   - To view the test coverage report, run:
     ```bash
     npm run test:coverage
     ```
   - The coverage report will provide detailed insights into which parts of your code are well-tested and which parts may need additional tests.

## Notes

- The project uses `json-server` to create a mock backend for development and testing purposes. Ensure that the mock server is running when you start the application.
- Adjust configurations and scripts as needed to match your project's structure and requirements.
