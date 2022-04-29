import styled from "styled-components";
const Header = (props) => {
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
                            <a href="/home" className="active" >
                                <img src="/images/nav-home.svg" alt="Nav" />
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/home" >
                                <img src="/images/nav-network.svg" alt="Nav" />
                                <span>My Network</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/home" >
                                <img src="/images/nav-jobs.svg" alt="Nav" />
                                <span>Jobs</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/home" >
                                <img src="/images/nav-messaging.svg" alt="Nav" />
                                <span>Messaging</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/home" >
                                <img src="/images/nav-notifications.svg" alt="Nav" />
                                <span>Notifications</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="/home" >
                                <img src="/images/nav-work.svg" alt="Nav" />
                                <span>Work</span>
                            </a>
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
    padding: 0 25px;
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

`;

const NavList = styled.li`
    display: flex;
    align-items: center;
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
        span{
            color: rgba(0,0,0,.6);
            display: flex;
            align-items: center;
        }
        @media screen and (max-width: 768px) {
            min-width: 70px;
            
        }
    }
    &:hover,&:active{
        a{
            span{
                color:rgba(0,0,0,.9)
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
        width: 100%;    
    }

`;

export default Header;

