import React from 'react';
import img2 from './SliderImages/high-angle-small-tree-stack-coins.jpg';
import './ImageSlider.css';

function ImageSlider() {
  return (
    <div className="slider-container">
      <div className="reveal">
        <img 
          alt="Answer" 
          className="pic" 
          src={img2}  
        />
        <h2>"Plant the Seeds of Success with Our Loans."</h2>
        <h1>"Fuel Your Farm’s Future."</h1>
        <h3>"Growing Together."</h3>
        <p className="footer">()</p>
      </div>
      <div className="fact-box">
        <h4>Welcome to LOAN-LINK Agriculture Loans</h4>
        <p>
        Unlock Financial Support for Your Agricultural Needs
We understand the unique challenges of farming and the critical role it plays in feeding the world. At [Your Company Name], we’re dedicated to helping farmers, agribusinesses, and rural communities thrive with affordable, flexible loan options designed just for you.


        </p>
        <p>Our Loan Options</p>
        <ul>
          <li>Crop Loans: Secure funding for seeds, fertilizers, pesticides, and other essentials to boost your crop yield.</li>
          <li>Equipment Loans: Get the latest machinery and tools without upfront costs. Financing made easy and accessible.</li>
          <li>Livestock Loans: Expand your herd or improve your livestock operations with our specialized loans for animal husbandry.
          </li>
          <li>Agribusiness Loans: For entrepreneurs and rural businesses, we offer financing solutions to grow your agribusiness sustainably.</li>
        </ul>
        
        <p ><b>Success Stories
“Thanks to [Your Company Name], I expanded my farm and increased my yield by 30%. The application process was seamless, and the team truly understood my needs.”
— John, Wheat Farmer</b></p>
      </div>
    </div>
  );
}

export default ImageSlider;
