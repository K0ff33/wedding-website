import i18next from 'i18next'
import Backend from 'i18next-chained-backend'
import LocalStorageBackend from 'i18next-localstorage-backend' // primary use cache
import XHR from 'i18next-xhr-backend' // fallback xhr load
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule) // if not using I18nextProvider
  .init({
    backend: {
      backends: [
        LocalStorageBackend, // primary
        XHR
      ],
      backendOptions: [
        {
          // prefix for stored languages
          prefix: 'i18next_res_',
          // expiration
          expirationTime: 4 * 7 * 24 * 60 * 60 * 1000,
          // language versions
          versions: {
            en: 'v1.0',
            pl: 'v1.0'
          }
        },
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json' // xhr load path for my own fallback
        }
      ]
    },
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  })

export default i18next
