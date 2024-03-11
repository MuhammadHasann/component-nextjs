import {
  SiAdidas,
  SiNike,
  SiPuma,
  SiReebok,
  SiUnderarmour,
  SiThenorthface,
  SiNewbalance,
  SiFila,
  SiJordan,
  //
} from "react-icons/si";
import LinkBox from "./LinkBox";

const Category = () => {
  return (
    <section className="flex justify-center items-center w-full min-h-dvh bg-light">
      <div className="container">
        <div className="flex flex-col justify-center items-center w-full">
          <TitleLinkBox title="High" />
          <div className="grid grid-cols-2 w-full h-60">
            <LinkBox Icon={SiAdidas} href="#" />
            <LinkBox Icon={SiNike} href="#" />
          </div>
          <TitleLinkBox title="Medium" />
          <div className="grid grid-cols-4 w-full h-36">
            <LinkBox Icon={SiPuma} href="#" />
            <LinkBox Icon={SiReebok} href="#" />
            <LinkBox Icon={SiUnderarmour} href="#" />
            <LinkBox Icon={SiThenorthface} href="#" />
          </div>
          <TitleLinkBox title="Low" />
          <div className="grid grid-cols-3 w-full h-44">
            <LinkBox Icon={SiNewbalance} href="#" />
            <LinkBox Icon={SiFila} href="#" />
            <LinkBox Icon={SiJordan} href="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;

const TitleLinkBox: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="p-3 w-full border border-dark">
      <span className="text-sm font-medium text-dark">{title}</span>
    </div>
  );
};
