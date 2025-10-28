# 🌎 Mini Web App – About Me & My Town

This is a two-page React app created with **Vite**.  
It includes an **About Me** page and a **My Town** page with live weather data.

---

## 👤 About Me
The **About Me** page shows my photo and a short introduction about what I do and why I joined the MCDA program.

---

## 🏙️ My Town
The **My Town** page shows:
- A picture of **Mexico City**
- Live temperature using the **Open-Meteo API**
- A **°C / °F toggle**
- A weather **icon** that changes depending on the temperature (x<=10:Cold, 10<x<=19:Mild, 20<=x:Sunny)

---

## ⚙️ Technologies Used
- **React + Vite**
- **React Router** for navigation between pages
- **Open-Meteo API** for real-time weather
- **HTML / CSS** for structure and styling

---

## 🚀 How to Run the App

1. Open the terminal in the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the link shown.

---

## 📂 Project Structure
```
my-mini-webapp/
├── README.md
├── package.json
├── index.html
└── src/
    ├── App.jsx          → main layout and navigation
    ├── App.css          → styling
    ├── main.jsx         → entry point
    ├── components/
    │   └── Weather.jsx  → shows live weather
    ├── pages/
    │   ├── AboutMe.jsx  → "About Me" page
    │   └── MyTown.jsx   → "My Town" page
    └── assets/
        ├── selfie.jpg
        ├── mexicocity.png
        ├── cold.png
        ├── mild.png
        └── sunny.png
```

---

## 💡 Notes
- The weather information comes directly from the [Open-Meteo](https://open-meteo.com/) API, which updates automatically with real data.
- The temperature is fetched in **°C** and converted to **°F** using a formula.

---

## 👨‍💻 Author
**Miguel Angel**  
Created as part of a web development assignment.
