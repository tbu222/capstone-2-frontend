import { Container } from "./Home.styled.js";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import API from "../../api/api.js";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fecthData = async () => {
      let url = "";
      if (type === "random") {
        url = "/videos";
      } else if (type === "trend") {
        url = "/videos/trend";
      } else if (type === "subscribes") {
        url = "/videos/subscribes";
        if (!currentUser) navigate("/signin");
      } else if (type === "library") {
        url = "/videos/saved";
        if (!currentUser) navigate("/signin");
      }

      try {
        const res = await API.get(url);
        setVideos(res.data.videos);
      } catch (error) {
        console.log(error.message);
      }
    };
    fecthData();
  }, [type, currentUser, navigate]);

  return (
    <Container>
      {type === "subscribes" && !currentUser && navigate("/signin")}
      {videos && videos.map((video) => <Card key={video._id} video={video} />)}
      {type === "library" && (videos?.length === 0 || !videos) && (
        <div>
          <h1>There is currently no video in your library</h1>
          <p> Add to library using the save button</p>
        </div>
      )}
      {type === "subscribes" && (videos?.length === 0 || !videos) && (
        <div>
          <h1>You didn't subscribe to any channel</h1>
        </div>
      )}
    </Container>
  );
};

export default Home;
