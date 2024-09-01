import Social from "./Social.jsx";

function Socials({station}) {

  return (
    <>
      <div className="flex justify-center mt-8">
        <Social facebook={station.facebook} />
        <Social twitter={station.twitter} />
        <Social instagram={station.instagram} />
        <Social youtube={station.youtube} />
      </div>
    </>
  );
}

export default Socials;
