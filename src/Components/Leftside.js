import styled from "styled-components";
import { useSelector } from "react-redux";

const LeftSide = (props) => {
  const user = useSelector((state) => state.userInfo.user)
  // console.log('Photo URL  : ',user.photoURL)
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <Photo photoULR={user && user.photoURL} />
          <Link>
            Welcome,  {user && user.displayName}
          </Link>
          <AddPhotoText>
            {/* Add a photo <br/> */}
            <p>
              {user && user.email}
            </p>
          </AddPhotoText>
        </UserInfo>
        <Widget>
          <section>
            <div>
              <span>
                Connections
              </span>
              <span>
                Grow your network
              </span>
            </div>
            <img src="/images/widget-icon.svg" alt="Widget Icon" />
          </section>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="Items " />
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <p>
          <span>
            Groups
          </span>
        </p>
        <p>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </p>
        <p>
          <span>
            Follow Hashtags
          </span>
        </p>
        <p>
          <span>
            Discover More
          </span>
        </p>
      </CommunityCard>
    </Container>
  )
}

const Container = styled.div`
    grid-area: leftside;
`;
const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0,0,0, .15);
    padding: .8rem .8rem 1rem;
    word-wrap: break-word;
    word-break: break-word;
`;
const CardBackground = styled.div`
    background: url('/images/card-bg.svg');
    background-size    : 462px;
    background-position: center;
    height: 3rem;
    margin: -12px -12px 0;

`;
const Photo = styled.div`
    box-shadow: none;
    background-image: url(${(props) => props.photoULR || '/images/photo.svg'});
    width: 72px;    
    aspect-ratio: 1/1;
    box-sizing: border-box; 
    background-clip: content-box;   
    background-color: white;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid white ;
    margin: -38px auto -12px;
    border-radius: 50%;
`;
const Link = styled.div`
    font-size: 1rem;
    margin-top: 1rem;
    line-height: 1.5;
    color: rgba(0,0,0,.9);
    font-weight: 600;
`;
const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: .8rem;
    line-height: 1.33;
    font-weight: 400;
    p{
      color:black;
    }
`;
const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: .5rem;
    background-color: #FFF;
    border-radius: 5px;
    transform: box-shodow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgba(0 0 0 /15%) 0 0 0 1px rgba(0 0 0 /20%);
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  & > section {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
  }
`;
const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  position: sticky;
  position: -webkit-sticky;
  top: 60px;
  p {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    &:hover {
      color: #0a66c2;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export default LeftSide;