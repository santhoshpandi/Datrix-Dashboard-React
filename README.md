# React Dashboard Template

This is a modern, responsive dashboard template built using **React**, **Tailwind CSS**, and **Vite**. The dashboard includes a sliding navigation bar with different sections, a dark mode toggle, responsive design, and several chart components. It is designed to be a starting point for building customizable admin dashboards and other web applications.

## Developed by

- **Santhosh Pandi** -- **Live Preview** https://santhoshpandi.github.io/Datrix-Dashboard-React/

## Screenshots
![image](https://github.com/user-attachments/assets/134a5624-6485-4c9f-ba68-e66e52e3e1b3)

![image](https://github.com/user-attachments/assets/351d9ffc-5384-46c4-9b0d-24e33901a6ab)

![image](https://github.com/user-attachments/assets/3d96c0e2-cfe6-4c69-9d3f-27aa647be7a4)

![image](https://github.com/user-attachments/assets/1fd7f1b2-c9d9-4974-8694-fe92dad5e154)
![image](https://github.com/user-attachments/assets/33bda19c-0502-4d1f-8579-b692c77cd599)



## Features

- **Separated Navigation Bar**: Includes side navigation with animated sliding effect, which is also customizable by `js` file. Sections include:
  - **Home**
  - **Trends**
  - **Layout** (Computer, Tablet, Mobile, etc.)
  - **Plans** (Basic, Advanced, Pro, etc.)

- **Routing**: Each navigation item routes to its corresponding component for dynamic content display.

- **Responsive Design**: The layout adjusts to different screen sizes, ensuring the dashboard looks great on both desktop and mobile devices.

- **Dark Mode**: A toggle to switch between dark and light modes for better accessibility.

- **Charts**: Integrated with chart components for data visualization, suitable for analytics dashboards.

- **Customizable Components**: Easily customizable components to fit various use cases.

- **Customized 404 Page**: A custom 404 page is included to handle "not found" errors gracefully, improving the user experience when navigating to non-existent routes.

## Technologies Used

- **React**: For building the UI components and managing the application state.
- **Tailwind CSS**: For utility-first styling and responsive design.
- **Vite**: A fast and optimized build tool for React applications.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher

### Installation

1. Clone the repository:
   ```bash
   https://github.com/santhoshpandi/Datrix-Dashboard-React.git

2. Navigate to the project directory:
   ```bash
   cd Datrix-Dashboard-React

3. Install the dependencies:
   ```bash
   npm install

4. Start the Development server:
   ```bash
   npm run dev

The dashboard will be available at http://localhost:5173

## File Structure

  
    /public
    ├── index.html               # Main HTML file
    /src
      ├── assets                   # Images, icons, etc.
      ├── components/              # Reusable UI components like Navbar, Sidebar, etc.
      ├── views/                   # Different pages like Home, Trends, Layout, etc.
      ├── App.js                   # Main React app component
      ├── index.js                 # Entry point for React
      ├── nav.js                   # Consist of Data about the NavItem and its path
      ├── routes.js                # Consist of Routes of Components
      ├── index.css                # Tailwind configuration and custom styles
      ├── App.css                  # Tailwind custom styles
    /tailwind.config.js            # Tailwind configuration
    /vite.config.js                # Vite configuration
    /package.json                  # Project dependencies and scripts
    

### Usage

- **Navigation Bar**: Click on different navigation items (like Home, Trends, Layout, etc.) to navigate to different sections of the dashboard.
- **Dark Mode Toggle**: The dark mode can be toggled by clicking the switch in the top-right corner of the dashboard. The theme will persist across page reloads.
- **Charts**: Use the pre-built chart components to display data, or customize them according to your needs.

## Customization

You can easily customize the look and feel of the dashboard by:

- **Modifying the `tailwind.config.js` file**: Adjust Tailwind's design system by extending or overriding default configurations such as colors, fonts, breakpoints, etc.
  
- **Customizing the components and pages**: Modify or add components in the `/src/components` folder and pages in the `/src/pages` folder to change the layout, add new sections, or update existing content.

- **Adding more charts or data visualizations**: You can integrate additional chart libraries like **Chart.js** or **Recharts** for more advanced data visualization features. Simply install the required libraries and update the chart components.

## Acknowledgments

- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: An extremely fast build tool for modern web projects.
- **React**: A JavaScript library for building user interfaces.
- **Chart.js**: For displaying interactive charts.

  

