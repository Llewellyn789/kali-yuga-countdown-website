# Kali Yuga Countdown Website

A beautiful cosmic-themed website that shows a countdown to the end of Kali Yuga, the last of four ages (Yugas) in Hindu cosmology.

## About Kali Yuga

In Hindu cosmology, Kali Yuga is the last of four ages (Yugas) in a cycle:
1. Satya Yuga (1,728,000 human years)
2. Treta Yuga (1,296,000 human years)
3. Dvapara Yuga (864,000 human years)
4. Kali Yuga (432,000 human years)

According to Hindu texts, Kali Yuga began when Lord Krishna left the earth for his heavenly abode, which is calculated to be on February 18, 3102 BCE. Since Kali Yuga is 432,000 years long, it will end around the year 428,899 CE.

## Features

- Accurate countdown timer showing years, days, hours, minutes, and seconds until the end of Kali Yuga
- Beautiful cosmic-themed UI with animated star background
- Responsive design that works on mobile and desktop
- Information about Kali Yuga and Hindu cosmology

## Technologies Used

- TypeScript
- React
- Vite
- CSS3 animations

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/kali-yuga-countdown.git
   cd kali-yuga-countdown
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Build for production
   ```
   npm run build
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on Hindu cosmology and the concept of Yugas
- Star background animation inspired by various space-themed websites

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
