import styled from "styled-components";
import ColorPicker from "./aside/ColorPicker";
import Navigation from "./aside/Navigation";
import RangeSlider from "./aside/RangeSlider";

const Aside = ({ updateState, state }) => {
  const obj = `body::-webkit-scrollbar {
  width: ${state.scrollWidth}px;
}

body::-webkit-scrollbar-track {
  background: ${state.trackColor};
  border-radius: ${state.scrollBorderRadius}px;
}

body::-webkit-scrollbar-thumb {
  background: ${state.thumbColor};
  border: ${state.thumbBorderWidth}px solid ${state.borderColor};
  border-radius: ${state.thumbBorderRadius}px;
}`;

  return (
    <StyledAside className="py-8 md:py-4 p-4 bg-zinc-900 md:fixed inset-0 right-auto w-full md:w-[400px] z-10 overflow-y-auto">
      <Navigation />
      <section className="mt-4">
        <h2 className="font-medium opacity-80">Settings</h2>
        <h4 className="text-xs opacity-50 mt-4">In-app</h4>
        <div className="flex flex-col">
          <ColorPicker
            stateKey="backgroundColor"
            title="Background Color"
            updateState={updateState}
            state={state}
          />
          <ColorPicker
            stateKey="textColor"
            title="Text Color"
            updateState={updateState}
            state={state}
          />
        </div>
        <h4 className="text-xs opacity-50 mt-4">Colors</h4>
        <div className="flex flex-col">
          <ColorPicker
            stateKey="thumbColor"
            title="Thumb Color"
            updateState={updateState}
            state={state}
          />
          <ColorPicker
            stateKey="borderColor"
            title="Thumb Border Color"
            updateState={updateState}
            state={state}
          />
          <ColorPicker
            stateKey="trackColor"
            title="Track Color"
            updateState={updateState}
            state={state}
          />
          <h4 className="text-xs opacity-50 mt-4">Sizing</h4>
          <RangeSlider
            keyState="scrollWidth"
            title="Scrollbar Width"
            updateState={updateState}
            state={state}
          />
          <RangeSlider
            keyState="scrollBorderRadius"
            title="Scrollbar Border Radius"
            updateState={updateState}
            state={state}
            max={25}
          />
          <RangeSlider
            keyState="thumbBorderRadius"
            title="Thumb Border Radius"
            updateState={updateState}
            state={state}
            max={25}
          />
          <RangeSlider
            keyState="thumbBorderWidth"
            title="Thumb Border Width"
            updateState={updateState}
            state={state}
            max={state.scrollWidth / 2}
          />
        </div>
      </section>
      <button className="mt-6 rounded-t-[4px] w-[180px] h-[40px] text-sm group transition-all font-medium text-white bg-zinc-800 px-4 py-2">
        <div
          className="group-hover:-translate-y-[2px] group-active:translate-y-0 transition-all"
          onClick={() => navigator.clipboard.writeText(obj)}
        >
          Copy code
        </div>
      </button>
      <StyledAside className="p-4 bg-zinc-800 rounded-r-[4px] rounded-b-[4px] overflow-x-scroll">
        <pre>
          <code className="opacity-70">{obj}</code>
        </pre>
      </StyledAside>
    </StyledAside>
  );
};

export default Aside;

const StyledAside = styled.aside`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #27272a;
  }

  &::-webkit-scrollbar-thumb {
    background: #101010;
    border-radius: 8px;
    border: 2px solid #27272a;
  }
`;
