# Appliance-Energy-Consumption-Website
COS30045 DATA VISUALISATION T01, 02, 03

An educational single-page web application demonstrating household appliance energy consumption in the Australian market, with a focus on television efficiency data processed via KNIME.

## Project Details
- **Author:** Wee Ling THONG
- **Student ID:** 102789000
- **Unit:** COS30045 - Data Visualisation
- **Live Demo (Vercel):** https://appliance-energy-consumption-websit-tau.vercel.app/index.html

---

## Features & Requirements Compliance
- **Three Pages:** Home, Televisions, and About Us.
- **JavaScript Navigation:** Smooth view swapping without full page reloads, using standard DOM manipulation and HTML5 History API.
- **Power Logo:** Logo position in the top left corner, with click event handler to return to the Home page.
- **User Feedback:** Hover feedback on navbar items and active state highlighting for the current page.
- **CSS Styling:** Color scheme matching the yellow power logo theme (`#FFD000` / dark background).
- **Data Integration:** Displays visualisations generated from the 2026 Energy Rating Data for household appliances – Televisions dataset via KNIME.

---

## How to Run Locally
1. Clone or download this repository.
2. Open `index.html` using a local web server (e.g., VS Code **Live Server** extension) to ensure full JavaScript and History API functionality.

---

## Insights and Reflections on Using GitHub Copilot / Generative AI

### Application of GitHub Copilot / Generative AI
- **Initial Code and HTML Structure:** Used AI assistance to draft the semantic HTML5 scaffold (navigation, sections, footer).
- **CSS Layout and Styling:** Used Copilot/Generative AI for suggestions on conceptualizing the webpage layout and color scheme.
- **JavaScript SPA Logic:** Used AI to help write the logic for Single-Page Application (SPA) navigation (the `navigateTo` function) and event listeners for managing "active states" (active classes).

### Experience and Reflections
Using GitHub Copilot and generative AI tools significantly accelerated the initial setup and layout phases of the project. When I encountered challenges regarding layout or color schemes, these AI tools provided suggestions and design ideas, allowing me to focus more energy on data cleaning in KNIME and ensuring the website's responsiveness. Although the AI ​​provided useful code snippets and recommendations, I consistently reviewed, optimized, and tested all generated code to ensure functionality and strict adherence to the project's specific requirements. Through this process, I deepened my understanding of DOM manipulation, CSS Grid layout, and JavaScript event handling mechanisms.
