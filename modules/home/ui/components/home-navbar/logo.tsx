import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/image/devlog.png" alt="Logo" width={50} height={50} />
    </Link>
  );
};
