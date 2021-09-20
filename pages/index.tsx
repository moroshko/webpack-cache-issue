import { NextPage } from "next";
import { buttonRecipe } from "../styles/Home.css";

const Home: NextPage = () => {
  return (
    <button className={buttonRecipe({ variant: "primary" })}>Hello</button>
  );
};

export default Home;
