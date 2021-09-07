import styled from 'styled-components';
import bouvetLogo from '../assets/icons/bouvet.svg';
import tihldeLogo from '../assets/icons/tihlde.svg';
import ntnuLogo from '../assets/icons/ntnu.png';
import { Container } from './main';

const WorkSection = () => {
    return (
        <div className="section">
            <Container>
                <div className="slide">
                    <Slide>
                        <Image src={bouvetLogo} alt="bouvet logo" />
                        <JobTitle>konsulent</JobTitle>
                        <Period>juni 2021 - d.d</Period>
                    </Slide>
                </div>
                <div className="slide" style={{ backgroundColor: '#1D448C' }}>
                    <Slide>
                        <Image src={tihldeLogo} alt="tihlde logo" />
                        <JobTitle>frontend-utvikler</JobTitle>
                        <Period>september 2020 - mai 2021</Period>
                    </Slide>
                </div>
                <div className="slide" style={{ backgroundColor: '#00509e' }}>
                    <Slide>
                        <Image src={ntnuLogo} alt="ntnu logo" width="450" />
                        <JobTitle>dataingeniør</JobTitle>
                        <Period>august 2018 - juni 2021</Period>
                    </Slide>
                </div>
            </Container>
        </div>
    );
};

const Slide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const JobTitle = styled.div`
    margin-top: 6rem;
    font-size: 3rem;
    color: #ddd;

    @media (max-width: 800px) {
        font-size: 2.6rem;
    }
    @media (max-width: 500px) {
        font-size: 2.2rem;
    }
`;

const Period = styled.div`
    font-size: 2.4rem;
    font-style: italic;
    color: #ddd;

    @media (max-width: 800px) {
        font-size: 2rem;
    }
    @media (max-width: 500px) {
        font-size: 1.8rem;
    }
`;

const Image = styled.img`
    width: 450px;

    @media (max-width: 800px) {
        width: 300px;
    }

    @media (max-width: 500px) {
        width: 200px;
    }
`;

export default WorkSection;
