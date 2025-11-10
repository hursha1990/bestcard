import Header from "../components/Header";
import Footer from "../components/Footer";
import CardPreview from "../components/cardpreview";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h2>Swipe smart with BestCard</h2>
        <h3>
          {" "}
          Stop guessing. Start earning. Let BestCard find the card that truly
          fits you!{" "}
        </h3>
      </main>
      <CardPreview />
      <br/>
      <Footer />
    </>
  );
}
