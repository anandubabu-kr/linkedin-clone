import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CreatePost = (props) => {
    const [editorText, setEditorText] = useState('')
    const user = useSelector((state) => state.userInfo.user)
    const handleEditorTextChange = (e) => {
        e.preventDefault()
        setEditorText(e.target.value);
    }
    return (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button onClick={props.closeHandler}>
                        <img alt="X" src="/images/close-icon.svg" />
                    </button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        <img alt='User'  src={user ? user.photoURL : "/images/user.svg"} />
                        <span>
                            {user ? user.displayName : "No user Logged in"}
                        </span>
                    </UserInfo>
                    <Editor>
                        <textarea onChange={handleEditorTextChange}
                            autoFocus={true}
                            placeholder='What do you wanna talk about ?'
                            value={editorText}
                        />
                        <UploadImage>
                            <input type='file' placeholder="Uploade"/>
                        </UploadImage>
                    </Editor>
                </SharedContent>
                <ShareCreation>
                    <AttachAssets>
                        <AssetButton>
                            <img src="/images/photo-icon.svg" alt="Post new" />
                        </AssetButton>
                        <AssetButton>
                            <img src="/images/video-icon.svg" alt="Video add" />
                        </AssetButton>
                    </AttachAssets>
                    <ShareComment>
                        <AssetButton>
                            <img src="/images/comment-icon.svg" alt="Share react" />
                            Anyone
                        </AssetButton>
                    </ShareComment>
                    <PostButton>
                        post
                    </PostButton>
                </ShareCreation>
            </Content>
        </Container>
    )
}


const Container = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
    color: white;
    background-color: rgba(0,0,0,0.8);
`
const Content = styled.div`
    width: 100%;
    max-width:553px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    color: black;
    position: relative;
    display: flex;
    flex-direction: column;
    top:2rem;
    margin: 0 auto;
    `
const Header = styled.div`
    display: block;
    padding: 1rem 20px;
    border-bottom: 1px solid rgba(0,0,0,.15);
    font-size: 1rem;
    line-height:1.5%;
    color: rgba(0,0,0,.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between ;
    align-items: center;
    button{
        height: 40px;
        width: 40px;
        min-width: auto;
        background: transparent;
        border:0px;
        color: rgba(0,0,0,.15);

    }
`
const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 12px 26px;
`
const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    img{
        width: 48px;
        aspect-ratio: 1/1;
        background-clip: content-box;
        border-radius: 50%;
    }
    span{
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.5;
        margin-left: 5px;
    }
`

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 1rem;
`
const AssetButton = styled.button`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border :0px;
    margin: .5rem;
`;

const AttachAssets = styled.div`
    display:flex;
    padding: 12px;
    align-items: center;
`;
const ShareComment = styled(AttachAssets)`
    margin-right: auto;
    border-left:1px solid rgba(0,0,0,.2);
`
const PostButton = styled(AssetButton)`
    border-radius: 20px;
    background-color: #0a66ca;
    color:#ffffff;
    text-align: center;
    width:100px;
    &:hover{
        background-color: #004182;
    }
`;

const Editor = styled.div`
    padding:1rem;

    textarea{
        width: 100%;
        border:0px;
        min-height: 200px;
        resize: none    ;
    }
    textarea:focus{
        border:0px;
        outline: none;
    }
`

const UploadImage=styled.div`   

`;

export default CreatePost