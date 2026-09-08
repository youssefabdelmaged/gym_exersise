<div align="center">
  <h1 align="center">MEGA EXERCISES</h1>

  <p align="center">
    A modern, fully responsive React fitness application designed to help you discover the most effective exercises, target specific muscle groups, and view instructional YouTube videos for your workouts!
    <br />
    <br />
    <a href="https://gym-exercises-umber.vercel.app"><strong>View Live Demo »</strong></a>
  </p>
</div>

---

## ✨ Features

- **Modern & Premium UI:** Designed with sleek glassmorphism effects, dynamic hover animations, and vibrant color gradients.
- **Dark/Light Mode Toggle:** Seamlessly switch between a vibrant light mode and a deep, immersive dark mode using the interactive toggle in the navbar.
- **Dynamic Search & Filtering:** Effortlessly search for exercises by body part, equipment, or target muscle group.
- **Instructional YouTube Videos:** Integrates directly with YouTube to pull relevant workout videos for any exercise you click on.
- **Similar Exercises:** Smart suggestions for exercises that target similar muscles or use the same equipment.
- **Lightning Fast Performance:** Powered by Vite, ensuring instant server start and rapid hot module replacement.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/) powered by [Vite](https://vitejs.dev/)
- **UI & Styling:** [Material UI (MUI) v5](https://mui.com/), Custom CSS, and [Framer Motion](https://www.framer.com/motion/) for animations.
- **Routing:** [React Router v6](https://reactrouter.com/)
- **APIs:** 
  - [ExerciseDB API](https://rapidapi.com/justin-robar/api/exercisedb) (for exercise data)
  - [YouTube Search API](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download) (for workout videos)

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have Node.js installed. If not, download it from [here](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/youssefabdelmaged/gym_exercises.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd gym_exersise
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

4. **Set up Environment Variables:**
   Create a `.env` file in the root of your project and add your RapidAPI key. Since this project is powered by Vite, the environment variable must be prefixed with `VITE_APP_`.
   ```env
   VITE_APP_RAPID_API_KEY=your_rapid_api_key_here
   ```
   *(You can get a free API key by subscribing to the ExerciseDB and YouTube Search APIs on [RapidAPI](https://rapidapi.com/).)*

5. **Run the development server:**
   ```sh
   npm run dev
   ```

6. **Build for production:**
   ```sh
   npm run build
   ```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/youssefabdelmaged/gym_exersise/issues).

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

---
<p align="center">Made with ❤️ by <strong>COACH.MEGA</strong></p>
