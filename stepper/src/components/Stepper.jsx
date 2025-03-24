import React, { useState } from "react";
import "./stepper.css";

const steps = [
  {
    step: 1,
    name: "Contact Details",
    description: "Add contact details for further communications",
    isCompleted: false,
  },
  {
    step: 2,
    name: "Shipping Address",
    description: "Add shipping address to successfully deliver",
    isCompleted: false,
  },
  {
    step: 3,
    name: "Payment",
    description: "Complete the payment to complete the order.",
    isCompleted: false,
  },
  {
    step: 4,
    name: "Delivered",
    description: "Ready to get delivered",
    isCompleted: false,
  },
];

const Stepper = () => {
  const [mileStones, setMileStones] = useState(steps);
  const [currentStep, setCurrentStep] = useState(1);
  const [width, setWidth] = useState(0);

  const handleNextClick = () => {
    setCurrentStep((prev) => {
      if (prev < 4) {
        return prev + 1;
      }
      return prev;
    });
    setWidth((prev) => {
      if (prev <= 75) {
        console.log("aaaaa");
        return prev + 33.3;
      }
      return prev;
    });
    setMileStones((prev) => {
      let newArr = prev.map((step) => {
        if (step.step === currentStep) {
          step.isCompleted = true;
        }
        return step;
      });
      console.log(newArr);
      return newArr;
    });
  };
  const handlePreviousClick = () => {
    setCurrentStep((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
    setWidth((prev) => {
      if (prev >= 25) {
        return prev - 33.3;
      }
      return prev;
    });
    setMileStones((prev) => {
      let newArr = prev.map((step) => {
        if (step.step === currentStep) {
          step.isCompleted = false;
        }
        return step;
      });
      console.log(newArr);
      return newArr;
    });
  };
  return (
    <div className=" container">
      <h1>Stepper</h1>
      <div className="base">
        <div className="step-container">
          {mileStones.map((step, index) => {
            return (
              <div
                className={`step 
              ${step.step === 4 ? "step-4" : ""}  `}
              >
                <span
                  className={`step-num ${
                    currentStep === step.step ? "current-step" : ""
                  } 
                  ${step.isCompleted ? "step-completed" : ""}
                  ${step.step === 4 ? "step-4" : ""}  `}
                >
                  {step.isCompleted ? <>&#10003;</> : step.step}
                </span>
                <span>{step.name}</span>
              </div>
            );
          })}
        </div>
        <div
          className="progress-bar"
          style={{ backgroundColor: "green", width: `${width}%` }}
        ></div>
      </div>
      <div className="desc-btn">
        {mileStones
          .filter((step) => step.step === currentStep)
          .map((step) => (
            <div>{step.description}</div>
          ))}
        <div className="btn-container">
          <button onClick={handlePreviousClick} className="btn">
            previous
          </button>
          <button onClick={handleNextClick} className="btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
