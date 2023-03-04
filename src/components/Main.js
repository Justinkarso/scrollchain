import ScrollWrapper from "./main/ScrollWrapper";
import InnerText from "./main/InnerText";
import IconStar from "./icons/IconStar";
import IconCoffee from "./icons/IconCoffee";
import Link from "next/link";

const Main = ({ styles }) => (
  <main className="relative md:left-[400px] p-4 md:px-12 bg-zinc-800 w-full md:w-[calc(100%-400px)] md:min-h-screen flex flex-col gap-2 md:items-center justify-center">
    <ScrollWrapper styles={styles}>
      <InnerText />
    </ScrollWrapper>
    <div className="flex flex-row gap-4 mt-4 justify-center">
      <Link
        href="https://github.com/justinkarso/scrollchain"
        target="_blank"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:-translate-y-[2px] active:translate-y-[2px] transition-all flex items-center justify-center"
      >
        <IconStar className="w-4 h-4 mr-2" />
        <span>Star on github</span>
      </Link>
    </div>
  </main>
);

export default Main;
