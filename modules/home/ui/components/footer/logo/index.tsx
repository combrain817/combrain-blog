import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <svg
        width="110"
        height="20"
        viewBox="0 0 110 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="15"
          fill="currentColor"
          fontSize="16"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          textAnchor="start"
        >
          Combrain-Log
        </text>
      </svg>
    </Link>
  );
};
