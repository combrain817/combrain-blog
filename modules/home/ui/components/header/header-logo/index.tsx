import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <svg
        width="140"
        height="40"
        viewBox="0 0 140 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="23"
          fill="currentColor"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          textAnchor="start"
          dominantBaseline="middle"
        >
          Combrain-Log
        </text>
      </svg>
    </Link>
  );
};
