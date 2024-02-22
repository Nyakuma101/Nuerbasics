import Button from "../Button/Button";
import "./Home.scss";

export default function Home() {
  // const funFacts = async () => {
  //   try {
  //     const displayResponse = await axios.post(
  //       "http://localhost:1080/videos",)
  //   } catch (error) {
  //     console.error("ERROR", error);
  //   }
  // };
  //...........................................................
  return (
    <div className="home">
      <div className="home__facts">
        <p className="home__fun">Fun Facts</p>
        <p className="home__content">
          this is were i will place the facts inside. i hope it actually fits
          omg this should work completley.
        </p>
        <section className="home__circles"></section>
      </div>

      <div className="home__account">
        <p>Already have an account?</p>
        <Button text="Begin"></Button>
      </div>
    </div>
  );
}
