import React from 'react'; 
import styles from  './sizeChart.module.css'; // Your custom styles

const SizeChart = ({ onClose }) => {
  return (
    <>
      <div className={`${styles.sizeChartBackdrop}`} onClick={onClose} />
      <div className={`${styles.sizeChartModal}`}>
       
        <div className={`${styles.sizeChartOptions}`}>
          <div>XS</div>
          <div>S</div>
          <div>M</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
       
      </div>
    </>
  );
};

export default SizeChart;
