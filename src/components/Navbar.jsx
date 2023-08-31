import React, {useState} from 'react'
import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "../redux/userSlice";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import Upload from './Upload';
const Container = styled.div`
    position: sticky; 
    top:0;
    background-colors: ${({theme})=> theme.bgLighter };
    height: 50px;
`
const User = styled.div`
    display: flex;
    align-item: center;
    gap: 10px;
    font-weight: 500;
    color: ${({theme})=> theme.text};
`

const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color:  grey;
`
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid blue;
    color: blue;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`
const Input = styled.input`
    border:none;
    background-color: transparent;
    outline: none;
    width: 100%;
`
const Search = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 3px;
    color: ${({theme})=> theme.text};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 30px;
    justify-content: flex-end;
    position: relative;
`
const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open,setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const {currentUser} = useSelector(state=> state.user);
    console.log("check this out", currentUser?.name);
    const handleLogOut = async()=>{
        try{
            await axios.post("/auth/logout");
            dispatch(logout());
            navigate('/');
        }catch(err){
            dispatch(loginFailure());
        }
    };
    return (
        <>
            <Container>
                <Wrapper>
                    <Search>
                        <Input placeholder="search" onChange={e=> setQuery(e.target.value)}></Input>
                        <SearchOutlinedIcon onClick={()=> navigate(`/search?q=${query}`)}></SearchOutlinedIcon>
                    </Search>
                    {currentUser ? (
                        <User>
                            <Link to="/signin" style={{ textDecoration:"none"}}>
                                
                            </Link>
                            <Button onClick={handleLogOut}>
                                <AccountCircleOutlinedIcon/>
                                SignOut
                            </Button>
                            <VideoCallOutlinedIcon onClick={()=> setOpen(true)}/>
                            
                            <Avatar src={currentUser.img}/>
                            {currentUser.name}
                        </User>
                    ): (<Link to="/signin" style={{ textDecoration:"none"}}>
                        <Button>
                            <AccountCircleOutlinedIcon/>
                            Sign In
                        </Button>
                    </Link>)}
                </Wrapper>
            </Container>
        {open && <Upload setOpen={setOpen}/>}
        </>
    )
}

export default Navbar