import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import 'aos/dist/aos.css';

import theme from '../theme/theme';
import createEmotionCache from '../utils/createEmotionCache';
import Layout from '../layout/Layout';

// Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {  
  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    
    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: 'ease-in-out',
    });
  }, []);
  
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet='utf-8' />
        <meta content='minimum-scale=1, initial-scale=1, width=device-width' name='viewport' />
        <meta name='description' content="Bob's Programming Academy" />
        <meta name='keywords' content='programming, python, javascript, portfolio, website' />
        <title>Bob&apos;s Programming Academy</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default App;