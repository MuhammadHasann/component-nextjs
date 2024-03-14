import Link from "next/link";

const Copyright = () => {
  return (
    <Link href="https://www.framer.com/motion/" className="fixed z-50 bottom-5 right-5 flex items-center gap-3 py-3 px-5 bg-light rounded-lg shadow-md">
      <svg className="w-5" viewBox="3.7 3.7 43.6 43.6" xmlns="http://www.w3.org/2000/svg">
        <path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#000000" />
        <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#000000" />
        <path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#000000" />
      </svg>
      <span className="text-xs font-semibold text-dark">Made with Framer Motion</span>
    </Link>
  );
};

export default Copyright;
