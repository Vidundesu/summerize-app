import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex  justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
        <img src={logo} className="w-28 object-contain" />
        <button type="button" className="black_btn">
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summerize articles with
        <br className="max-md:hidden" />
        <span>OpenAI GPT4</span>
      </h1>
      <h2 className="desc">this is testing</h2>
    </header>
  );
};

export default Hero;
