type Props = {
  id: string;
  title: string;
};

export function YoutubeEmbed({ id, title }: Props) {
  return (
    <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-md border border-border bg-walnut/10 shadow-[0_12px_40px_rgba(44,36,22,0.12)]">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
