function TopBar({ station }) {
  const incrementShares = () => {
    const url = `https://station-page.onrender.com/s/${station.url}`;
    // Increment the shares of the station in backend
    fetch(
      `https://linkstationbackend.onrender.com/api/v1/station/s/share/${station._id}`
    );

    navigator.clipboard.writeText(url);
  };

  return (
    <>
      <div className="flex justify-end p-4">
        <button
          onClick={incrementShares}
          className="size-8 rounded-full bg-slate-300 flex items-center justify-center"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency-systems-filled/50/forward-arrow.png"
            alt="forward-arrow"
          />
        </button>
      </div>
    </>
  );
}

export default TopBar;
