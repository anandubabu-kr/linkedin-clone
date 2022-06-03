import React from 'react'
import styled from "styled-components";
import ReactPlayer from 'react-player'

export const Posts = ({ doc, index }) => {
    return (
        <Article >
            <SharedActor>
                <section>
                    <img src={doc.creator.userImage} alt="Next" />
                    <div>
                        <p>{doc.creator.displayName}</p>
                        <span>{doc.creator.userMail}</span>
                        {/* <span> {doc.timestamp.toString()} </span> */}
                    </div>
                </section>
                <button>
                    <img src="/images/more-icon.svg" alt="Next" />
                </button>
            </SharedActor>
            <Description>{doc.description}</Description>
            {
                doc.image &&
                <SharedImg>
                    <img src={doc.image} alt="Sharing this " />
                </SharedImg>

            }
            {
                doc.videoLink && <ReactPlayer width={'100%'} url={doc.videoLink} />
            }
            <SocialCount>
                <div>
                    <button>
                        <img src="https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l" alt="Like Action" />
                        <img src="https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo " alt="Celebrate Action" />
                        <span>73 </span>

                    </button>
                </div>
                <div>
                    <p>3 Comments</p>
                </div>
            </SocialCount>
            <SocialActions>
                <button>
                    <img src="/images/like-icon.svg" alt="Like react" />
                    <span>Like</span>
                </button>
                <button>
                    <img src="/images/comment-icon.svg" alt="Comment react" />
                    <span>Comment</span>
                </button>
                <button>
                    <img src="/images/share-icon.svg" alt="Share react" />
                    <span>Share</span>
                </button>
                <button>
                    <img src="/images/send-icon.svg" alt="Send react" />
                    <span>Send</span>
                </button>
            </SocialActions>
        </Article>
    )
}


const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #FFF;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 /15%),0 0 0 1px rgb(0 0 0 /20%);
`;
const Article = styled(CommonCard)`
    padding: 0px 1rem ;
    margin: 1rem 0px;
    box-sizing: border-box;

    overflow:visible;
    box-shadow: 0 0 0 1px rgb(0 0 0 /15%),0 0 0 1px rgb(0 0 0 /20%);

`;

const SharedActor = styled.div`
flex-wrap:nowrap;
padding:12px 0px ;
margin-bottom: .5rem;
align-items: center;
display: flex;
section{
        /* margin: 12px; */
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        img{
            width:48px;
            aspect-ratio: 1/1;
            border-radius: 50%;
        }
        &>div{
            display:flex;
            flex-direction:column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            p,span{
                text-align: left;
                margin-left: .5rem;
                font-size: 14px;
                color: rgba(0,0,0,.78);
            }
            p{
                font-weight: 700;
            }
            span{
                font-size: 12px;

            }
        }
    }
button{
        position:absolute;
        right: 12px;
        top:0px;
        background: transparent;
        border:none; 
        outline:none; 
        img{
            width:38px;
        }
    }
`;

const Description = styled.div`
    padding-bottom: 1rem;
    overflow: hidden;
    color: rgba(0,0,0,.9);
    font-size: 14px;
    text-align: left;
`;

const SharedImg = styled.div`
    box-sizing: border-box;
    width:100%;
    img{
        object-fit: contain;
        box-sizing: border-box;
        width: 100%;
    }
`;

const SocialCount = styled.section`
    line-height: 1.5;
    display: flex;
    align-items:center;
    justify-content: space-between;
    overflow: auto;
    margin: 0 16px;
    /* padding: 8px 0px; */
    border-bottom: 1px solid #e9e5df;
    list-style: none;
    div{
        margin-right: 5px;
        font-size: 12px;
        button{
            display: flex;
            border:none;
            align-items: center;
            background: transparent;
            img{
                width:20px;
                aspect-ratio: 1/1;
            }
            span{
                margin:8px;
            }
        }
    }
`;

const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 0;
    min-height: 40px;
    /* padding:4px 8px; */
    button{
        display:inline-flex;
        align-items: center;
        padding: 5px;
        width:100%;
        margin: 4px;
        border-radius: 5px;
        border:none;
        background: transparent;
        img{
            margin:8px;
        }
        &:hover{
            background: rgba(0,0,0,.1);
        }
    }
`;
