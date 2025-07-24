import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const { t, i18n, ready } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ready) {
      setLoading(false);
    }
  }, [ready]);

  if (loading) {
    return <div className="loading">Loading translations...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('welcome')}</h1>
        
        <div className="language-buttons">
          <button onClick={() => i18n.changeLanguage('en')}>
            English
          </button>
          <button onClick={() => i18n.changeLanguage('ar')}>
            العربية
          </button>
        </div>

        <p>{t('edit_and_save')}</p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learn_react')}
        </a>
      </header>
    </div>
  );
}

export default App;