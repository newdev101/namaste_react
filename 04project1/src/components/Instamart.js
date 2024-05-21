import Shimmer from "./Shimmer";
import { useState } from "react";

const Section = ({ title, description, isHidden, setIsHidden }) => {
  return (
    <div className="border border-black p-4 m-4" onClick={() => setIsHidden()} >
      <h1 className="text-xl font-bold">{title}</h1>
      {/* {isHidden ? (
        <button onClick={() => setIsHidden()}>hide</button>
      ) : (
        <button onClick={() => setIsHidden()} className="mr-3">
          show
        </button>
      )} */}
      {isHidden && <p className="text-blue-700">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    about: false,
    products: false,
    services: false,
  });
  return (
    <div id="instamart-container">
      <Section
        isHidden={sectionConfig.about}
        setIsHidden={() =>
          setSectionConfig({
            about: true,
            products: false,
            services: false,
          })
        }
        title={"ABOUT"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, "
        }
      />

      <Section
        isHidden={sectionConfig.products}
        setIsHidden={() =>
          setSectionConfig({
            about: false,
            products: true,
            services: false,
          })
        }
        title={"PRODUCTS"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, "
        }
      />

      <Section
        isHidden={sectionConfig.services}
        setIsHidden={() =>
          setSectionConfig({
            about: false,
            products: false,
            services: true,
          })
        }
        title={"SERVICES"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, "
        }
      />
    </div>
  );
};

export default Instamart;
