import { useState } from "react";
import { Start } from "Pages/Start";
import { Cards } from "Pages/Cards";
import { Leaderboard } from "Pages/Leaderboard";

export const useApp = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Start setStep={setStep} />;
        break;
      case 2:
        return <Cards setStep={setStep} />;
        break;
      case 3:
        return <Leaderboard setStep={setStep} />;
        break;
      default:
        return <Start />;
    }
  };

  return [renderStep, setStep];
};
