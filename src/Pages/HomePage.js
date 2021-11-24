import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I am a<span>Web Developer</span> & <span>App Developer</span></h1>
                <p>
                Hi guys, I'm popularly known as Experience IQ, i love technology, adventures , reading and chess game. I get intrigued with computers and tech devices and i chose the path of a Software Engineer.
                </p>
                <div className="icons">
                    <a href="https://facebook.com/ayelojaibrahim/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/experiencei" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://twitter.com/xperiencejr/" className="icon i-twitter">
                        <TwitterIcon />
                    </a>
                    <a href="https://Instagram.com/experiencei/" className="icon i-instagram">
                        <InstagramIcon />
                    </a>
                    <a href="https://linkedin.com/ayelojaibrahim/" className="icon i-linkedin">
                        <LinkedInIcon  />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-twitter{
                &:hover{
                    border: 2px solid #00acee;
                    color: #00acee;
                }
            }
            .i-instagram{
                &:hover{
                    border: 2px solid #8a3ab9;
                    color: #cd486b;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid #0077b5;
                    color: #0077b5;
                }
            }
        }
    }
`;

export default HomePage;
