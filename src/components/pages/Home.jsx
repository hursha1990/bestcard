import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <main>
        <h2>Swipe smart with BestCard</h2>
        <h3>
          {" "}
          Stop guessing. Start earning. Let BestCard find the card that truly
          fits you!{" "}
        </h3>
        <img
          src="/images/markus-winkler-ahjzVINkuCs-unsplash.jpg"
          alt=""
          class="img"
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        ></img>
        <button>
          <Link to="/landingA">Sign Up</Link>
        </button>
      </main>
    </>
  );
};

export default Home;
