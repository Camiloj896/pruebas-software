import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <div id='general-snackbar'></div>
    </div>
  );
}

export default MyApp
