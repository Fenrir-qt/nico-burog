import "bootstrap-icons/font/bootstrap-icons.css";

function LinkBtn() {
  return (
    <>
      <button className="flex items-center gap-1 w-fit h-8 pl-2 pr-2 bg-black rounded-md text-white text-sm mt-2 cursor-pointer hover:bg-neutral-800 transform transition duration-200">
        Link 
        <i className="bi bi-box-arrow-up-right text-sm mb-0.5"></i>
      </button>
    </>
  );
}

export { LinkBtn };
