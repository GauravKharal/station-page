function Social({ facebook, twitter, instagram, youtube }) {
  return (
    <div className="flex">
      {facebook && (
        <a href={`https://www.facebook.com/${facebook}`} target="_blank" rel="noopener noreferrer">
          <div className="mx-2 flex items-center justify-center h-10 w-10 bg-slate-300 rounded-full">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/fluency-systems-filled/50/facebook.png"
              alt="facebook"
            />
          </div>
        </a>
      )}

      {twitter && (
        <a href={`https://www.twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
          <div className="mx-2 flex items-center justify-center h-10 w-10 bg-slate-300 rounded-full">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/fluency-systems-filled/50/twitter.png"
              alt="twitter"
            />
          </div>
        </a>
      )}

      {instagram && (
        <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
          <div className="mx-2 flex items-center justify-center h-10 w-10 bg-slate-300 rounded-full">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/fluency-systems-filled/50/instagram-new.png"
              alt="instagram"
            />
          </div>
        </a>
      )}

      {youtube && (
        <a href={`https://www.youtube.com/${youtube}`} target="_blank" rel="noopener noreferrer">
          <div className="mx-2 flex items-center justify-center h-10 w-10 bg-slate-300 rounded-full">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/fluency-systems-filled/50/youtube-play.png"
              alt="youtube"
            />
          </div>
        </a>
      )}
    </div>
  );
}

export default Social;
