import styled from "styled-components";

const ScrollWrapper = styled(({ className, children }) => {
  return (
    <div className="flex flex-col shadow-xl">
      <div className="h-8 bg-zinc-700 rounded-t-[4px] flex items-center">
        <div className="flex px-4 items-center justify-between w-full gap-2">
          <span className="text-zinc-400">&larr;</span>
          <div className="h-4 bg-zinc-800 w-[90%] rounded-md"></div>
          <div className="flex gap-2">
            <span className="h-2 w-2 bg-amber-500 rounded-full"></span>
            <span className="h-2 w-2 bg-zinc-500 rounded-full"></span>
            <span className="h-2 w-2 bg-red-500 rounded-full"></span>
          </div>
        </div>
      </div>
      <div className={`${className} p-8 max-h-[400px] overflow-y-auto`}>
        {children}
      </div>
    </div>
  );
})`
  background: ${(props) => props.styles.backgroundColor};
  color: ${(props) => props.styles.textColor};
  &::-webkit-scrollbar {
    width: ${(props) => props.styles.scrollWidth}px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.styles.trackColor};
    border-radius: ${(props) => props.styles.scrollBorderRadius}px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.styles.thumbColor};
    border: ${(props) => props.styles.thumbBorderWidth}px solid
      ${(props) => props.styles.borderColor};
    border-radius: ${(props) => props.styles.thumbBorderRadius}px;
  }
`;

export default ScrollWrapper;
