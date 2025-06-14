import Link from "next/link";

export const Logo = () => {
  return (
    <h1>
      <Link href="/">
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="10"
            y="25"
            fill="currentColor"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            Combrain-Log
          </text>
        </svg>
      </Link>
    </h1>
  );
};
