import styled from "styled-components";

const RightSide = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <section>
              <Avatar />
            </section>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <section>
              <Avatar />
            </section>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <StickyItems>
        <BannerCard>
          <img
            src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
            alt="Add page"
          />
        </BannerCard>
        <Footer>
          <a href="anandubabu.info">About</a>
          <a href="anandubabu.info">Accessibility</a>
          <a href="anandubabu.info">Help Center</a> <br/>
          <a href="anandubabu.info">Privecy & Terms</a>
          <a href="anandubabu.info">Ad choices</a> <br/>
          <a href="anandubabu.info">Advertising </a>
          <a href="anandubabu.info">Business Services</a> <br/>
          <a href="anandubabu.info">Get The LinkedIn App</a>
          <a href="anandubabu.info">More</a>
          <p>LinkedIn Coorparation &copy; 2022</p>
        </Footer>

      </StickyItems>
    </Container>
  )
}

const Container = styled.div`
    grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
      border:none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const StickyItems=styled(FollowCard)`
    position: sticky;
    position: -webkit-sticky;
    top: 60px;
    background: transparent;
    box-shadow:none;
    padding: 0px;
`
const BannerCard = styled(FollowCard)`
    img {
      width: 100%;
      height: 100%;
    }
`;

const Footer = styled.footer`
  a,p{
    text-decoration: none;
    font-size: 12px;
    color: rgba(0,0,0,.6);
    margin: 1rem .5rem;
    &:hover{
      text-decoration: underline;
    }
    p{
    color: rgba(0,0,0,.8);

    }
  }
`
export default RightSide;
