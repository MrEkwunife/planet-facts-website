const PlanetDataSummary = ({
  rotation,
  revolution,
  radius,
  temperature,
}: {
  rotation: string | undefined;
  revolution: string | undefined;
  radius: string | undefined;
  temperature: string | undefined;
}) => {
  return (
    <footer className="flex flex-col items-stretch self-stretch px-4 gap-2.5 sm:px-12 sm:flex-row sm:justify-between flex-1 lg:px-52 lg:gap-8">
      <div className="border py-2 px-4 sm:px-2 flex justify-between items-center sm:flex-col sm:items-start sm:flex-1/4 gap-2 sm:py-4">
        <h3 className="text-xs font-[leagueSpartan] lg:text-lg">
          ROTATION TIME
        </h3>
        <p className="text-2xl sm:text-2xl lg:text-4xl font-[antonio]">
          {rotation}
        </p>
      </div>
      <div className="border py-2 px-4 sm:px-2 flex justify-between items-center sm:flex-col sm:items-start sm:flex-1/4 gap-2 sm:py-4">
        <h3 className="text-xs font-[leagueSpartan] lg:text-lg">
          REVOLUTION TIME
        </h3>
        <p className="text-2xl sm:text-2xl lg:text-4xl font-[antonio]">
          {revolution}
        </p>
      </div>
      <div className="border py-2 px-4 sm:px-2 flex justify-between items-center sm:flex-col sm:items-start sm:flex-1/4 gap-2 sm:py-4">
        <h3 className="text-xs font-[leagueSpartan] lg:text-lg">RADIUS</h3>
        <p className="text-2xl sm:text-2xl lg:text-4xl font-[antonio]">
          {radius}
        </p>
      </div>
      <div className="border py-2 px-4 sm:px-2 flex justify-between items-center sm:flex-col sm:items-start sm:flex-1/4 gap-2 sm:py-4">
        <h3 className="text-xs font-[leagueSpartan] lg:text-lg">
          AVERAGE TEMP.
        </h3>
        <p className="text-2xl sm:text-2xl lg:text-4xl font-[antonio]">
          {temperature}
        </p>
      </div>
    </footer>
  );
};

export default PlanetDataSummary;
