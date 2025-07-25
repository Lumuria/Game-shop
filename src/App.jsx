import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import './i18n'

function App() {
  const { t, i18n } = useTranslation()
  const [count, setCount] = useState(0)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('app.name', 'GameTech Store')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('app.tagline', 'Your Ultimate Gaming & PC Building Destination')}
          </p>
        </header>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => changeLanguage('en')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t('language.en', 'English')}
          </button>
          <button
            onClick={() => changeLanguage('ar')}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            {t('language.ar', 'العربية')}
          </button>
        </div>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-4">
              <li><a href="#" className="text-blue-600 hover:text-blue-800">{t('nav.home', 'Home')}</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">{t('nav.store', 'Store')}</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">{t('nav.pcBuilder', 'PC Builder')}</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">{t('nav.cart', 'Cart')}</a></li>
            </ul>
          </nav>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              {t('home.featuredProducts', 'Featured Products')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('home.pcBuilderPromo', 'Create your perfect gaming setup with our PC Builder tool. Choose compatible components and get performance estimates.')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-white">{t('categories.games', 'Games')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Latest gaming titles</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-white">{t('categories.components', 'Components')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">PC building parts</p>
              </div>
            </div>

            <button 
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            >
              {t('home.startBuilding', 'Start Building')} ({count})
            </button>
          </div>
        </div>

        <footer className="text-center mt-8 text-gray-600 dark:text-gray-400">
          <p>{t('footer.copyright', '© 2025 GameTech Store. All rights reserved.')}</p>
        </footer>
      </div>
    </div>
  )
}

export default App

