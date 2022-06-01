import { useSelector } from "react-redux";
import styled from "styled-components";
import CreatePost from "./CreatePost";
import { useState, useEffect } from "react";
import postsServices from "../services/posts-services";
import { Posts } from './Posts'
const Main = () => {
    const user = useSelector((state) => state.userInfo.user)

    const [showCreatePost, setShowCreatePost] = useState(false)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await postsServices.getAllPosts()
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts()
    }, [])

    const handleShowCreatePostHandler = (e) => {
        if (e) {
            e.preventDefault()
        }
        setShowCreatePost(!showCreatePost)
    }

    const postsToDisplay = posts.map((doc, index) => (
        <Posts key={doc.id} doc={doc} index={index} />
    ))

    return (
        <Container>
            <CommonCard>
                <ShareBox>
                    <div>
                        <img src={user ? user.photoURL : "/images/user.svg"} alt="Share box" />
                        <button onClick={handleShowCreatePostHandler}>
                            Start a post
                        </button>
                    </div>
                    <div>
                        <button onClick={handleShowCreatePostHandler}>
                            <img src="/images/photo-icon.svg" alt="Post new" />
                            <span>
                                Photo
                            </span>
                        </button>
                        <button onClick={handleShowCreatePostHandler}>
                            <img src="/images/video-icon.svg" alt="Video add" />
                            <span>
                                Video
                            </span>
                        </button>
                        <button onClick={handleShowCreatePostHandler}>
                            <img src="/images/event-icon.svg" alt="Event add" />
                            <span>
                                event
                            </span>
                        </button>
                        <button onClick={handleShowCreatePostHandler}>
                            <img src="/images/article-icon.svg" alt="Article add" />
                            <span>
                                Write article
                            </span>
                        </button>
                    </div>
                </ShareBox>
                <hr />
                <PostsContainer>
                    {postsToDisplay}
                </PostsContainer>
            </CommonCard>

            {showCreatePost ?
                <CreatePostComponent id='createPost' >
                    <CreatePost closeHandler={handleShowCreatePostHandler} />
                </CreatePostComponent>
                : ''}
        </Container>
    )
}

const Container = styled.div`
    grid-area: main;
`;
const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    border-radius: 5px;
    position: relative;
    border: none;
`;

const PostsContainer = styled.div`
 border:none
`


const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;
    div{
        button{
            outline: none;
            border:none;
            color:rgba(0,0,0,.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            display: flex;
            font-weight: 600;
            cursor: pointer;
            align-items: center ;
        }
        &:first-child{
            display: flex;
            align-items: center;
            padding:.5rem 1rem 0px 1rem;
            img{
                width: 48px;
                aspect-ratio: 1/1;
                border-radius: 50%;
                margin-right: .5rem;
            }
            button{
                margin:4px 0;
                flex-grow:1;
                padding-left: 1rem;
                border :1px solid rgba(0,0,0,.07);
                border-radius:50px;
                background-color: white;
                text-align: left;
            }
        }
        &:nth-child(2){
            display: flex;
            flex-wrap:wrap;
            justify-content: space-around;
            padding:auto;
            button{
                img{
                    margin:0 4px 0 -2px;
                }
                span{
                    color:#70b5f9;
                }
            }
        }
        
    }
`;
const CreatePostComponent = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
    color: white;
    background-color: rgba(0,0,0,0.8);
`
export default Main;
