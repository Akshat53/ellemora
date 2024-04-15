import React from 'react';
import styles from './bar.module.css';
import back from '../../assets/svg/back.svg';

interface headerProps {
    header: string;
}


const HeadBar: React.FC <headerProps> = ({header}) => {
  return (
    <div className='d-flex position-relative justify-content-center'>
        <div className='position-absolute start-0'>
            <img src={back} alt="back" />
        </div>
        <div className=''>
            {header}
        </div>
    </div>
  )
}

export default HeadBar