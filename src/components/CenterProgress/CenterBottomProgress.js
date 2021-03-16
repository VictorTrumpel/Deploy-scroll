import React from 'react';
import {Tween, Timeline} from 'react-gsap';
import CenterBottomProgressItem from "./CenterBottomProgressItem";

const animLineProgress = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  }
}

const animCenterItem = {
  from: {
    opacity: 0,
    scale: 0,
    yPercent: 100,
  },
  to: {
    opacity: 1,
    scale: 1,
    yPercent: 0,
    width: 50,
    height: 50,
    borderRadius: 5,
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    background: "white",
  }
}

const CenterBottomProgress = React.forwardRef((props, ref) => (
    <div className="progress-center-bottom">
      <Timeline>
        <Tween {...animLineProgress}>
          <img ref={ref} src="/center-bottom-line.svg" alt=""/>
        </Tween>
        <CenterBottomProgressItem />
      </Timeline>
    </div>

));

export default CenterBottomProgress;