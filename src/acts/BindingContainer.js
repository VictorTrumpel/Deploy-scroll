import {Tween, Timeline} from 'react-gsap';
import React from "react";

const BindingContainer = ({progress}) => (
    <Timeline
        progress={progress*1.4}
        paused
    >
      <div className="sql-redis-line line">
        <Tween from={{height: 0}} to={{height: 50}}>
          <span className="vertical-dotted from-sql" />
        </Tween>
        <Tween from={{width: 0}} to={{width: 123}}>
          <span className="horizontal-dotted" />
        </Tween>
        <Tween from={{height: 0}} to={{height: 50}}>
          <span className="vertical-dotted from-redis" />
        </Tween>
        <Tween from={{height: 0}} to={{height: 34}}>
          <span className="vertical-dotted from-php" />
        </Tween>
      </div>

      <div className="postre-redis-line line">
        <Tween from={{width: 0}} to={{width: 50}}>
          <span className="horizontal-dotted from-postre" />
        </Tween>
        <Tween from={{width: 0}} to={{width: 50}}>
          <span className="horizontal-dotted from-redis" />
        </Tween>
        <Tween from={{height: 0}} to={{height: 157}}>
          <span className="vertical-dotted" />
        </Tween>
        <Tween from={{width: 0}} to={{width: 50}}>
          <span className="horizontal-dotted from-java" />
        </Tween>
      </div>

      <div className="python-maria-line line">
        <Tween from={{width: 0}} to={{width: 71}}>
          <span className="horizontal-dotted" />
        </Tween>
        <Tween from={{height: 0}} to={{height: 70}}>
          <span className="vertical-dotted" />
        </Tween>
      </div>

      <div className="node-container-line line">
        <Tween from={{height: 0}} to={{height: 50}}>
          <span className="vertical-dotted from-node1" />
        </Tween>
        <Tween from={{height: 0}} to={{height: 50}}>
          <span className="vertical-dotted from-node2" />
        </Tween>
        <Tween from={{height: 0}} to={{height: 50}}>
          <span className="vertical-dotted from-node3" />
        </Tween>
        <Tween from={{width: 0}} to={{width: 182}}>
          <span className="horizontal-dotted node-long-line" />
        </Tween>
        <Tween from={{width: 0}} to={{width: 68}}>
          <span className="horizontal-dotted from-node-postre" />
        </Tween>
        <Tween from={{width: 0}} to={{width: 32}}>
          <span className="horizontal-dotted from-postre-node2" />
        </Tween>
        <Tween from={{height: 0}} to={{height: 80}}>
          <span className="vertical-dotted from-postre-node2" />
        </Tween>
        <Tween from={{height: 0}} to={{height: 98}}>
          <span className="vertical-dotted from-node1-postre" />
        </Tween>
        <Tween from={{width: 0}} to={{width: 40}}>
          <span className="horizontal-dotted from-node1-postre" />
        </Tween>
        <Tween from={{height: 0}} to={{height: 80}}>
          <span className="vertical-dotted from-redis" />
        </Tween>
      </div>

    </Timeline>
)

export default BindingContainer