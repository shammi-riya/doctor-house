import React from 'react';
import bannar1 from '../../assets/bannar1 (1).png'
import bannar2 from '../../assets/bannar1 (2).png'
import bannar3 from '../../assets/bannar1 (3).png'
import bannar from '../../assets/bannar.png'

const Bannar = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${bannar}")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content flex justify-between text-neutral-content">
    
      
  <div className="w-full">
  <div className="w-full text-neutral-content">
    <div className="w-full pr-4">
      <h1 className="mb-5 text-6xl font-bold">Your Best Medical Help Center</h1>
      <p className="mb-5">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry stardard.</p>
      <button className="bg-[#F7A582] py-3 px-6 text-white rounded-md text-xl">All Survice</button>
    </div>
  
</div>
      
    </div>
    <div className="w-full flex">
      <div className='relative'>
      <img  src={bannar3} alt="" />
      <img className='absolute top-1/2 left-1/2' src={bannar2} alt="" />
     
      </div>
      <img className='relative -top-12 z-10' src={bannar1} alt="" />
     
     
    </div>
  </div>
</div>
    );
};

export default Bannar;