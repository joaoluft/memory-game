import { useState } from "react";
import { Start } from "Pages/Start";
import { Cards } from "Pages/Cards";

export const useApp = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Start setStep={setStep} />;
        break;
      case 2:
        return <Cards setStep={setStep} />
        break;
      default:
        return <Start />;
    }
  };

  return [renderStep, setStep];
};
