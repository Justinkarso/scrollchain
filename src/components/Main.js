import ScrollWrapper from "./main/ScrollWrapper";
import InnerText from "./main/InnerText";

const Main = ({ styles }) => {
  return (
    <main className="relative md:left-[400px] p-4 md:px-12 bg-zinc-800 w-full md:w-[calc(100%-400px)] md:min-h-screen flex flex-col gap-2 md:items-center justify-center">
      <ScrollWrapper styles={styles}>
        <InnerText />
      </ScrollWrapper>
      <div className="flex flex-row gap-4">
        <button>Star on github</button>
        <button>Buy me a coffee</button>
      </div>
    </main>
  );
};

export default Main;
