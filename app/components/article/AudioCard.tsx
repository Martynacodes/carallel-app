const AudioCard = () => {
  return (
    <div className="flex w-full flex-row items-center rounded-sm ">
      <audio
        controls
        className="flex-1 outline-none md:mr-5 "
        controlsList="nodownload"
      >
        <source src="audio/haydn.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioCard;
