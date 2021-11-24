import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Styled Components'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'REACT NATIVE'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Next JS'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'NODE.JS'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'REDUX'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'GRAPH QL'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'Gatsby'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'PWA'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'JEST'}
                            width={'70%'}
                            text={'70%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
