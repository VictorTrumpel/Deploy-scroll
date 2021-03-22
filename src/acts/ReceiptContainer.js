import {Tween, Timeline} from 'react-gsap';
import React from "react";
import {
  animItemFadeIn,
  animDockerLogo,
  animExtendNodeFadeIn,
  animItemLeft,
  animItemRight,
  animItemTop
} from "../static/animScripts/animScripts";
import DockerLogo from "../static/items/DockerLogo";
import Javaitem from "../static/items/JavaItem";
import PhpItem from "../static/items/PhpItem";
import PythonItem from "../static/items/PythonItem";
import ExtendNodeJSItem from "../static/items/ExtendNodeJSItem";
import NodeJsItem from "../static/items/NodeJSItem";

const ref = React.createRef();

const ReceiptContainer = ({progress}) => (
    <Timeline
        progress={progress}
        paused
    >
        <Tween {...animDockerLogo}>
          <DockerLogo ref={ref} />
        </Tween>

        <div className="java-line line">
          <svg width="100%" height="100%" viewBox="0 0 207 214" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: -300}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="500" d="M60.5 153.5H85.5V153.5C91.8513 153.5 97 148.351 97 142V62.5H136.5" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="backend-container java">
          <Tween {...animItemRight}>
            <Javaitem ref={ref} />
          </Tween>
        </div>

        <div className="python-line line">
          <svg width="340" height="260" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/*<Tween from={{strokeDashoffset: -500}} to={{strokeDashoffset: -661}}>*/}
            <Tween from={{strokeDashoffset: -340}} to={{strokeDashoffset: -680}}>
              <path strokeDasharray="500" d="M61.0742 62.459L95.8872 79.4409H166.5V127.5" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="backend-container python">
          <Tween {...animItemTop}>
            <PythonItem ref={ref} />
          </Tween>
        </div>

        <div className="php-line line">
          <svg width="124" height="190" viewBox="0 0 124 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: -500}} to={{strokeDashoffset: -576}}>
              <path strokeDasharray="500" d="M62.2598 60.9702V120.407" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="backend-container php">
          <Tween {...animItemTop}>
            <PhpItem ref={ref} />
          </Tween>
        </div>

        <div className="extend-nodejs-line line">
          <svg width="100%" height="100%" viewBox="0 0 190 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 509}} to={{strokeDashoffset: 427}}>
              <path strokeDasharray="500" d="M60.0566 62.5132H119.493" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="extend-nodejs">
          <Tween {...animExtendNodeFadeIn}>
            <ExtendNodeJSItem ref={ref} />
          </Tween>
        </div>

        <div className="node1-line line">
          <svg width="386" height="444" viewBox="0 0 386 444" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 501}} to={{strokeDashoffset: 0}}>
              <path strokeDasharray="500" d="M116.852 62.2236L87.5586 88.1211L87.0849 367H62.5V388.5" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="node1 nodejs-container">
          <Tween {...animItemTop}>
            <NodeJsItem ref={ref} />
          </Tween>
        </div>

        <div className="node2-line line">
          <svg width="186" height="142" viewBox="0 0 186 142" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 503}} to={{strokeDashoffset: 399}}>
              <path strokeDasharray="500" d="M60 62H124V81.5" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="node2 nodejs-container">
          <Tween {...animItemTop}>
            <NodeJsItem ref={ref} />
          </Tween>
        </div>

        <div className="node3-line line">
          <svg width="207" height="144" viewBox="0 0 207 144" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{strokeDashoffset: 503}} to={{strokeDashoffset: 399}}>
              <path strokeDasharray="500" d="M60 62H144.5V84" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="node3 nodejs-container">
          <Tween {...animItemTop}>
            <NodeJsItem ref={ref} />
          </Tween>
        </div>

        <div className="nodejs-container">

        </div>
    </Timeline>
)

export default ReceiptContainer