import {Tween, Timeline} from 'react-gsap';
import React from "react";
import {animItemFadeIn, animDockerLogo, animExtendNodeFadeIn} from "../static/animScripts/animScripts";
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
      <div className="progress-list-deploy receipt-container">
        <Tween {...animDockerLogo}>
          <DockerLogo ref={ref} />
        </Tween>

        <div className="backend-container">
          <div className="java">
            <Tween {...animItemFadeIn}>
              <Javaitem ref={ref} />
            </Tween>
          </div>
          <div className="php">
            <Tween {...animItemFadeIn}>
              <PhpItem ref={ref} />
            </Tween>
          </div>
          <div className="python">
            <Tween {...animItemFadeIn}>
              <PythonItem ref={ref} />
            </Tween>
          </div>
        </div>

        <div className="extend-nodejs">
          <Tween {...animExtendNodeFadeIn}>
            <ExtendNodeJSItem ref={ref} />
          </Tween>
        </div>

        <div className="java-line line">
          <svg width="100%" height="100%" viewBox="0 0 207 214" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{opacity: 0, strokeDashoffset: 415}} to={{opacity: 1, strokeDashoffset: 274}}>
              <path stroke="#DDE4F5" strokeDasharray="414" strokeWidth="4px" d="M123 60C104.222 60 89 75.2223 89 94V150H60V154H93V94C93 77.4315 106.431 64 123 64H147V60H123Z" fill="none"/>
            </Tween>
          </svg>
        </div>

        <div className="python-line line">
          <svg width="340" height="260" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{opacity: 0, strokeDashoffset: 400}} to={{opacity: 1, strokeDashoffset: 800}}>
              <path strokeDasharray="400" d="M277.594 199.163V129.441C277.594 101.827 255.208 79.4409 227.594 79.4409H95.8872L61.0742 62.459" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
            <Tween from={{opacity: 0, strokeDashoffset: 400}} to={{opacity: 1, strokeDashoffset: 800}}>
              <path strokeDasharray="400" d="M166.363 79.4409V126.141" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>

        <div className="php-line line">
          <svg width="124" height="190" viewBox="0 0 124 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{opacity: 0, strokeDashoffset: -160}} to={{opacity: 1, strokeDashoffset: -229}}>
              <path stroke="#DDE4F5" strokeDasharray="160" strokeWidth="4px" fillRule="evenodd" clipRule="evenodd" d="M60 130V60H64V130H60Z" fill="none"/>
            </Tween>
          </svg>
        </div>

        <div className="extend-nodejs-line line">
          <svg width="100%" height="100%" viewBox="0 0 190 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{opacity: 0, strokeDashoffset: 436}} to={{opacity: 1, strokeDashoffset: 366}}>
              <path stroke="#DDE4F5" strokeDasharray="146" strokeWidth="4px" fillRule="evenodd" clipRule="evenodd" d="M130 64H60V60H130V64Z" fill="none"/>
            </Tween>
          </svg>
        </div>

        <div className="nodejs-container">
          <Tween {...animItemFadeIn}>
            <NodeJsItem ref={ref} />
          </Tween>
          <Tween {...animItemFadeIn}>
            <NodeJsItem ref={ref} />
          </Tween>
          <Tween {...animItemFadeIn}>
            <NodeJsItem ref={ref} />
          </Tween>
        </div>

        <div className="node-line line">
          <svg width="386" height="444" viewBox="0 0 386 444" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Tween from={{opacity: 0, strokeDashoffset: 394}} to={{opacity: 1, strokeDashoffset: 75}}>
              <path strokeDasharray="397" d="M88.5586 367.474V88.1211L117.852 62.2236" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
            <Tween from={{opacity: 0, strokeDashoffset: 306}} to={{opacity: 1, strokeDashoffset: 0}}>
              <path strokeDasharray="305" d="M62.2363 383.606V366.625H323.758V383.606" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
            <Tween from={{opacity: 0, strokeDashoffset: -16}} to={{opacity: 1, strokeDashoffset: 0}}>
              <path strokeDasharray="45" d="M150.541 383.606V366.625" stroke="#DDE4F5" strokeWidth="4"/>
              <path strokeDasharray="45" d="M241.395 383.606V366.625" stroke="#DDE4F5" strokeWidth="4"/>
            </Tween>
          </svg>
        </div>
      </div>
    </Timeline>
)

export default ReceiptContainer