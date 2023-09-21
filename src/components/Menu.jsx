
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import logo from "../img/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector} from "react-redux";
import {
  Container,
  Wrapper,
  Logo,
  Img,
  Item,
  Hr,
  Login,
  Button,
} from "./Menu.styled.js";

const Menu = ({ lightTheme, setLightTheme }) => {
    const {currentUser} = useSelector(state=> state.user)
    const location = useLocation();
    const path = location.pathname;
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo>
                        <Img src={logo} />
                        YouTube
                    </Logo>
                </Link>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item current={path==="/"}>
                        <HomeIcon />
                        Home
                    </Item>
                </Link>
                <Link to="/trend" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item current={path ==="/trend"}>
                        <ExploreOutlinedIcon />
                        Trending
                    </Item>
                </Link>
                <Link to="/subscribes" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item current={path === "/subscriptions"}>
                        <SubscriptionsOutlinedIcon />
                        Subscriptions
                    </Item>
                </Link>
                <Hr />
                <Link to="library" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <VideoLibraryOutlinedIcon />
                        Library
                    </Item>
                </Link>
                <Link to="/history" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <HistoryOutlinedIcon />
                        History
                    </Item>
                </Link>
                <Hr />
                {!currentUser &&
                    <>
                        <Login>
                            Sign in to experience full function
                            <Link to="signin" style={{ textDecoration: "none" }}>
                                <Button>
                                    <AccountCircleOutlinedIcon />
                                    SIGN IN
                                </Button>
                            </Link>
                        </Login>
                        
                    </>
                }
                <Hr />
                <Item onClick={() => setLightTheme(!lightTheme)}>
                    <SettingsBrightnessOutlinedIcon />
                    {lightTheme ? "Dark" : "Light"} Mode
                </Item>
            </Wrapper>
        </Container>
    )
};

export default Menu;
