import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import useClickOutSide from "./OutSideClick";

const Header = (props) => {

    const user = useSelector((state) => state.userInfo.user);
    const [showProfile, setShowProfile] = useState(false);

    const showUserProfileHandler = (e) => {
        if (e) {
            e.preventDefault()
        }
        setShowProfile(!showProfile)
    }

    let userProfile = useClickOutSide(() => {
        showUserProfileHandler()
    })
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="Home " />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type='text' placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" alt="Search" />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList>
                            <a href="/" className="active" >
                                <img src="/images/nav-home.svg" alt="Nav" />
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/network" >
                                <img src="/images/nav-network.svg" alt="Nav" />
                                <span>My Network</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/jobs" >
                                <img src="/images/nav-jobs.svg" alt="Nav" />
                                <span>Jobs</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/messages" >
                                <img src="/images/nav-messaging.svg" alt="Nav" />
                                <span>Messaging</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/notifications" >
                                <img src="/images/nav-notifications.svg" alt="Nav" />
                                <span>Notifications</span>
                            </a>
                        </NavList>
                        <NavList>
                            <User onClick={showUserProfileHandler}>
                                <p>
                                    <img src={user ? user.photoURL : "/images/user.svg"} alt="Nav" />
                                    <span>
                                        Me
                                        <img src="/images/down-icon.svg" alt="Nav" />
                                    </span>
                                </p>
                            </User>
                            {
                                showProfile &&
                                <UserInfoCard ref={userProfile}>
                                    <UserInfo>
                                        <img src={user ? user.photoURL : "/images/user.svg"} alt="Nav" />
                                        <h2>
                                            {user.displayName}
                                        </h2>
                                    </UserInfo>
                                    <ViewProfileButton>
                                        View Profile
                                    </ViewProfileButton>
                                    <hr />
                                    <AccountActions>
                                        <h2>Account</h2>
                                        <a href='settings'>Settings & Privecy</a>
                                        <a href='help'>Help</a>
                                        <a href='languages'>Language</a>
                                    </AccountActions>
                                    <ManageCard>
                                        <h2>Manage</h2>
                                        <a href='settings'>Post & Activity</a>
                                        <a href='help'>Job post</a>

                                    </ManageCard>
                                    <p>
                                        Sign Out
                                    </p>
                                </UserInfoCard>
                            }
                            <Work>
                                <a href="/home" >
                                    <img src="/images/nav-work.svg" alt="Nav" />
                                    <span>Work
                                        <img src="/images/down-icon.svg" alt="Nav" />
                                    </span>

                                </a>
                            </Work>
                        </NavList>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left: 0px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;
const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
    @media screen and (max-width: 768px) {
        margin: 1rem ;
    }
`;
const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    &>div{
        max-width: 280px;
        input{
            border: none;
            box-shadow: none;
            background-color: #eef3fa;
            border-radius: 2px;
            color: rgba(0,0,0,.8);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }

`;
const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    /* transition: background-color .15s ; */
    
`;
const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    @media screen and (max-width: 768px) {
        justify-content: space-around;
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    align-content: center;
    box-sizing: border-box;
    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column  ;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        img{
            padding: 0px;
            margin: 0px;
        }
        span{
            color: rgba(0,0,0,.6);
            display: flex;
            align-items: center;
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
        @media screen and (max-width: 768px) {
            min-width: none;
            padding: 0px;
            margin:0px;
        }
    }

    &:hover, .active{
        a{
            span{
                color:rgba(0,0,0,.9);
                background-image: linear-gradient(90deg, black,black);
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: 100% 2px;
            }
        }

    }
`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media screen and (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        box-sizing: border-box;
        width: 100%;
    }

`;

const UserInfoCard = styled.div`
    position: absolute;
    top:55px;
    background-color: white;
    border-radius: 5px;
    width:200px;
    font-size: 1rem;
    padding:.5rem;
    margin-left: -200px;
    transition: .5s ease-in;
    text-align: center;
    display: flex;
    flex-direction: column;
    img{
        max-width: 50px;
        padding: .5rem;
        border-radius: 50%;
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
`

const AccountActions = styled(UserInfo)`
    border-top: 2px solid #dddddd;
    flex-direction: column;
    align-items: flex-start;
    padding: .5rem ;
    h2{
        margin:  .5rem 0px;
    }
    & a{
        color: #343434;
        font-weight: 400;
        min-height: fit-content;
        text-align: left;
        display: block;
        margin: 0px;
        padding: 0px;
        &:hover{
            text-decoration: underline;
        }
    }
`
const ViewProfileButton = styled.button`
    padding: .3rem .7rem ;
    border: 2px solid blue;
    color :blue;
    border-radius: 30px;
    width: 100%;
    background-color: transparent;
`
const User = styled.div`
    p{
        font-size: .8rem;
    }
    p>img{
        width: 26px;
        aspect-ratio: 1/1;
        border-radius: 50px;
    }
    span{
        display: flex;
        align-items: center;
    }
`;

const ManageCard = styled(AccountActions)``

const Work = styled(User)`
    border-left: 1px solid rgba(0,0,0,.07);
`;


export default Header;

