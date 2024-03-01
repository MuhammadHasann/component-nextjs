const Button: React.FC<{ name: string; action: () => void }> = ({ name, action }) => {
  return (
    <button className={`group relative z-10 flex justify-center items-center gap-2 p-2 ${colors[name]} rounded-lg transition-all duration-300 ease-in-out hover:bg-opacity-75`} onClick={action}>
      <span
        className={`pointer-events-none absolute -z-10 -top-0 left-1/2 -translate-x-1/2 inline-block py-1 px-3 w-fit h-fit bg-dark text-xxs text-light capitalize rounded opacity-0 scale-0 origin-[50%_120%]
                    transition-all duration-300 ease-in-out
                    before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:bg-dark before:rotate-45
                    group-hover:-top-[115%] group-hover:opacity-100 group-hover:scale-100 group-hover:animate-wiggle group-hover:origin-[0%_120%]`}
      >
        {name}
      </span>
      {icons[name]}
    </button>
  );
};

export default Button;

const icons: { [key: string]: JSX.Element } = {
  add: (
    <>
      <span className="text-xs font-semibold text-light">item</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="pointer-events-none w-4 h-4 fill-light">
        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
      </svg>
    </>
  ),
  delete: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="pointer-events-none w-4 h-4 fill-slate-800 group-hover:fill-slate-600">
      <path
        fillRule="evenodd"
        d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  edit: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="pointer-events-none w-4 h-4 fill-slate-800 group-hover:fill-slate-600">
      <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
      <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
    </svg>
  ),
};

const colors: { [key: string]: string } = {
  add: "bg-dark",
  delete: "bg-delete",
  edit: "bg-edit",
};
