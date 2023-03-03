import { useState } from "react";

const RangeSlider = ({ keyState, title, updateState, state, max }) => {
  const [value, setValue] = useState(state[keyState]);

  return (
    <div className="flex items-center justify-between mt-2">
      <h3 className="text-sm opacity-80">{title}</h3>
      <div className="relative flex items-center justify-between gap-2">
        <input
          type="range"
          min="0"
          max={max || "50"}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            updateState(keyState, Number(e.target.value));
          }}
          className="w-full h-2 bg-zinc-800 rounded-full cursor-pointer appearance-none"
        />

        <span className="text-xs min-w-[20px] text-end">{value}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
