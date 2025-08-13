import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui adipisci
        fugiat laudantium molestias obcaecati doloribus nam. Lorem, ipsum dolor sit amet consectetur adipisicing.
      </p>
      <Image src="images/cta.svg" alt="CTA"
        height={232} width={362} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus"
          height={12} width={12} />
      </button>
    </section>
  );
};

export default CTA;
