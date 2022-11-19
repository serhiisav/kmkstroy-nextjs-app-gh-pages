import '../styles/globals.scss'
import '../styles/Header/header.scss'
import '../styles/Header/toggleLanguage.scss'
import '../styles/ScrollToTop/scrollToTop.scss'
import '../styles/Intro/intro.scss'
import '../styles/About/about.scss'
import '../styles/Services/services.scss'
import '../styles/GalleryFullscreen/galleryFullscreen.scss'
import '../styles/Gallery/gallery.scss'
import '../styles/Partners/partners.scss'
import '../styles/SubmitForm/submitForm.scss'
import '../styles/Contacts/contacts.scss'

import { Provider } from 'react-redux';
import store from '../store/store';
import { appWithTranslation } from 'next-i18next';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default appWithTranslation(MyApp);

