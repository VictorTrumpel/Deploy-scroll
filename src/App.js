import './App.scss';
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import ReceiptContainer from './acts/ReceiptContainer';
import ConnectionContainer from "./acts/ConnectionContainer";
import BindingContainer from "./acts/BindingContainer";

let globalProgress = 0,
    delta = 0,
    greenProgress = 0;

let redAnimProgress = 0,
    greenAnimProgress = 0,
    blueAnimProgress = 0

const animStack = [
    redAnimProgress,
    greenAnimProgress,
    blueAnimProgress
];

function App() {
  return (
      <>
        <section className="content-section" >
          <h1>Just a content</h1>
        </section>

        <section className="docker-progress-scene">
          <Controller globalSceneOptions={{triggerHook: 0}}>
            <Scene pin  duration="15000" indicators={true}>
              {(progress) => {
                delta = progress - globalProgress;
                globalProgress = progress;

                if (delta >= 0) {
                  for (let i = 0; i < animStack.length; i++) {
                    if (animStack[i] < 1 + delta) {
                      animStack[i] += delta * 3;
                      break;
                    }
                  }
                }
                if (delta < 0) {
                  for (let i = animStack.length; i >= 0; i--) {
                    if (animStack[i] >= 0 - delta) {
                      animStack[i] += delta * 3;
                      break;
                    }
                  }
                }

                return (
                  <div className="progress-list">
                    <ReceiptContainer progress={animStack[0]} />
                    <ConnectionContainer progress={animStack[1]} />
                    <BindingContainer progress={animStack[2]} />
                  </div>
              )}}
            </Scene>
          </Controller>
        </section>

        <section className="content-section" >
          <h1>Just a content</h1>
        </section>































      {/*  <section className="docker-process-scene">*/}
      {/*    <Controller globalSceneOptions={{triggerHook: 0}}>*/}
      {/*      <Scene pin  duration="5000" indicators={true}>*/}
      {/*        {(progress) => (*/}
      {/*            <div className="progress-list">*/}
      {/*              <Timeline totalProgress={progress*2} paused>*/}
      {/*                <Tween {...animDockerLogo}>*/}
      {/*                  <DockerLogo ref={ref} />*/}
      {/*                </Tween>*/}
      {/*                <Tween {...animLineProgress}>*/}
      {/*                  <LeftProgress ref={ref} />*/}
      {/*                </Tween>*/}
      {/*                <Tween {...animLineProgress}>*/}
      {/*                  <RightProgress ref={ref} />*/}
      {/*                </Tween>*/}
      {/*                <Tween {...animLineProgress}>*/}
      {/*                  <CenterProgress ref={ref}/>*/}
      {/*                </Tween>*/}
      {/*              </Timeline>*/}
      {/*            </div>*/}
      {/*        )}*/}
      {/*      </Scene>*/}
      {/*    </Controller>*/}
      {/*  </section>*/}

      {/*  <section className="content-section" >*/}
      {/*    <h1>Just a content</h1>*/}
      {/*  </section>*/}
      </>
  );
}

export default App;
