import React from 'react';
import './FurnitureProtectionPlan.css';
export default function FurnitureProtectionPlan() {
  return (
    <div className="furniture-protection-plan-container">
      <div>
        <input
          type="checkbox"
          name="protection-plan"
          className="protection-plan-checkbox"
        ></input>
      </div>
      <div className="furniture-protection-plan-h1-container">
        <h1 className="furniture-protection-plan-h1">
          2 Year Furniture Protection Plan {'('}$1000-$1499.99{')'} - Allstate
        </h1>
        <p className="protection-plan-price">
          $120.00 -{' '}
          <a href="target.com" id="plan-details">
            See plan details
          </a>
        </p>
      </div>
    </div>
  );
}
