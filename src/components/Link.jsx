function Link({ link }) {
  const url = link.url.startsWith("http") ? link.url : `http://${link.url}`;
  const incrementClicks =  () => {
    // Increment the clicks of the link in backend
    fetch(
      `https://linkstationbackend.onrender.com/api/v1/link/l/click/${link._id}`
    );
    window.location.href = url;
  };
  return (
    <>
      <a onClick={incrementClicks} target="_blank" className="cursor-pointer">
        <div className="mt-6 min-w-[24rem] h-10 max-w-[40rem] flex justify-between items-center bg-[#ffffff] border rounded-md drop-shadow-lg hover:scale-105 transition-all duration-300">
          <img
            className="border rounded-lg size-8 self-center mx-1"
            src={link.image} // Use link.image for the image source
            alt={link.title} // Use link.title for the alt text
          />
          <h1 className="text-sm space-mono-regular self-center">
            {link.title}
          </h1>
          <button
            className="mx-1 self-center"
            onClick={() => navigator.clipboard.writeText(link.url)}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/fluency-systems-regular/50/copy--v1.png"
              alt="Copy Link"
              className="invisible"
            />
          </button>
        </div>
      </a>
    </>
  );
}

export default Link;
