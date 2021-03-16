import React from 'react';
import RightItemsProgress from "./RightItemsProgress";
import RightTopProgress from "./RightTopProgress";

const RightProgress = React.forwardRef((props, ref) => (
    <>
      <RightItemsProgress />
      <div className="progress-right">
        <img ref={ref} src="/right-line.svg" alt=""/>
      </div>
      <RightTopProgress />
    </>
));

export default RightProgress;