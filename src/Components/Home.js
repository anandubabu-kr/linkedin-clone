import styled from "styled-components";
import LeftSide from './Leftside'
import RightSide from './Rightside'
import Main from './Main'
import { useEffect } from "react"

const Home = (props) => {
    useEffect(() => {
        document.title = "Feed | LinkedIn";
    }, [])

    return (
        <Container>
            <Section>

            </Section>
            <Layout>
                <LeftSide />
                <Main />
                <RightSide />
            </Layout>
        </Container>)
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    padding-top: 3rem;
    max-width: 100%;
`;

const Section = styled.div`
    padding:1rem;
    text-align: center;
    box-sizing: border-box;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5{
        color: #0a66c2;
        a{
            font-weight: 700;
        }
        p{
            font-size: 14px;
            color:#434649;
            font-weight: 700;
        }
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0px;
    }
`;

const Layout = styled.div`
    display: grid;
    max-width: 1128px;
    width:100%;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
    column-gap: 1.5rem;
    row-gap: 1.5rem;
    grid-template-rows: auto;
    margin-top: 1.5rem 0;
    position: static;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 0 1.5rem;
        
    }
`;
export default Home;

