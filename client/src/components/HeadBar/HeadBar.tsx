import React from 'react';
import styles from './bar.module.css';
import back from '../../assets/svg/back.svg';

interface headerProps {
    header: string;
}


const HeadBar: React.FC <headerProps> = ({header}) => {
  return (
    <div>
        <div>
            <img src={back} alt="back" />
        </div>
        <div>
        {header}
        </div>
    </div>
  )
}

export default HeadBar