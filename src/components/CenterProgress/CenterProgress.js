import React from 'react';
import CenterItemsProgress from "./CenterItemsProgress";
import CenterBottomProgress from "./CenterBottomProgress";

const CenterProgress = React.forwardRef(({progress}, ref) => (
    <>
      <div className="progress-center">
        <img ref={ref} src="/center-line.svg" alt=""/>
      </div>
      <CenterItemsProgress />
      <CenterBottomProgress />
    </>
));

export default CenterProgress;