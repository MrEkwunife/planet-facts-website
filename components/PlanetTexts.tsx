const PlanetText = ({
  header,
  body,
  link,
}: {
  header: string;
  body: string;
  link: string;
}) => {
  return (
    <main className="px-4 mb-8 sm:flex-2/3 sm:text-left">
      <h2 className="text-5xl lg:text-6xl font-[antonio] uppercase mb-5 lg:mb-6">
        {header}
      </h2>
      <p className="font-[leagueSpartan] mb-8 lg:text-lg">{body}</p>
      <div className="flex justify-center gap-1 font-[leagueSpartan] sm:justify-start">
        <p>Source:</p>
        <a
          href={link}
          className="font-[leagueSpartan] flex justify-center items-center"
        >
          <span>Wikipedia</span>
          <img src="/icon-source.svg" alt="icon" />
        </a>
      </div>
    </main>
  );
};

export default PlanetText;
