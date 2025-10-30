import { useState } from "react";
import Skeleton from "react-loading-skeleton";

export function ImageWithSkeleton({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Skeleton height={200} width="100%" />}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </>
  );
}
