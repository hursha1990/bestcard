import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CardPreview from "../layout/cardpreview";

 const Home = () => {
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
      <br />
      <Footer />
    </>
  );
};

export default Home;


