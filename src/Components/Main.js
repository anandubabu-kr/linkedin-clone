import styled from "styled-components";

const Main = (props) => {
    return (
        <Container>
            <CommonCard>
                <ShareBox>
                    <div>
                        <img src="/images/user.svg" alt="Share box" />
                        <button>
                            Start a post
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src="/images/photo-icon.svg" alt="Post new" />
                            <span>
                                Photo
                            </span>
                        </button>
                        <button>
                            <img src="/images/video-icon.svg" alt="Video add" />
                            <span>
                                Video
                            </span>
                        </button>
                        <button>
                            <img src="/images/event-icon.svg" alt="Event add" />
                            <span>
                                event
                            </span>
                        </button>
                        <button>
                            <img src="/images/article-icon.svg" alt="Article add" />
                            <span>
                                Write article
                            </span>
                        </button>
                    </div>
                </ShareBox>
                <div>
                    <Article>
                        <SharedActor>
                            <section>
                                <img src="/images/user.svg" alt="Next" />
                                <div>
                                    <span>Title</span>
                                    <span>Info</span>
                                    <span>Date</span>
                                </div>
                            </section>
                            <button>
                                <img src="/images/down-icon.svg" alt="Next" />
                            </button>
                        </SharedActor>
                        <Description>Description</Description>
                        <SharedImg>
                            <p>
                                <img src="/images/user.svg" alt="Sharing this " />
                            </p>
                        </SharedImg>
                        <SocialCount>
                            <li>
                                <button>
                                    <img src="https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l" alt="Like Action" />
                                    <img src="https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo " alt="Celebrate Action" />
                                    <span>73 Likes</span>

                                </button>
                            </li>
                            <li>
                                <p>3 Comments</p>
                            </li>
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
                </div>
            </CommonCard>

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
    background-color: #FFF;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 /15%),0 0 0 1px rgb(0 0 0 /20%);
`;

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
                border-radius:5px;
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

const Article = styled(CommonCard)`
    padding:0;
    margin: 0 0 .5rem;
    overflow:visible;
    `;

const SharedActor = styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding:12px 16px 0 ;
margin-bottom: .5rem;
align-items: center;
display: flex;
section{
        margin: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        img{
            width:48px;
            aspect-ratio: 1/1;

        }
        &>div{
            display:flex;
            flex-direction:column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span{
                text-align: left;
                &:first-child{
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0,0,0,1);
                }
                &:nth-child(n + 1){
                    font-size: 12px;
                    color: rgba(0,0,0,0.6);
                    
                }
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
    }
`;

const Description = styled.div`
    padding: 0 1rem;
    overflow: hidden;
    color: rgba(0,0,0,.9);
    font-size: 14px;
    text-align: left;
`;

const SharedImg = styled.div`
    margin-top:.5rem;
    width:100%;
    display: block;
    background-color: #f9fafb;
    img{
        object-fit: contain;
        width: 100%;
    }
    `;

const SocialCount = styled.ul`
    line-height: 1.5;
    display: flex;
    align-items:flex-start;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0px;
    border-bottom: 1px solid #e9e5df;
    list-style: none;
    li{
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
    padding:4px 8px;
    button{
        display:inline-flex;
        align-items: center;
        padding: 8px;
        border:none;
        background: transparent;
        img{
            margin:8px;
        }
    }
`;
export default Main;

{/* https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l : like
    https://static-exp1.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo  : clebrate
    https://static-exp1.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi : support
    https://static-exp1.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm : love
    https://static-exp1.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl : insiteful
    https://static-exp1.licdn.com/sc/h/1z80ze8ler6arc76a8rxsgqbh : curiouse */}