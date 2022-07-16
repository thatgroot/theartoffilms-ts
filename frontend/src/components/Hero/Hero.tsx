import propTypes from "prop-types";

function Hero({
  heading = "The Art Of FIlm",
  heading2 = "A MOVIE POSTER COLLECTOR’S INDISPENSABLE TOOLKIT",
  image = "",
  showSearch = false,
}) {
  return (
    <div
      className="h-[70vh] flex flex-col justify-center relative"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 h-[70vh] bg-black bg-opacity-80"></div>

      <div className="flex flex-col justify-center items-center">
        <h1 className={"text-yellow text-4xl font-bold"}>{heading}</h1>
        {heading2 && <h2 className={"text-center text-md"}>{heading2}</h2>}
        {showSearch && (
          <div className="">
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}

Hero.defaultProps = {
  heading: "The Art Of Film",
  heading2: "A MOVIE POSTER COLLECTOR’S INDISPENSABLE TOOLKIT",
  image: "",
  showSearch: false,
};
Hero.propTypes = {
  heading: propTypes.string.isRequired,
  heading2: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  showSearch: propTypes.bool.isRequired,
};
export default Hero;
