import Aside from "@/components/Aside";
import Main from "@/components/Main";
import { useState } from "react";

const INIT_STATE = {
  backgroundColor: "#1E1E1E",
  textColor: "#E5E5E5",
  thumbColor: "#232323",
  trackColor: "#101010",
  borderColor: "#101010",
  scrollWidth: 14,
  scrollBorderRadius: 5,
  thumbBorderRadius: 5,
  thumbBorderWidth: 4,
};

export default function Home() {
  const [state, setState] = useState(INIT_STATE);

  const updateState = (key, value) => {
    if (state.hasOwnProperty(key)) {
      setState({ ...state, [key]: value });
    }
  };

  return (
    <div className="flex flex-col w-full bg-zinc-900">
      <Aside updateState={updateState} state={state} />
      <Main styles={state} />
    </div>
  );
}
