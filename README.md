I've developed a capstone project in React to complete my university program for a frontend developer at Pučko otvoreno učilište Petar Zrinki under mentorship of Marko Miletić.

# description
This site contains pages about a travel agency including:
- Home page with CAT buttons where you can find highlited the tours, as well as a section on why you should travel with the agency
- About page with a section about the agency, their values and information about the team
- Categories page with TourCard.jsx component categorised by the type of activities
- Tours page with search and sort filters showcasing all available tours via TourCard.jsx component
- Contact page that includes a ContactForm.jsx with validation and a small section with contact information
- F.A.Q. page with Accordion.jsx component showcasing one answer at a time

All pages feature Header.jsx, Footer.jsx and Banner.jsx components.

# dev tools
I use:
- React 18 + React Router v6
- Webpack 5 + Babel
- plain CSS
- React Router
- Git

# installing
To access the project, you'll need to install NPM - in terminal run the following commands: 
- npm i
- npm run dev
- npm run build

# files and folders
Upon installing the project will include:
- public folder with favicon.ico and index.html
- src folder with: 
    - assets
    - components
    - data
    - pages 
    - styles
- App.jsx and index.js

- assets folder contains: destinations folder (.jpgs of tour destinations) team folder (.jpgs with team members) and banner.jpg
- components folder contains: 
    - Accordion.jsx
    - Accordion.css
    - Banner.jsx
    - Banner.css
    - ContactForm.jsx
    - ContactForm.css
    - Footer.jsx
    - Footer.css
    - Header.jsx
    - Header.css
    - TourCard.jsx
    - TourCard.css
- data forlder contains tours.js with information about the tours
- pages folder contains:
    - About.jsx
    - About.css
    - Categories.jsx
    - Contact.jsx
    - Contact.css
    - FAQ.jsx
    - Home.jsx
    - Home.css
    - NotFound.jsx
    - TourDetails.jsx
    - TourDetails.css
    - Tours.jsx
    - Tours.css
- styles folder contains only global.css

# bugs
The number one problem I could not find a solution to is favicon. I've tried writing in index.html, installed React Helmet, erased all code and files related to React's default icon, empties my browsers cache each time, disabled cache, ended and started my project after every try, asked ChatGPT, Copilot Search, StackOverflow, W3Schools, NPM, YouTube tutorials and couldn't figure out what I'm missing.




