import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";

const navItems = [
  { id: 1, text: "MECURY", url: "mercury", color: "#DEF4FC" },
  { id: 2, text: "VENUS", url: "venus", color: "#F7CC7F" },
  { id: 3, text: "EARTH", url: "earth", color: "#545BFE" },
  { id: 4, text: "MARS", url: "mars", color: "#FF6A45" },
  { id: 5, text: "JUPITER", url: "jupiter", color: "#ECAD7A" },
  { id: 6, text: "SATURN", url: "saturn", color: "#FCCB6B" },
  { id: 7, text: "URANUS", url: "uranus", color: "#65F0D5" },
  { id: 8, text: "NEPTUNE", url: "neptune", color: "#497EFA" },
];

const navList = navItems.map((item) => (
  <li key={item.id}>
    <Link
      href={`/${item.url}`}
      className="flex justify-between items-center border-b-1 py-4 sm:border-0"
    >
      <div className="flex items-center gap-3">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:hidden"
        >
          <circle cx="10" cy="10" r="10" fill={`${item.color}`} />
        </svg>
        <span>{item.text}</span>
      </div>

      {/* Hidden for meduim screen sizes and above */}
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sm:hidden"
      >
        <path opacity="0.4" d="M1 1L5 5L1 9" stroke="black" />
      </svg>
    </Link>
  </li>
));

const NavLinks = ({ className }: { className?: string }) => (
  <ul className={className}>{navList}</ul>
);

export default NavLinks;
