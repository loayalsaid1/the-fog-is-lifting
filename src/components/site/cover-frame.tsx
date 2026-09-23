import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageOrientation } from "@/lib/catalog";

type Props = {
  src: string;
  alt: string;
  orientation: ImageOrientation;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function CoverFrame({
  src,
  alt,
  orientation,
  width,
  height,
  priority,
  sizes,
  className,
}: Props) {
  const landscape = orientation === "landscape";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md border border-border bg-secondary shadow-[0_16px_40px_rgba(44,36,22,0.1)]",
        landscape ? "w-full" : "w-full max-w-[22rem]",
        className
      )}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={
          sizes ??
          (landscape
            ? "(max-width: 1024px) 92vw, 860px"
            : "(max-width: 768px) 70vw, 352px")
        }
        className="object-cover"
      />
    </div>
  );
}
