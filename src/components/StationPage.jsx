import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters
import axios from "axios";

import StationDetails from "./StationDetails.jsx";
import Links from "./Links.jsx";
import Socials from "./Socials.jsx";
import Footer from "./Footer.jsx";
import TopBar from "./TopBar.jsx";

function StationPage() {
  const { url } = useParams(); // Get the 'url' parameter from the route
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStation = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/station/s/${url}`
        );
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchStation();
  }, [url]); // Use the 'url' parameter from useParams as the dependency

  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Ensure 'data' and 'data.station' are defined before rendering
  if (!data || !data.station) {
    return <div>Error: Data not available</div>;
  }

  return (
    <>
    <div 
    style={{ backgroundImage: `url(${data.station.image})` }}>
      <div className="h-screen backdrop-blur-xl">
        <title>{data.station.title}</title>
        <TopBar />
        <StationDetails station={data.station} />
        <Links links={data.links} />
        <Socials station={data.station} />
        <Footer />
      </div>
    </div>
      
    </>
  );
}

export default StationPage;
