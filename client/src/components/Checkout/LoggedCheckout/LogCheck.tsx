import React from 'react';
import Modes from '../PaymentMode/Modes';

interface LoggedData {
  name: string;
  address: string;
  mobileNo: string;
}

const loggeddata: LoggedData[] = [
  {
    name: "Simran Kaur",
    address: "Amiltus Builders, Tulsi Nagar, Uttar Pradesh, Bareilly, India, 243001",
    mobileNo: '+91 8783847893',
  },
];

const LogCheck: React.FC = () => {
  return (
    <div>
      <div className="text-uppercase fs-5 px-3 mt-4" style={{ letterSpacing: '0.1em' }}>
        DELIVER THIS ITEM TO
      </div>
      {loggeddata.map((log, idx) => (
        <div key={idx}>
          <div className="px-3 text-wrap">
            <div className="text-dark fw-semibold py-1 mt-2" style={{ letterSpacing: '0.1em', fontSize: '15px' }}>
              {log.name}
            </div>
            <div style={{ letterSpacing: '0.1em', fontSize: '15px' }}>{log.address}</div>
            <div className="d-flex justify-content-between">
              <div style={{ letterSpacing: '0.1em', fontSize: '15px' }}>{log.mobileNo}</div>
              <div className="d-flex align-items-end p-2">
                <button
                  type="button"
                  className="btn btn-dark rounded fw-light me-2"
                  style={{
                    height: '50px',
                    border: '0.48px solid #9F9F9F',
                    letterSpacing: '0.1em',
                    width: '95px',
                    fontSize: '14px',
                  }}
                >
                  Change
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded fw-light mx-1"
                  style={{
                    height: '50px',
                    border: '0.48px solid #9F9F9F',
                    letterSpacing: '0.1em',
                    width: '95px',
                    fontSize: '14px',
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-2 py-1">
            <div className="form-check">
              <input
                className="form-check-input"
                style={{ backgroundColor: '#2A2A2A', width: '15px', height: '15px', borderColor: '1.5pxsolid #2A2A2A' }}
                type="checkbox"
                id="address"
              />
              <label className="form-check-label"
                style={{ color: '#6B6B6B', letterSpacing: '0.1em', fontSize: '13px' }}
                htmlFor="address"
              >
                Billing address is same as shipping address
              </label>
            </div>
          </div>
        </div>
      ))}
      <Modes/>
      <div className='px-2'>
        <button type="button" className="btn w-100 rounded-0 my-2 fw-normal text-uppercase" style={{ height: '50px', background: '#B50000', color: '#FFFFFF', letterSpacing:'0.1em'}}>Place Order</button>
      </div>
    </div>
  );
};

export default LogCheck;
