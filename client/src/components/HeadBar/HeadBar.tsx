import React from 'react';
import styles from './bar.module.css';
import back from '../../assets/svg/back.svg';

interface headerProps {
    header: string;
}


const HeadBar: React.FC <headerProps> = ({header}) => {
  return (
    <div className='d-flex position-relative justify-content-center p-1 mt-1 border-bottom'>
        <div className='position-absolute start-0 ms-2 p-1'>
            <img src={back} alt="back" />
        </div>
        <div className='p-1 fs-6 '>
            {header}
        </div>
    </div>
  )
}

export default HeadBar