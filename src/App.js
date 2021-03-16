import './App.scss';
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import {Tween, Timeline} from 'react-gsap';
import DockerLogo from "./components/DockerLogo";
import LeftProgress from "./components/LeftProgress/LeftProgress";
import RightProgress from "./components/RightProgress/RightProgress";
import CenterProgress from "./components/CenterProgress/CenterProgress";

const ref = React.createRef();

const animDockerLogo = {
  ease: 'Back.easeInOut',
  from: {
    opacity: 0,
    yPercent: 100,
  },
  to: {
    opacity: 1,
    yPercent: 0,
  }
};

const animLineProgress = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  }
}

function App() {
  return (
      <>
        <section className="content-section" >
          <h1>Just a content</h1>
        </section>

        <section className="docker-process-scene">
          <Controller globalSceneOptions={{triggerHook: 0}}>
            <Scene pin  duration="5000" indicators={true}>
              {(progress) => (
                  <div className="progress-list">
                    <Timeline totalProgress={progress*2} paused>
                      <Tween {...animDockerLogo}>
                        <DockerLogo ref={ref} />
                      </Tween>
                      <Tween {...animLineProgress}>
                        <LeftProgress ref={ref} />
                      </Tween>
                      <Tween {...animLineProgress}>
                        <RightProgress ref={ref} />
                      </Tween>
                      <Tween {...animLineProgress}>
                        <CenterProgress ref={ref}/>
                      </Tween>
                    </Timeline>
                  </div>
              )}
            </Scene>
          </Controller>
        </section>

        <section className="content-section" >
          <h1>Just a content</h1>
        </section>
      </>
  );
}

export default App;
