import "../../app/globals.css";
import Image from "next/image";
import CarSet from "../../public/images/car51.png"

const Hero: React.FC = () => {
  return (
    <section className="hero  bg-[url('/images/car51.png')]">


      <div className="overlay ml-[100px]">
        
        <div className="hero-content z-50">
          <div>
          <h1 className="">Try AR on your car windshield with VR reality solution</h1>
          <p>
            Together with AI you can display on the interface only those
            parameters that are interesting to the user, in addition to the
            default ones.
          </p>
          <div className="buttons">
            <a href="#technologies" className="btn primary">
              Our technologies
            </a>
            <a href="#pricing" className="btn secondary">
              Pricing
            </a>
          </div>
          </div>
          <p className=" max-w-[400px] text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat tenetur voluptatem cum, ad quod repudiandae perferendis repellat enim ipsum</p>
          
        </div>
        <div className="car-info">
          <div className="stop-distance">
            <span>1.5m Stop</span>
          </div>
          <div className="details">
            <span>Dead-end</span>
            <span>Workers on the road</span>
          </div>
          <div className="front-car">
            <span>1.2m Front Car</span>
          </div>
          <div className="speed-info">
            <span>60mph - 948 Sprn Av, NY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
