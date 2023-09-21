import {
    Container,
    Avatar,
    Details,
    Name,
    Date,
    Text,
    Button,
  } from "./Comment.styled.js";
  import {format} from "timeago.js";
  
  import userAvatar from '../assets/avatar.jpg';
  
  const Comment = ({ data, isOwner, handleDelete }) => {
  
  
    return (
      <Container>
        <Avatar
          src={data.userId.img || userAvatar}
        />
        <Details>
          <Name>
            {data?.userId.name}
            <Date>{format(data?.createdAt)}</Date>
          </Name>
          <Text>
            {data?.desc}
          </Text>
        </Details>
  
        {isOwner && <Button onClick={(e)=> handleDelete(e, data._id)}> Delete </Button>}
      </Container>
    );
  };
  
  export default Comment;
  