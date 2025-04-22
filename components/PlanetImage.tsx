import Image from "next/image";

const PlanetImage = ({ src }: { src: string | undefined }) => {
  return (
    <div className="flex-1/2">
      <img
        src={src}
        alt="Look of planet"
        className="w-1/2 lg:w-1/3 mx-auto mb-32"
      />
    </div>
  );
};

export default PlanetImage;
