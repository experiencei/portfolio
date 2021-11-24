import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2018 - 2019'} 
                        title={'Learning UI/UX'}
                        subTitle={'Passesd a Task To Study UI/UX'}
                        text={'Studied how to use figma to design a Prototype & Mockup  for mobile and web UI/UX at Torilo Academy '} 
                    />
                    <ResumeItem 
                        year={'2019 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Self Made Developer'}
                        text={'Works on Amazing Javascript Project , Learned and Solved 25+ types of data structures & algorithms , clone most of  famous social medias with React and Clone high Tech app. all aforementioned are on portfolios with source code and url to visit.'} 
                    />
                    <ResumeItem 
                        year={'2014 - Present'} 
                        title={'Sales and Marketing Assistant'}
                        subTitle={' Assisted in Trading marketing plans'}
                        text={'Compiled historical documents of over 5years into spreadsheet databases , Assisted in Trading Marketing plans and Improving SOPs of quality management system'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2016 - 2018'} 
                        title={'Science Laboratory Technician'}
                        subTitle={'Federal Polythecnic, Offa'}
                        text={'Gain Experiences in using Point Contact Diode or the Glass Passivated Diode,to create a flow of connection with bread board .'} 
                    />
                    <ResumeItem 
                        year={'2019 - Present'} 
                        title={'Electrical Engineering Student'}
                        subTitle={'Obafemi Awolowo University, Ile-Ife'}
                        text={'Studying Electrical Engineering, acquiring an underlying principle behind,Technological knowledge,Interpersonal skills, Organizational skills ,Complex problem-solving skills,Innovative thinking. '} 
                    />
                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
