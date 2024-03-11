import { useAnimate } from "framer-motion";
import Link from "next/link";
import { sideProximity } from "./type";

const NO_CLIP: string = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP: string = "polygon(0 0, 100% 0, 0 0, 0 100%)";
const BOTTOM_LEFT_CLIP: string = "polygon(0 0, 0 100%, 100% 100%, 0 100%)";
const TOP_RIGHT_CLIP: string = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
const BOTTOM_RIGHT_CLIP: string = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";

const enterLinkBox: { [key: string]: Array<string> } = {
  top: [TOP_LEFT_CLIP, NO_CLIP],
  right: [TOP_RIGHT_CLIP, NO_CLIP],
  bottom: [TOP_LEFT_CLIP, NO_CLIP],
  left: [TOP_LEFT_CLIP, NO_CLIP],
};

const leaveLinkBox: { [key: string]: Array<string> } = {
  top: [NO_CLIP, BOTTOM_LEFT_CLIP],
  right: [NO_CLIP, BOTTOM_RIGHT_CLIP],
  bottom: [NO_CLIP, BOTTOM_LEFT_CLIP],
  left: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox: React.FC<{ Icon: React.ElementType; href: string }> = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getSide = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const rect = scope.current.getBoundingClientRect();

    const sideDistances: Array<sideProximity> = [
      { scope: Math.abs(rect.top - e.clientY), side: "top" },
      { scope: Math.abs(rect.left - e.clientX), side: "left" },
      { scope: Math.abs(rect.bottom - e.clientY), side: "bottom" },
      { scope: Math.abs(rect.right - e.clientX), side: "right" },
    ];

    return sideDistances.sort((a, b) => a.scope - b.scope)[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const side = getSide(e);

    animate(scope.current, {
      clipPath: enterLinkBox[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const side = getSide(e);

    animate(scope.current, {
      clipPath: leaveLinkBox[side],
    });
  };

  return (
    <Link
      href={href}
      className="relative grid place-content-center w-full h-full bg-light border border-dark"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      //
    >
      <Icon className="text-6xl text-dark" />
      <div
        ref={scope}
        className="absolute inset-0 grid place-content-center bg-dark"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 0, 0 100%)",
        }}
      >
        <Icon className="text-6xl text-light" />
      </div>
    </Link>
  );
};

export default LinkBox;
