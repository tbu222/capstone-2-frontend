import { Link } from "react-router-dom";
import {format} from "timeago.js";
import {
  Container,
  Image,
  Details,
  ChannelImage,
  Texts,
  Title,
  ChannelName,
  Info,
} from "./Card.styled.js";

import thumbnail from "../assets/thumbnail.jpg";

const Card = ({ type, video }) => {
  return (
    <Link to={`/video/${video?._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video?.imgUrl ? video?.imgUrl : thumbnail} />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={video?.userId?.img }
          />
          <Texts>
            <Title>{video ? video.title : "Video Title"}</Title>
            <ChannelName>
              {
                video.userId.name
              }
            </ChannelName>
            <Info>
              {video ? video.views : "0"} views •
              {video ? format(video.createdAt) : "0 day ago"}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
