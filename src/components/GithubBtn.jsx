import GithubIcon from "../assets/images/github.png"
function GitBtn() {
  return (
    <>
      <button className="flex items-center gap-1 w-fit h-8 pl-2 pr-1 bg-black rounded-md text-white text-sm mt-2 cursor-pointer hover:bg-neutral-800 transform transition duration-200">
        GitHub
        <img
          src={GithubIcon}
          alt="GitHub"
          className="w-6 h-6 mb-0.5"
        />
      </button>
    </>
  );
}

export { GitBtn };
