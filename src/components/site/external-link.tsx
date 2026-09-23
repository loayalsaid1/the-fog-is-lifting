import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"a"> & {
  href: string;
};

export function ExternalLink({ className, children, ...props }: Props) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noreferrer noopener"
      className={cn("cursor-pointer", className)}
    >
      {children}
    </a>
  );
}
