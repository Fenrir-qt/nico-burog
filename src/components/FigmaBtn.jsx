import FigmaIcon from "../assets/images/figma.png"

function FigmaBtn() {
  return (
    <>
      <button className="flex items-center gap-1 w-fit h-8 pl-2 pr-1 bg-black rounded-md text-white text-sm mt-2 cursor-pointer hover:bg-neutral-800 transform transition duration-200">
        Figma
        <img
          src={FigmaIcon}
          alt="GitHub"
          className="w-5 h-5 mb-0.5"
        />
      </button>
    </>
  );
}

export { FigmaBtn };
