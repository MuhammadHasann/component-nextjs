import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import { useAnimate } from "framer-motion";

const clipPath: { [key: string]: string } = {
  NO_CLIP: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  TOP_CLIP: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  BOTTOM_CLIP: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
};

const ENTRANCE: { [key: string]: Array<string> } = {
  top: [clipPath.TOP_CLIP, clipPath.NO_CLIP],
  bottom: [clipPath.BOTTOM_CLIP, clipPath.NO_CLIP],
};

const EXIT: { [key: string]: Array<string> } = {
  top: [clipPath.NO_CLIP, clipPath.TOP_CLIP],
  bottom: [clipPath.NO_CLIP, clipPath.BOTTOM_CLIP],
};

const CategoryList: React.FC<{ title: string; href: string }> = ({ title, href }) => {
  const [scope, animate] = useAnimate();

  const getSide = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const rect = scope.current.getBoundingClientRect();

    const sortSide: Array<{ scope: number; side: string }> = [
      { scope: Math.abs(rect.top - e.clientY), side: "top" },
      { scope: Math.abs(rect.bottom - e.clientY), side: "bottom" },
    ].sort((a, b) => a.scope - b.scope);

    return sortSide[0].side;
  };

  const handleAnimation = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, isAnimate: boolean) => {
    const side = getSide(e);
    const paddingLeft = isAnimate ? ["2rem", "3rem"] : ["3rem", "2rem"];
    const clipPath = isAnimate ? ENTRANCE[side] : EXIT[side];

    animate(scope.current, {
      clipPath,
    });

    animate(scope.current.parentNode, {
      paddingLeft,
    });
  };

  return (
    <li
      className="w-full bg-light border-t border-dark"
      onMouseEnter={(e) => handleAnimation(e, true)}
      onMouseLeave={(e) => handleAnimation(e, false)}
      //
    >
      <Link href={href} className="relative flex justify-between items-center p-8 w-full">
        <span className="text-3xl font-light text-dark">{title}</span>
        <HiArrowUpRight className="text-2xl text-dark" />

        <div
          ref={scope}
          className="pointer-events-none absolute inset-0 flex justify-between items-center p-8 w-full bg-light mix-blend-difference"
          style={{
            clipPath: clipPath.TOP_CLIP,
          }}
        ></div>
      </Link>
    </li>
  );
};

export default CategoryList;
