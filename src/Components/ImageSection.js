import React from 'react'
import styled from 'styled-components';
import resume from '../me/Snapchat-116333502.jpg';
// src\me\Snapchat-116333502.jpg
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Experience IQ</span></h4>
                <p className="paragraph">
                Hello! My name is Ibrahim and I enjoy creating things that live on the internet. <br/> My interest in web development started back in 2015 when I decided to try know how game was built with java on andriod (prince of persia)! Perticularly. <br/>

Fast-forward to today, and I’ve had the privilege of Learning Deeply on Javascript and it Ecosystem .
My main focus these days is building accessible, inclusive products and cross platform moibile application both (ios & android) for a variety of clients.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Ayeloja Ibrahim</p>
                        <p>: 21</p>
                        <p>: Nigerian </p>
                        <p>: English </p>
                        <p>: Lagos State, Nigeria</p>
                        <p>: Freelance</p>
                    </div>
                </div>

            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            height : 500px;
            width: 90%;
            object-fit: contain;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
