import { createGlobalStyle } from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import WorkSection from './sections/work';
import MainSection from './sections/main';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Rubik', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        color: #333333;
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyles />
            <ReactFullpage
                sectionsColor={['#f0e3d6', '#11133c']}
                scrollingSpeed={1000}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <MainSection fullpageApi={fullpageApi} />
                            <WorkSection />
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    );
};

export default App;
