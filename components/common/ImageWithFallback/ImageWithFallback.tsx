"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  fallbackPath?: string;
};

export default function ImageWithFallback({ src, alt = "", className, fallbackPath="/images/no_image.jpg" }: Props) {
  const [hasFailed, setHasFailed] = useState(false);

  const imageSrc = hasFailed ? fallbackPath : src;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={className}
      fill
      onError={() => setHasFailed(true)}
      unoptimized
    />
  );
}
