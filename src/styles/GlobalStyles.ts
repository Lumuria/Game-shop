import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Light Theme Colors */
    --primary-color: #3f51b5;
    --secondary-color: #f50057;
    --background-color: #f5f5f5;
    --surface-color: #ffffff;
    --text-primary: #212121;
    --text-secondary: #757575;
    --border-color: #e0e0e0;
    --success-color: #4caf50;
    --warning-color: #ff9800;
    --error-color: #f44336;
    --shadow-color: rgba(0, 0, 0, 0.1);
  }

  [data-theme='dark'] {
    /* Dark Theme Colors */
    --primary-color: #7986cb;
    --secondary-color: #ff4081;
    --background-color: #121212;
    --surface-color: #1e1e1e;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --border-color: #333333;
    --success-color: #81c784;
    --warning-color: #ffb74d;
    --error-color: #e57373;
    --shadow-color: rgba(0, 0, 0, 0.3);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Roboto', 'Tajawal', sans-serif;
    background-color: var(--background-color);
    color: var(--text-primary);
    transition: all 0.3s ease;
    min-height: 100vh;
  }

  /* RTL Support */
  body[dir="rtl"] {
    font-family: 'Tajawal', 'Roboto', sans-serif;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--secondary-color);
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  /* Responsive Typography */
  h1 {
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.75rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h4 {
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  /* Container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Grid System */
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
  }

  /* Responsive Grid */
  @media (max-width: 992px) {
    .grid {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media (max-width: 576px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* Utility Classes */
  .text-center {
    text-align: center;
  }

  .mt-1 {
    margin-top: 0.5rem;
  }

  .mt-2 {
    margin-top: 1rem;
  }

  .mt-3 {
    margin-top: 1.5rem;
  }

  .mt-4 {
    margin-top: 2rem;
  }

  .mb-1 {
    margin-bottom: 0.5rem;
  }

  .mb-2 {
    margin-bottom: 1rem;
  }

  .mb-3 {
    margin-bottom: 1.5rem;
  }

  .mb-4 {
    margin-bottom: 2rem;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 0.3s ease-in;
  }
`;

export default GlobalStyles;
