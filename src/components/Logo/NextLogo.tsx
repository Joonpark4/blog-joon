"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import logoBlack from "@/../public/img/nextLogoBlack.png";
import logoWhite from "@/../public/img/nextLogoWhite.png";
import { useEffect, useState } from "react";

export default function NextLogo() {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      setIsDark(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  return (
    <div className="self-stretch text-xs w-full flex justify-center items-center mt-4 gap-1">
      <div>Powered by</div>

      {isDark ? (
        // 다크모드일 때 렌더링
        <Image
          src={logoWhite}
          alt="v0_logo"
          className="animate-neon"
          width={45}
        />
      ) : (
        // 라이트모드일 때 렌더링
        <Image
          src={logoBlack}
          alt="v0_logo"
          className="animate-neon"
          width={45}
        />
      )}
    </div>
  );
}