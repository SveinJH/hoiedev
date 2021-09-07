import styled from 'styled-components';

import github from '../assets/icons/github.svg';
import gmail from '../assets/icons/gmail.svg';
import linkedin from '../assets/icons/linkedin.svg';
import chevron_down from '../assets/icons/down-chevron.svg';

const CardItem = ({ name, img, onClick }) => (
    <Card onClick={onClick}>
        <Image src={img} alt={name} />
    </Card>
);

const MainSection = ({ fullpageApi }) => {
    return (
        <div className="section">
            <Container>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Name>Svein Jakob Høie</Name>
                    <Work>konsulent @ Bouvet ASA</Work>
                </div>
                <CardContainer>
                    <CardItem
                        name="linkedin"
                        img={linkedin}
                        onClick={() =>
                            window.open(
                                'https://www.linkedin.com/in/sveinjakobhoie/',
                                '_blank'
                            )
                        }
                    />
                    <CardItem
                        name="gmail"
                        img={gmail}
                        onClick={() =>
                            window.open('mailto:sveinjakob@hoie.dev')
                        }
                    />
                    <CardItem
                        name="github"
                        img={github}
                        onClick={() =>
                            window.open('https://github.com/SveinJH', '_blank')
                        }
                    />
                </CardContainer>
                <Chevron
                    src={chevron_down}
                    width="40"
                    onClick={() => fullpageApi.moveSectionDown()}
                    style={{
                        cursor: 'pointer',
                        position: 'absolute',
                        bottom: 20,
                    }}
                />
            </Container>
        </div>
    );
};

const Card = styled.div`
    width: 200px;
    height: 200px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover img {
        transform: rotate(8deg);
    }

    @media (max-width: 800px) {
        width: 100px;
        height: 100px;
    }

    @media (max-width: 500px) {
        width: 80px;
        height: 80px;
    }
`;

const CardContainer = styled.div`
    margin-top: 4rem;
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 5rem;

    @media (max-width: 800px) {
        grid-template-columns: repeat(3, 100px);
        grid-gap: 2.5rem;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(3, 80px);
        grid-gap: 2rem;
    }
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        .fp-controlArrow {
            transform: scale(0.8);
        }
    }
    @media (max-width: 500px) {
        .fp-controlArrow {
            transform: scale(0.5);
        }
    }
`;

const Image = styled.img`
    width: 60%;
    height: auto;
    transition: all 0.25s;
`;

const Chevron = styled.img`
    transition: all 0.3s;
    &:hover {
        transform: translateY(-5px);
    }
`;

const Name = styled.div`
    font-size: 4rem;

    @media (max-width: 500px) {
        font-size: 3rem;
    }
`;

const Work = styled.div`
    font-size: 3rem;
    color: #616161;

    @media (max-width: 500px) {
        font-size: 2.2rem;
    }
`;

export default MainSection;
