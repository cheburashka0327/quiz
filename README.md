# README

## Table of Contents

1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Requirements](#requirements)
4. [Implementation Steps](#implementation-steps)
   - [1. Setting Up the Project](#1-setting-up-the-project)
   - [2. Defining the Data Structure](#2-defining-the-data-structure)
   - [3. Creating the Questionnaire Interface](#3-creating-the-questionnaire-interface)
   - [4. Handling User Input](#4-handling-user-input)
   - [5. Integrating Google Analytics Event Tracking](#5-integrating-google-analytics-event-tracking)
   - [6. Displaying Events in the User Interface](#6-displaying-events-in-the-user-interface)
   - [7. Adding a Home Page and Routing](#7-adding-a-home-page-and-routing)
   - [8. Implementing Form Submission with Popup](#8-implementing-form-submission-with-popup)
   - [9. Adding Multi-language Support](#9-adding-multi-language-support)
   - [10. Styling with Tailwind CSS](#10-styling-with-tailwind-css)
5. [Time Spent](#time-spent)
6. [Decision Making and Reasoning](#decision-making-and-reasoning)
   - [Choice of Technologies](#choice-of-technologies)
   - [Component Structure](#component-structure)
   - [State Management](#state-management)
   - [Routing and Navigation](#routing-and-navigation)
   - [Analytics Integration](#analytics-integration)
   - [Internationalization](#internationalization)
   - [Styling Decisions](#styling-decisions)
7. [Conclusion](#conclusion)

---

## Introduction

This project involves creating a dynamic **questionnaire interface** using **React** and **TypeScript**. The questionnaire renders questions from a JSON data source, captures user responses, tracks events using **Google Analytics**, and displays events in the user interface upon completion. Additional features include a home page for user input, multi-language support with `react-i18next`, and styling with **Tailwind CSS**.

## Project Overview

The goal is to develop a responsive questionnaire application that:

- Renders questions and options from a JSON file.
- Captures user responses.
- Tracks user interactions using Google Analytics.
- Displays tracked events in the UI after the questionnaire is completed.
- Allows users to input their name on a home page and navigates them to the questionnaire.
- Implements a popup upon form submission to indicate success or failure.
- Supports multiple languages (English, Russian, Estonian) using `react-i18next`.
- Uses **Tailwind CSS** for styling.
- Ensures only the form content is translated, not the entire component.

This project demonstrates how to build interactive forms in React, integrate analytics for event tracking, implement internationalization, and manage application state effectively.

## Requirements

- **Frontend Framework**: React with TypeScript
- **Data Source**: JSON file containing questions and options
- **Event Tracking**: Google Analytics
- **Display Events**: Show tracked events in the UI upon completion
- **Routing**: React Router for navigation
- **Internationalization**: `react-i18next` for multi-language support
- **Styling**: Tailwind CSS
- **Additional**: Use modern JavaScript features and best practices

## Implementation Steps

### 1. Setting Up the Project

**Time Spent**: 30 minutes

- Initialized a new React project with TypeScript support using Create React App.
- Installed necessary dependencies.
- Set up **Tailwind CSS** according to the official documentation.
- Organized the project structure with folders for components, pages, and types.

### 2. Defining the Data Structure

**Time Spent**: 20 minutes

- Created a `form.json` file containing questions and options, structured to support multiple languages.
- Defined **TypeScript interfaces** in a `types.ts` file to represent the data structure.

### 3. Creating the Questionnaire Interface

**Time Spent**: 1 hour

- Built a `DynamicForm` component to render the list of questions dynamically based on the provided JSON data.
- Created reusable components for different question types (`SingleChoiceQuestion`, `ComparisonQuestion`).
- Ensured the components accept a `language` prop to display content in the selected language.

### 4. Handling User Input

**Time Spent**: 30 minutes

- Used React's `useState` hook to manage form data.
- Implemented `handleChange` functions in components to update the state when users select options.
- Ensured that user inputs are correctly captured and stored.

### 5. Integrating Google Analytics Event Tracking

**Time Spent**: 1 hour

- Set up **Google Analytics** by adding the GA script to the `index.html` file and initializing it in the `FormPage` component.
- Created utility functions to send events to Google Analytics when users interact with the form.
- Tracked events on answer selection and form submission.

### 6. Displaying Events in the User Interface

**Time Spent**: 30 minutes

- Stored events in a state variable to render them in the UI.
- Displayed a list of events after the form is submitted, for transparency and debugging.

### 7. Adding a Home Page and Routing

**Time Spent**: 45 minutes

- Installed `react-router-dom` to manage routing.
- Created a `HomePage` component where users can enter their name.
- Configured routes in `App.tsx` to navigate between the home page and the form page.
- Implemented navigation to the form page with the user's name included in the URL.

### 8. Implementing Form Submission with Popup

**Time Spent**: 30 minutes

- Created a `Popup` component to display success or error messages upon form submission.
- Updated `DynamicForm` to display the popup based on form submission results.
- Ensured that the popup automatically closes after a certain duration.

### 9. Adding Multi-language Support

**Time Spent**: 1 hour

- Installed `react-i18next` and `i18next` for internationalization.
- Configured `i18n.ts` with translation resources for **English** (`en`), **Russian** (`ru`), and **Estonian** (`et`).
- Implemented a `LanguageSwitcher` component to allow users to change the language.
- Used the `useTranslation` hook in components to access translation functions.
- Modified components to display content in the selected language.

### 10. Styling with Tailwind CSS

**Time Spent**: 30 minutes

- Refactored inline styles to use **Tailwind CSS** classes for consistency and maintainability.
- Ensured that the UI is responsive and visually appealing.
- Used Tailwind CSS utility classes to style components such as buttons, forms, and popups.

## Time Spent

**Total Time**: Approximately **6 hours**

### Task Time Spent:

| Task                                         | Time Spent  |
|----------------------------------------------|-------------|
| Setting Up the Project                       | 30 minutes  |
| Defining the Data Structure                  | 20 minutes  |
| Creating the Questionnaire Interface         | 1 hour      |
| Handling User Input                          | 30 minutes  |
| Integrating Google Analytics                 | 1 hour      |
| Displaying Events in the User Interface      | 30 minutes  |
| Adding a Home Page and Routing               | 45 minutes  |
| Implementing Form Submission with Popup      | 30 minutes  |
| Adding Multi-language Support                | 1 hour      |
| Styling with Tailwind CSS                    | 30 minutes  |
| **Total**                                    | **6 hours** |

## Decision Making and Reasoning

### Choice of Technologies

- **React with TypeScript**: Chosen for strong typing capabilities, enhancing code maintainability and reducing runtime errors.
- **React Router**: Used for routing to manage navigation between pages in a single-page application.
- **Google Analytics (GA4)**: Selected for event tracking due to its robustness and widespread industry use.
- **`react-i18next`**: Implemented for internationalization to support multiple languages seamlessly.
- **Tailwind CSS**: Adopted for utility-first CSS styling, allowing rapid UI development with consistent styling.

### Component Structure

- **Modular Components**: Broke down the UI into smaller, reusable components.
- **Separation of Concerns**: Ensured that each component has a single responsibility, improving code readability and maintainability.

### State Management

- **Form Data State**: Managed form inputs using `useState`, storing user responses in an object keyed by question IDs.
- **Events State**: Maintained a list of event descriptions to display in the UI after submission.
- **Popup State**: Controlled the visibility and content of the popup using state variables.
- **Language State**: Managed the selected language to re-render components with the appropriate translations.

### Routing and Navigation

- **Dynamic Routing**: Used URL parameters to pass the user's name from the home page to the form page.
- **Navigation**: Implemented navigation using `useNavigate` and `navigate` functions from `react-router-dom`.
- **Encoding/Decoding**: Used `encodeURIComponent` and `decodeURIComponent` to safely include the user's name in the URL.

### Analytics Integration

- **Event Tracking on Selection**: Decided to track events whenever a user selects an option to capture user interaction patterns.
- **Event Tracking on Submission**: Tracked a final event upon questionnaire completion to signify the end of the user journey.
- **Display of Tracked Events**: Chose to display tracked events in the UI for transparency and debugging purposes.

### Internationalization

- **`react-i18next` Implementation**: Selected for its ease of use and integration with React.
- **Translation of Form Content Only**: Decided to translate only the form content, keeping other component texts in the default language for consistency.
- **Support for Multiple Languages**: Included **English**, **Russian**, and **Estonian** to cater to a diverse user base.

### Styling Decisions

- **Tailwind CSS**: Adopted for its utility-first approach, allowing rapid development and consistent styling without writing custom CSS.
- **Responsive Design**: Ensured that the application is responsive and accessible on various devices.
- **Consistency**: Maintained consistent styling across components by using standardized Tailwind CSS classes.

## Conclusion

The project successfully implements an interactive questionnaire interface in **React** with **TypeScript**, incorporating user-friendly features and modern web development practices. Key achievements include:

- **Dynamic Form Rendering**: Questions are rendered based on JSON data, supporting easy updates and scalability.
- **User Interaction Handling**: Captured user inputs effectively and provided immediate feedback through a popup upon submission.
- **Event Tracking**: Integrated Google Analytics to track user interactions, aiding in data-driven decision-making.
- **Internationalization**: Supported multiple languages, enhancing accessibility for users from different linguistic backgrounds.
- **Routing and Navigation**: Implemented smooth navigation between pages, improving the user experience.
- **Styling with Tailwind CSS**: Achieved a clean and responsive UI, enhancing usability and aesthetic appeal.

This project serves as a comprehensive example of building a modern, interactive web application with React, demonstrating best practices in component design, state management, routing, internationalization, and styling.

---

**Future Enhancements:**

- **Form Validation**: Implement more robust validation to ensure all required fields are filled and inputs are valid.
- **Additional Question Types**: Extend support for more complex question types, such as multi-select, open-ended questions, and rating scales.
- **Backend Integration**: Connect to a backend service for storing responses persistently.
- **User Authentication**: Add authentication to personalize the user experience further.
- **Enhanced Analytics**: Incorporate more detailed analytics to gain deeper insights into user behavior.

---

**Thank you** for reviewing this project. If you have any questions or need further clarification, please feel free to reach out.

## Getting Started

To run this project locally, follow the steps below. Make sure you have Node.js and npm installed on your machine.

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed. If not, you can download and install it from [here](https://nodejs.org/).
2. **npm or Yarn**: You will also need npm (comes with Node.js) or Yarn installed to manage the project's dependencies.

### Installation

1. **Clone the repository**:

   ```bash
   git clone <your-repository-url>
2. **Navigate into the project directory**:   
   ```bash
   cd questionnaire-prototype
3. **Install the dependencies**:
   If you are using npm:
   ```bash
   npm install
   ```

   If you are using Yarn:
   ```bash
   yarn install
4. Create a `.env` file:
5. Add Google Analytics Tracking ID:

Open the newly created .env file and add your Google Analytics Tracking ID. The file should look like this:
```bash 
REACT_APP_GA_TRACKING_ID=your-google-analytics-tracking-id
```
Replace your-google-analytics-tracking-id with your actual tracking ID from Google Analytics.
6. Start the development server:

   If you are using npm:
   ```bash
   npm start
   ```

   If you are using Yarn:
   ```bash
   yarn start
