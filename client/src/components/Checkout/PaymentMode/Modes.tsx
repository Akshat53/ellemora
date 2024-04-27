import React from 'react'
import cashOnDelivery from '../../../assets/svg/payment details.svg';
import gPay from '../../../assets/svg/gpay.svg';
import card from '../../../assets/svg/card.svg';
import netBanking  from '../../../assets/svg/netbank.svg';


interface PaymentOption {
    id: string;
    label: string;
    imgSrc: string;
  }
  
  const paymentOptions: PaymentOption[] = [
    {
      id: 'mode1',
      label: 'Cash on delivery',
      imgSrc: cashOnDelivery,
    },
    {
      id: 'mode2',
      label: 'UPI',
      imgSrc: gPay,
    },
    {
      id: 'mode3',
      label: 'Credit/Debit Cards',
      imgSrc: card,
    },
    {
      id: 'mode4',
      label: 'Net banking',
      imgSrc: netBanking,
    },
  ];

const Modes: React.FC = () => {
  return (
    <div>
        <div className="border-top mx-1 mt-3">
        <div className="text-uppercase mt-3 p-2 fw-medium mb-3" style={{ letterSpacing: '0.1em', fontSize: '18px' }}>
          PLEASE SELECT MODE OF PAYMENT
        </div>
        <div className="d-flex flex-wrap">
          {paymentOptions.map((option, idx) => (
            <div key={idx} className="form-check mb-3 mt-1 w-100 border rounded-2 border-secondary text-center" style={{ height: '40px' }}>
              <input type="radio" className="form-check-input my-2 ms-1 border-2 border-black bg-dark" id={option.id} name="radio-stacked" required />
              <label htmlFor={option.id} className="form-check-label text-uppercase m-1 fs-6 fw-normal">
                {option.label}
              </label>
              <img src={option.imgSrc} alt="" className="m-2 ms-auto" style={{ height: '22px' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modes