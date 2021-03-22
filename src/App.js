import './App.scss';
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import ReceiptContainer from './acts/ReceiptContainer';
import ConnectionContainer from "./acts/ConnectionContainer";
import BindingContainer from "./acts/BindingContainer";
import {createGlobalProgress, createProgressStack} from "./progressHooks/progressWather";
import {Timeline, Tween} from "react-gsap";

const globalProgress = createGlobalProgress();
const [progressStack, setProgressStack] = createProgressStack(
    ["receiptProgress", "connectionProgress", "bindingProgress"]);

function App() {
  return (
      <>
        <section className="content-section" >
          <h1>Just a content</h1>
        </section>

        <section className="docker-progress-scene">
          <Controller globalSceneOptions={{triggerHook: 0}}>
            <Scene pin  classToggle="fade-in" duration="20000">
              {(progress) => {
                const offset = globalProgress(progress);
                setProgressStack(progressStack, offset);

                const {receiptProgress, connectionProgress, bindingProgress} = progressStack;
                return (
                  <div className="progress-list hide">
                    <h3 className="progress-list-header">Для чего?</h3>

                    <div className="progress-list-deploy receipt-container">
                      <ReceiptContainer progress={receiptProgress} />
                    </div>
                    <div className="progress-list-deploy connection-container">
                      <ConnectionContainer progress={connectionProgress} />
                    </div>
                    <div className="progress-list-deploy binding-container">
                      <BindingContainer progress={bindingProgress} />
                    </div>

                    <div className="progress-list-text text-container">
                      <Timeline
                        progress={receiptProgress}
                        paused
                        target={
                          <div className="text-item">
                            <span className="number">01.</span>
                            <h5>Развертывание приложений используя подходы</h5>
                            <p>
                              <span className="blue-light">Heroku buildpack и Dockerfile </span>
                              или с помощью предустановленной конфигурации
                            </p>
                          </div>
                        }
                      >
                        <Tween
                            from={{transform: "translateY(100px)",opacity: 0}}
                            to={{transform: "translateY(0px)", opacity: 1}}
                        />
                        <Tween
                            to={{transform: "translateY(-100px)", opacity: 0}}
                        />

                      </Timeline>

                      <Timeline
                          progress={connectionProgress}
                          paused
                          target={
                            <div className="text-item">
                              <span className="number">02.</span>
                              <h5>Развертывание приложений используя подходы</h5>
                              <p>
                                <span className="blue-light">Heroku buildpack и Dockerfile </span>
                                или с помощью предустановленной конфигурации
                              </p>
                            </div>
                          }
                      >
                        <Tween
                            from={{transform: "translateY(100px)",opacity: 0}}
                            to={{transform: "translateY(0px)", opacity: 1}}
                        />
                        <Tween
                            to={{transform: "translateY(-100px)", opacity: 0}}
                        />
                      </Timeline>

                      <Timeline
                          progress={bindingProgress}
                          paused
                          target={
                            <div className="text-item">
                              <span className="number">03.</span>
                              <h5>Развертывание приложений используя подходы</h5>
                              <p>
                                <span className="blue-light">Heroku buildpack и Dockerfile </span>
                                или с помощью предустановленной конфигурации
                              </p>
                            </div>
                          }
                      >
                        <Tween
                            from={{transform: "translateY(100px)",opacity: 0}}
                            to={{transform: "translateY(0px)", opacity: 1}}
                        />
                        <Tween
                            to={{transform: "translateY(-100px)", opacity: 0}}
                        />
                      </Timeline>
                    </div>
                  </div>
              )}}
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
