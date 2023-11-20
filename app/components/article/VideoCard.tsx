import Script from "next/script";

const VideoCard = () => {
  return (
    <div className="flex justify-center rounded-3xl my-8 mt-4 w-full">
      <div className="rounded-3xl shadow-lg bg-white max-w-full">
        <iframe
          src="https://player.vimeo.com/video/879408384?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className=" w-full rounded-3xl"
          title="Video Title"
        ></iframe>
      </div>
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="lazyOnload"
      />
    </div>
  );
};

export default VideoCard;
