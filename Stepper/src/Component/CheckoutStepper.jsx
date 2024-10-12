import React, { useEffect, useState, useRef } from "react";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, stepMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    stepMargins({
      marginleft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef, stepsConfig.length]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / stepsConfig.length - 1) * 100;
  };
  const ActiveComponent = stepsConfig[currentStep - 1].Component;

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((steps, idx) => {
          return (
            <div
              key={steps.name}
              ref={(el) => (stepRef.current[idx] = el)}
              className={`step ${
                currentStep > idx + 1 || isComplete ? "complete" : ""
              }${currentStep === idx + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > idx + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  idx + 1
                )}
              </div>
              <div className="step-name">{steps.name}</div>
            </div>
          );
        })}
        ;
        <div
          className="progress-bar"
          style={{
            width: `calc(100%-${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>
      <ActiveComponent />

      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;
