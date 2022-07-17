import { ThemeProvider } from "next-themes";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
