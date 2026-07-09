type VideoEmbedProps = {
  vimeoId: string;
  title?: string;
  autoplay?: boolean;
  muted?: boolean;
  className?: string;
};

export function VideoEmbed({
  vimeoId,
  title = "Video",
  autoplay = false,
  muted = false,
  className = "",
}: VideoEmbedProps) {
  const params = new URLSearchParams({
    title: "0",
    byline: "0",
    portrait: "0",
    ...(autoplay ? { autoplay: "1", loop: "1" } : {}),
    ...(muted || autoplay ? { muted: "1", background: autoplay ? "1" : "0" } : {}),
  });

  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-ink ${className}`}>
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?${params.toString()}`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
