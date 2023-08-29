import React from 'react';

import { overview } from '../data';

const Overview = () => {
  // destructure data
  const { productImg } = overview;

  return (
    <section
      className=" bg-overview bg-cover bg-left-top 
    pt-[30px] lg:pt-[87px]"
    >
      <div className=" container mx-auto ">
        <img
          src={productImg}
          alt=""
          data-aos="fade-down"
          data-aos-offset="300"
        />
      </div>
    </section>
  );
};

export default Overview;
