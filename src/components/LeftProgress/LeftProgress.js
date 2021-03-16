import React from 'react';
import LeftItemsProgress from "./LeftItemsProgress";

const LeftProgress = React.forwardRef(({progress}, ref) => (
    <>
      <LeftItemsProgress />
      <div className="progress-left">
        <img ref={ref} src="/left-line.svg" alt=""/>
      </div>
    </>
));

export default LeftProgress;