import { useButtonContext } from "./ButtonContext";

const buttonData = [
  { text: "Overview", setActiveText: "overview" },
  { text: "Structure", setActiveText: "structure" },
  { text: "Surface", setActiveText: "geology" },
];

const ButtonGroup = ({ className = "" }) => {
  const context = useButtonContext();

  if (!context) {
    throw new Error("ButtonGroup must be used within a ButtonProvider");
  }
  const { activeBtn, setActiveBtn } = context;

  return (
    <div className={className}>
      {buttonData.map((button, i) => (
        <button
          key={button.setActiveText}
          onClick={() => setActiveBtn(button.setActiveText)}
          className={`cursor-pointer text-sm uppercase pb-3 font-[leagueSpartan] sm:border-1 sm:py-4 sm:text-left lg:text-lg ${
            activeBtn === button.setActiveText
              ? "border-b-4 sm:border-0 sm:bg-amber-800"
              : ""
          }`}
        >
          <span className="hidden sm:inline-block mx-4">{`0${i + 1}`}</span>
          <span>{button.text}</span>
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
