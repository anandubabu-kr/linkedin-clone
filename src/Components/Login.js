import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {  auth, provider } from "../firebase"
import { setUser } from "../redux/actions/actionUser";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

const Login = (props) => {
    const userInfo = useSelector((state) => state);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // This is to enable google login defined in firbase file
    let user = userInfo.userInfo
    const signInHandler = async (e) => {
        e.preventDefault()
        user = await signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                // console.log('Sign in function : ---', result.user.displayName)
                return user
            }).catch((error) => {
                const errorCode = error.code;
                return errorCode
            });
        // user = await signIn()
        dispatch(setUser(user))
        // console.log({ 'signIn   function returened  : ': user })
        if (user) {
            navigate('/')
        }

    }
    return (
        <Container className="login">
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt='LinkedIn login' />
                </a>
                <div>
                    <Join>
                        Join now
                    </Join>
                    <SignIn>
                        Sign In
                    </SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>
                        Welcome to your professional community
                    </h1>
                    <img src="/images/login-hero.svg" alt="Group of Profesionals" />
                </Hero>
                <Form>
                    <Google onClick={signInHandler}>
                        <img src="/images/google.svg" alt="Group of Profesionals" />
                        Sign In with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.div`
padding:0px;

`;


const Nav = styled.nav`
    max-width: 120 px;
    margin:auto;
    padding: 12px 0 16px;
    display:flex;
    align-items:center;
    position:relative;
    justify-content:space-between;
    flex-wrap:nowrap;

    & >a{
        width:135px;
        height:34px;
        @media (max-width:768px){
            padding:0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 1rem;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,.6);
    margin-right: 12px;
    border-radius: 5px;
    &:hover{
        background-color: rgba(0,0,0,.06);
        color: rgba(0,0,0,.9);
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    padding: .8rem 1.2rem;
    border-radius: 24px;
    transition: 164ms;
    font-size: 1rem;
    font-weight: 600;
    line-height: 40px;
    text-align: center;

    &:hover{
        background-color: rgba(112,181,249,.15);
    }
`;
const Section = styled.section`
    display:flex;
    align-content: start;
    min-height: 700px;
    padding-top: 3rem;
    padding: 4rem 0px;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media screen and (max-width: 768px) {
        margin: auto;
        min-height: 0px;
    }
`;
const Hero = styled.div`
    width    : 100%;
    h1{
        width: 55%;
        padding-bottom: 0px;
        font-size: 4rem;
        color: #2977c9;
        font-weight: 200;
        line-height: 5rem;
        @media screen and (max-width: 768px) {
            text-align: center;
            font-size: 1.3rem;
            width: 100%;
            line-height: 2;
        }
    }
    img{
        /* z-index: -1; */
        width: 700px;
        height: 687px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media screen and (max-width: 768px) {
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
            
        }
    }

`;

const Form = styled.form`
    margin-top: 100px;
    width: 408px;
    @media screen and (max-width: 768px) {

        
    }
`;

const Google = styled.button`
    display:  flex;
    justify-content: center;
    background-color: #fff;
    border: 0;
    align-items: center;
    height: 50px;
    width: 100%;
    border-radius: 2rem;
    box-shadow: inset 0 0 0 1px rgba(0 0 0 /60%),
                inset 0 0 0 2px  rgba(0 0 0 /0%),
                inset 0 0 0 1px  rgba(0 0 0 /0%);
    vertical-align: middle;
    z-index: 0;
    transition: 168ms ease-in-out;
    font-size:1.3rem;
    color: rgba(0, 0 ,0, .6);
    &:hover{
        background-color: rgba(207,207,207,0.25);
        color: rgba(0,0,0,.8);
    }
`;


export default Login;

// export default Login;