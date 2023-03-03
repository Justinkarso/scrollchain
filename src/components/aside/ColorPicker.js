import { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ stateKey, title, updateState, state }) => {
  const [colorStae, setColorState] = useState(state[stateKey]);
  const [showPicker, setShowPicker] = useState(false);
  const ref = useRef();
  // outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current) {
        if (!ref.current.contains(event.target)) {
          setShowPicker(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handlePicker = () => {
    setShowPicker(true);
  };

  return (
    <div className="flex items-center justify-between mt-2">
      <h3 className="text-sm opacity-80">{title}</h3>
      <div className="relative" ref={ref}>
        <div
          className="chrome-picker w-5 h-5 bg-zinc-700 rounded-[4px] cursor-pointer"
          style={{
            backgroundColor: `${colorStae}`,
          }}
          onClick={handlePicker}
        />
        {showPicker && (
          <div className="flex">
            <ChromePicker
              className="absolute z-20 top-7 right-0 chrome-picker"
              color={colorStae}
              onChange={(color) => {
                setColorState(color.hex);
                updateState(stateKey, color.hex);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
