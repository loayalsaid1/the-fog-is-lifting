import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-start justify-center px-4 py-24">
      <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.28em] text-brass uppercase">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl text-walnut">This page is not in the library.</h1>
      <p className="mt-3 text-muted-foreground">
        The volume you asked for is not on these shelves.
      </p>
      <Button asChild variant="brass" className="mt-8">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
