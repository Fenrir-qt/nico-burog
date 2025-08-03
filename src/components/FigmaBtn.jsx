import { FaFigma } from "react-icons/fa";

function FigmaBtn() {
  return (
    <>
      <button className="flex items-center gap-1 w-fit h-8 pl-2 pr-2 bg-black rounded-md text-white text-sm mt-2 cursor-pointer hover:bg-neutral-800 transform transition duration-200">
        Figma
        <FaFigma />
      </button>
    </>
  );
}

export { FigmaBtn };
