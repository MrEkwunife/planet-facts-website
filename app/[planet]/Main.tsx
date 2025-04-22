import PlanetDataSummary from "@/components/PlanetDataSummary";
import PlanetImage from "@/components/PlanetImage";
import PlanetText from "@/components/PlanetTexts";
import { useButtonContext, ButtonProvider } from "@/components/ButtonContext";

import data from "@/data.json";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

const Main = ({ children }: { children?: ReactNode }) => {
  const btnContext = useButtonContext();
  if (!btnContext) {
    throw new Error("...");
  }
  const { activeBtn } = btnContext;
  const { planet } = useParams();
  const findSelectedPlanet = data.find((d) => {
    const newDataName = d.name[0].toLowerCase() + d?.name.slice(1);
    return newDataName === planet;
  });

  const planetComponentImgSrc =
    activeBtn === "overview"
      ? findSelectedPlanet?.images.planet
      : activeBtn === "structure"
      ? findSelectedPlanet?.images.internal
      : findSelectedPlanet?.images.geology;

  const planetTexComponentObj =
    activeBtn === "overview"
      ? findSelectedPlanet?.overview
      : activeBtn === "structure"
      ? findSelectedPlanet?.structure
      : findSelectedPlanet?.geology;

  return (
    <div className="flex flex-col items-center mt-28 text-center lg:flex-row lg:flex-wrap gap-y-20">
      <PlanetImage src={planetComponentImgSrc} />
      <div className="sm:flex sm:items-center sm:px-8 sm:gap-8 lg:flex-col lg:items-stretch lg:flex-1/3 lg:pr-52">
        <PlanetText
          header={findSelectedPlanet?.name || ""}
          body={planetTexComponentObj?.content || ""}
          link={planetTexComponentObj?.source || ""}
        />
        {children}
      </div>
      <PlanetDataSummary
        rotation={findSelectedPlanet?.rotation}
        revolution={findSelectedPlanet?.revolution}
        radius={findSelectedPlanet?.radius}
        temperature={findSelectedPlanet?.temperature}
      />
    </div>
  );
};

export default Main;
