import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
  className?: string;
};

export function OptimizedImage({ alt, className, sizes, ...props }: Props) {
  return (
    <Image
      alt={alt}
      sizes={sizes ?? "(max-width: 768px) 90vw, 420px"}
      className={cn("h-auto w-full object-cover", className)}
      {...props}
    />
  );
}
