import ParticlesComponent from "./Particles";
function ParticlesBackground() {
  return (
    <>
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <ParticlesComponent id="static-particles-id" />
        </div>
      </div>
    </>
  );
};

export { ParticlesBackground };