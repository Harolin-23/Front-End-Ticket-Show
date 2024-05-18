import React from "react";
import { useState } from "react";
import "../Css-Gen/info.css";

export function InfoUs() {
  return (
    <div className="info-s">
      <div className="cd-icon">
        <i class="fa-solid fa-percent"></i>
        <h6>
          No interest rates.<br></br>Cumulative
        </h6>
        <p>We have the best payment management for your optimal economy</p>
      </div>
      <div className="cd-icon">
        <i class="fa-solid fa-shield-halved"></i>
        <h6>
          The highest security<br></br>In your purchases
        </h6>
        <p>We take care of verifying potential fraud in transactions</p>
      </div>
      <div className="cd-icon">
        <i class="fa-solid fa-shop"></i>
        <h6>
        Physical stores<br></br>And easy for everyone
        </h6>
        <p>We have many other accessible ways to purchase tickets.</p>
      </div>
      <div className="cd-icon">
        <i class="fa-solid fa-location-dot"></i>
        <h6>
        Much closer.<br></br>We are available
        </h6>
        <p>Events near you for greater integration</p>
      </div>
    </div>
  );
}
