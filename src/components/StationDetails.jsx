function StationDetails({station}) {
  return (
    <>
      <div className="flex justify-center p-6">
        <img
          src={station.image}
          alt=""
          className="rounded-full size-20 object-cover"
          id="station-image"
        />
      </div>
      <div>
        <h1
          className="text-xl text-center space-grotesk-medium"
          id="station-title"
        >
          {station.title}
        </h1>
        <p
          className="text-sm text-center space-mono-regular"
          id="station-description"
        >
          {station.description}
        </p>
      </div>
    </>
  );
}

export default StationDetails;
