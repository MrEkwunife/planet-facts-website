import Link from "next/link";

const Logo = ({ className }: { className: string }) => {
  return (
    <Link href={"/"} className={className}>
      THE PLANETS
    </Link>
  );
};

export default Logo;
