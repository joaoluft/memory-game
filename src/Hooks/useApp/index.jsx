import { useState } from "react";
import { Start } from "Pages/Start";
import { Cards } from "Pages/Cards";

export const useApp = () => {
  const [step, setStep] = useState(2);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Start />;
        break;
      case 2:
        return <Cards />
        break;
      default:
        return <Start />;
    }
  };

  return [renderStep, setStep];
};
