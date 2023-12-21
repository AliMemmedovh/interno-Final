import Button from "../Button/Button";
import "./style.css";

const Banner = () => {
  return (
    <>
      <div className="banner flex flex-col justify-center">
        <div className="container ">
          <div className="row flex flex-col gap-3">
            <h2 className="letyour">Let Your Home Be Unique</h2>
            <p className="there">
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </p>
            <Button  btn={"Get Started"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
