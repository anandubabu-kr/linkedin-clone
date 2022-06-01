import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ReactPlayer from 'react-player'
import postsServices from "../services/posts-services";

const CreatePost = (props) => {
    const [editorText, setEditorText] = useState('')
    const [shareImage, setShareImage] = useState('')
    const [videoLink, setVideoLink] = useState('');
    const [videoSelect, setVideoSelect] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const closeHandler=props.closeHandler
    const user = useSelector((state) => state.userInfo.user)

    const handleshareImageChange = (e) => {
        e.preventDefault()
        const image = e.target.files[0];
        if (image === '' || image === undefined) {
            console.log(`no file : ${typeof (image)}`)
            return;

        }
        setShareImage(image)
        setVideoSelect(false)
    }
    const handlevideoLinkChange = (e) => {
        setVideoLink(e.target.value)
    }
    const handleEditorTextChange = (e) => {
        e.preventDefault()
        setEditorText(e.target.value);

        setErrorMessage(null)

    }
    const postSubmitHandler = (e) => {
        e.preventDefault()
        if (editorText) {
            const newPost = {
                creator: {
                    displayName: user.displayName,
                    userImage: user.photoURL,
                    userMail: user.email
                },
                description: editorText,
                image: shareImage,
                videoLink: videoLink,
            }
            if(postsServices.addPost(newPost)){
                closeHandler()
            }
        } else {
            setErrorMessage('Please add description to your post')
        }
    }
    return (
        <Content>
            <Header>
                <h2>Create a post</h2>
                <button onClick={props.closeHandler}>
                    <img alt="X" src="/images/close-icon.svg" />
                </button>
            </Header>
            <SharedContent>
                <UserInfo>
                    <img alt='User' src={user ? user.photoURL : "/images/user.svg"} />
                    <span>
                        {user ? user.displayName : "No user Logged in"}
                    </span>
                </UserInfo>
                <Editor>
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                    <textarea onChange={handleEditorTextChange}
                        autoFocus={true}
                        placeholder='What do you wanna talk about ?'
                        value={editorText}
                    />
                    <UploadImage>
                        <input type='file'
                            id='file'
                            file={shareImage}
                            onChange={handleshareImageChange}
                            accept="image/gif,image/jpg,image/jpeg,image/png"
                            placeholder="Uploade"
                            style={{ display: 'none' }}
                        />
                        {
                            shareImage &&
                            <div>
                                <img src={URL.createObjectURL(shareImage)} alt='Uplode seems broken !' />
                            </div>
                        }
                    </UploadImage>
                    {
                        videoSelect &&
                        <UploadVedio>
                            <input type='text'
                                placeholder="Add video link"
                                value={videoLink}
                                onChange={handlevideoLinkChange}
                            />
                            {
                                videoLink && <ReactPlayer width={'100%'} url={videoLink} />
                            }
                        </UploadVedio>
                    }
                </Editor>
            </SharedContent>
            <ShareCreation>
                <AttachAssets>
                    <AssetButton>
                        <label htmlFor='file'>
                            <img src="/images/photo-icon.svg" alt="Post new" />
                        </label>
                    </AssetButton>
                    <AssetButton onClick={() => { setVideoSelect(!videoSelect) }}>
                        <img src="/images/video-icon.svg" alt="Video add" />
                    </AssetButton>
                </AttachAssets>
                <ShareComment>
                    <AssetButton>
                        <img src="/images/comment-icon.svg" alt="Share react" />
                        Anyone
                    </AssetButton>
                </ShareComment>
                <PostButton disabled={editorText && false} onClick={postSubmitHandler}>
                    post
                </PostButton>
            </ShareCreation>
        </Content>
    )
}


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
`;
const Header = styled.div`
    display: block;
    border-bottom: 1px solid rgba(0,0,0,.15);
    font-size: 1rem;
    padding: .3rem 1rem;
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
        color: rgba(0,0,0,.6);
    }
`;
const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 12px 26px;
`;
const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: .3rem 1rem;
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
`;
const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 1rem;
`;
const AssetButton = styled.button`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border :0px;
`;
const AttachAssets = styled.div`
    display:flex;
    margin: .3rem 1rem;
    align-items: center;
`;
const ShareComment = styled(AttachAssets)`
    margin-right: auto;
    border-left:1px solid rgba(0,0,0,.2);
`;
const PostButton = styled(AssetButton)`
    border-radius: 20px;
    padding: 0px;
    background-color: ${props => props.disabled ? '#777777' : '#004182'};
    color: #ffffff;
    text-align: center;
    width: 100px;
    height: 30px;
`;
const Editor = styled.div`
    padding: 1rem;
    textarea{
        width: 100%;
        border: 0px;
        font-family: Arial, Helvetica, sans-serif;
        resize: none;
    }
    textarea:focus{
    border: 0px;
    outline: none;
    }
`;
const UploadImage = styled.div`
    display: flex;
    flex-direction: column;
    div{
    width: 100%;
    max-height: 300px;
    overflow: scroll;
    scrollbar-width: none;
        img{
        width: 100%;

    }
}
`;
const ErrorMessage = styled.div`
color: #FF6767;
`
const UploadVedio = styled(UploadImage)`
    input{
    border: 0px;
    padding: .2rem .5rem;
}
`;

export default CreatePost