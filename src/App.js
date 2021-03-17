import './App.scss';
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import ReceiptContainer from './acts/ReceiptContainer';
import ConnectionContainer from "./acts/ConnectionContainer";
import BindingContainer from "./acts/BindingContainer";

let globalProgress = 0,
    delta = 0;

let redAnimProgress = 0,
    greenAnimProgress = 0,
    blueAnimProgress = 0

const animStack = [
    redAnimProgress,
    greenAnimProgress,
    blueAnimProgress
];

function App() {

  function createProgress(animStack) {
    const progressStack = {}
    animStack.forEach((item, index) => {
      progressStack[animStack[index]] = 0
    })

    const setProgressStack = (stack, offset) => {
      const factor = Object.keys(stack).length;

      const scroll = offset > 0 ? "scroll-to-bot" : "scroll-to-top";

      if (scroll === "scroll-to-bot") {
        for (const key in stack) {
          let progress = stack[key];
          if (progress < 1) {
            progress += offset * factor;
            if (progress > 1) progress = 1;
            stack[key] = progress;
            break;
          }
        }
      }
      if (scroll === "scroll-to-top") {
        for (const key in stack) {
          let progress = stack[key];
          if (progress > 0) {
            progress += offset * factor;
            if (progress < 0) progress = 0;
            stack[key] = progress;
            break;
          }
        }
      }


      console.log(stack);
    }
    return [progressStack, setProgressStack]
  }

  const [progressStack, setProgress] = createProgress(
      ["receiptProgress", "connectionProgress", "BindingContainer"]);




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

                setProgress(progressStack, delta)

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
      </>
  );
}

export default App;
