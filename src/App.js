import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const { t, i18n, ready } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // إضافة حالة للخطأ

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // إضافة تأخير لمحاكاة تحميل البيانات
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (ready) {
          setLoading(false);
        } else {
          throw new Error('Translations not ready');
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    initializeApp();
  }, [ready]);

  if (loading) {
    return (
      <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="loading" style={{ color: 'white', fontSize: '24px' }}>Loading translations...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="error" style={{ color: 'red', fontSize: '24px' }}>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh' }}>
      <header className="App-header" style={{ padding: '20px' }}>
        <h1 style={{ color: '#61dafb' }}>{t('welcome')}</h1>
        
        <div className="language-buttons" style={{ margin: '20px 0' }}>
          <button 
            style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px' }}
            onClick={() => i18n.changeLanguage('en')}
          >
            English
          </button>
          <button 
            style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px' }}
            onClick={() => i18n.changeLanguage('ar')}
          >
            العربية
          </button>
        </div>

        <p style={{ color: 'white', maxWidth: '600px', margin: '0 auto' }}>{t('edit_and_save')}</p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#61dafb', marginTop: '20px' }}
        >
          {t('learn_react')}
        </a>
      </header>
    </div>
  );
}

export default App;