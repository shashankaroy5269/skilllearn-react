import React, { useState } from 'react';
import './Payment.css';

// Images Import (Adjust paths as per your folder structure)
import paymentBack from '../../assets/PaymentPage/payment-back.png';
import paymentLogo from '../../assets/PaymentPage/payment-logo.png';
import masterCard from '../../assets/PaymentPage/master-card.png';

const Payment = () => {
  const [activeTab, setActiveTab] = useState('card');
   // Tab switching logic
const invoiceData = {
    items: [
      { id: 1, name: 'Business & Data Analytics', price: 60.00, expiry: '15th March 2026' },
      { id: 2, name: 'Blockchain Technology', price: 60.00, expiry: '15th March 2026' },
      { id: 3, name: 'Project Management', price: 60.00, expiry: '15th March 2026' },
      { id: 4, name: 'Discount & Offers', price: 0.00 }
    ],
    tax: 0.00
  };
  const subTotal = invoiceData.items.reduce((sum, item) => sum + item.price, 0);
  const totalAmount = subTotal + invoiceData.tax;
  return (
    <section className="payment-sec">
      <div className="payment-curve">
        <img src={paymentBack} alt="background curve" />
      </div>
      <div className="container">
        <div className="payment-hdr">
          <h1 className="title1">Payment Page</h1>
        </div>
        <div className="payment-cntn">
          <div className="row g-0"> {/* g-0 used to remove gap between columns if needed */}
            
            {/* LEFT SECTION: Invoice/Details */}
            <div className="col-12 col-sm-6">
              <div className="payment-left">
                <div className="payment-logo">
                  <img src={paymentLogo} alt="Skillearn Logo" />
                </div>
                <button className="pdf-btn d-flex align-items-center border-0 bg-transparent mt-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="me-2">
                    <path d="M9.99986 0C9.7547 5.89114e-05 9.5196 0.0974745 9.34625 0.270829C9.17289 0.444183 9.07548 0.679285 9.07542 0.924444V11.4707L5.54008 7.93533C5.45423 7.84949 5.35231 7.7814 5.24014 7.73495C5.12797 7.6885 5.00775 7.6646 4.88634 7.66461C4.64114 7.66463 4.406 7.76205 4.23264 7.93544C4.05928 8.10884 3.96189 8.344 3.96191 8.58919C3.96193 8.83438 4.05936 9.06952 4.23275 9.24289L9.34608 14.3556C9.51952 14.5289 9.75467 14.6262 9.99986 14.6262C10.2451 14.6262 10.4802 14.5289 10.6536 14.3556L15.767 9.242C15.9404 9.06864 16.0378 8.83349 16.0378 8.5883C16.0378 8.34311 15.9404 8.10795 15.7671 7.93456C15.5937 7.76116 15.3586 7.66374 15.1134 7.66372C14.8682 7.6637 14.633 7.76108 14.4596 7.93444L10.9243 11.4707V0.924444C10.9242 0.679285 10.8268 0.444183 10.6535 0.270829C10.4801 0.0974745 10.245 5.89114e-05 9.99986 0Z" fill="#2568EF"/>
                    <path d="M0.924444 12.2233C0.679267 12.2233 0.44413 12.3207 0.270763 12.4941C0.0973964 12.6675 0 12.9026 0 13.1478V16.194C0.00111756 17.2031 0.402465 18.1705 1.11599 18.884C1.82951 19.5975 2.79693 19.9989 3.806 20H16.194C17.2031 19.9989 18.1705 19.5975 18.884 18.884C19.5975 18.1705 19.9989 17.2031 20 16.194V13.1478C20 13.0264 19.9761 12.9062 19.9296 12.794C19.8832 12.6818 19.8151 12.5799 19.7292 12.4941C19.6434 12.4082 19.5415 12.3402 19.4293 12.2937C19.3172 12.2472 19.197 12.2233 19.0756 12.2233C18.9542 12.2233 18.8339 12.2472 18.7218 12.2937C18.6096 12.3402 18.5077 12.4082 18.4219 12.4941C18.336 12.5799 18.2679 12.6818 18.2215 12.794C18.175 12.9062 18.1511 13.0264 18.1511 13.1478V16.194C18.1505 16.7129 17.9441 17.2103 17.5772 17.5772C17.2103 17.9441 16.7129 18.1505 16.194 18.1511H3.806C3.28712 18.1505 2.78967 17.9441 2.42276 17.5772C2.05586 17.2103 1.84948 16.7129 1.84889 16.194V13.1478C1.84892 13.0264 1.82503 12.9061 1.77858 12.794C1.73213 12.6818 1.66404 12.5799 1.57819 12.494C1.49234 12.4082 1.39042 12.3401 1.27825 12.2936C1.16608 12.2472 1.04585 12.2233 0.924444 12.2233Z" fill="#2568EF"/>
                  </svg>
                  Download Invoice in PDF
                </button>

                <div className="price-details-container mt-4">
                  {[
                    { name: 'Business & Data Analytics', price: '$60.00' },
                    { name: 'Blockchain Technology', price: '$60.00' },
                    { name: 'Project Management', price: '$60.00' },
                    { name: 'Discount & Offers', price: '$00.00' }
                  ].map((item, idx) => (
                    <div key={idx} className="pay-price mb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">{item.name}:</h5>
                        <span className="fw-bold">{item.price}</span>
                      </div>
                      {item.name !== 'Discount & Offers' && (
                        <p className="small-text text-muted mb-0">Valid till 15th March 2026</p>
                      )}
                    </div>
                  ))}
                  
                  <hr className="my-3" />
                  
                  <div className="pay-price mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Tax:</h5>
                      <span className="fw-bold">$00.00</span>
                    </div>
                  </div>
                  <div className="pay-price">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="total mb-0 fw-bold">Total:</h5>
                      <span className="total-amount h3 fw-bold mb-0">$240.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION: Payment Form */}
            <div className="col-12 col-sm-6">
              <div className="payment-right p-4">
                <div className="pay-option-btns d-flex gap-3 mb-4">
                  <button 
                    className={`payment-btn d-flex align-items-center gap-2 ${activeTab === 'card' ? 'active1' : ''}`}
                    onClick={() => setActiveTab('card')}
                  >
<svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3125 10.937V8.74945H2.1875C0.982188 8.74945 0 9.73164 0 10.937V15.312H15.7741C15.47 13.9754 15.3125 12.536 15.3125 10.937ZM34.9103 19.687C33.4184 21.986 31.1434 23.9416 27.8841 25.8141C27.3831 26.1007 26.8188 26.2495 26.25 26.2495C25.6812 26.2495 25.1169 26.1007 24.6225 25.8185C21.3631 23.9416 19.0881 21.9838 17.5941 19.687H0V30.6245C0 31.832 0.982188 32.812 2.1875 32.812H32.8125C34.02 32.812 35 31.832 35 30.6245V19.687H34.9103ZM9.84375 26.2495H5.46875C4.865 26.2495 4.375 25.7595 4.375 25.1557C4.375 24.552 4.865 24.062 5.46875 24.062H9.84375C10.4475 24.062 10.9375 24.552 10.9375 25.1557C10.9375 25.7595 10.4475 26.2495 9.84375 26.2495Z"
                        fill="#100F0F"
                      />
                      <path
                        d="M34.3372 5.55789L26.6809 2.27664C26.5444 2.21819 26.3974 2.18805 26.2489 2.18805C26.1004 2.18805 25.9534 2.21819 25.8169 2.27664L18.1606 5.55789C17.7603 5.72852 17.5 6.12445 17.5 6.56195V10.937C17.5 16.9548 19.7247 20.4723 25.7053 23.9176C25.8738 24.0138 26.0619 24.062 26.25 24.062C26.4381 24.062 26.6262 24.0138 26.7947 23.9176C32.7753 20.481 35 16.9635 35 10.937V6.56195C35 6.12445 34.7397 5.72852 34.3372 5.55789ZM30.3866 10.5279L26.0116 15.9966C25.8016 16.2548 25.4866 16.4057 25.1562 16.4057H25.1103C24.9383 16.3982 24.7705 16.3503 24.6204 16.266C24.4702 16.1816 24.3421 16.0631 24.2462 15.9201L22.0587 12.6388C21.7241 12.1357 21.8597 11.4576 22.3628 11.1229C22.8616 10.7904 23.5419 10.9216 23.8788 11.427L25.2372 13.4635L28.6759 9.16289C29.0544 8.69258 29.7434 8.61821 30.2138 8.99227C30.6863 9.36633 30.7606 10.0554 30.3866 10.5279Z"
                        fill="#100F0F"
                      />
                    </svg><span>Credit / Debit Cards</span>
                  </button>
                  <button 
                    className={`payment-btn d-flex align-items-center gap-2 ${activeTab === 'bank' ? 'active1' : ''}`}
                    onClick={() => setActiveTab('bank')}
                  >
<svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.8981 14.5788L16.7731 8.0163C16.6592 7.95934 16.5336 7.92969 16.4062 7.92969C16.2789 7.92969 16.1533 7.95934 16.0394 8.0163L2.91437 14.5788C2.77811 14.6469 2.66353 14.7517 2.58344 14.8813C2.50335 15.0108 2.46094 15.1602 2.46094 15.3125V17.5C2.46094 17.7176 2.54736 17.9262 2.7012 18.0801C2.85504 18.2339 3.06369 18.3203 3.28125 18.3203H4.64844V29.8047H3.28125C3.06369 29.8047 2.85504 29.8911 2.7012 30.045C2.54736 30.1988 2.46094 30.4074 2.46094 30.625V33.9063C2.46094 34.1238 2.54736 34.3325 2.7012 34.4863C2.85504 34.6401 3.06369 34.7266 3.28125 34.7266H29.5312C29.7488 34.7266 29.9575 34.6401 30.1113 34.4863C30.2651 34.3325 30.3516 34.1238 30.3516 33.9063V30.625C30.3516 30.4074 30.2651 30.1988 30.1113 30.045C29.9575 29.8911 29.7488 29.8047 29.5312 29.8047H28.1641V18.3203H29.5312C29.7488 18.3203 29.9575 18.2339 30.1113 18.0801C30.2651 17.9262 30.3516 17.7176 30.3516 17.5V15.3125C30.3516 15.1602 30.3091 15.0108 30.2291 14.8813C30.149 14.7517 30.0344 14.6469 29.8981 14.5788ZM6.28906 18.3203H6.83594V29.8047H6.28906V18.3203ZM10.1172 18.3203V29.8047H8.47656V18.3203H10.1172ZM18.8672 18.3203V29.8047H13.9453V18.3203H18.8672ZM24.3359 18.3203V29.8047H22.6953V18.3203H24.3359ZM21.0547 29.8047H20.5078V18.3203H21.0547V29.8047ZM12.3047 29.8047H11.7578V18.3203H12.3047V29.8047ZM28.7109 33.0859H4.10156V31.4453H28.7109V33.0859ZM26.5234 29.8047H25.9766V18.3203H26.5234V29.8047ZM28.7109 16.6797H4.10156V15.8195L16.4062 9.66718L28.7109 15.8195V16.6797Z"
                        fill="#100F0F"
                      />
                      <path
                        d="M16.4062 13.9453C16.8593 13.9453 17.2266 13.578 17.2266 13.125C17.2266 12.672 16.8593 12.3047 16.4062 12.3047C15.9532 12.3047 15.5859 12.672 15.5859 13.125C15.5859 13.578 15.9532 13.9453 16.4062 13.9453Z"
                        fill="#100F0F"
                      />
                      <path
                        d="M26.5234 10.9375C26.5234 11.1551 26.6099 11.3637 26.7637 11.5175C26.9175 11.6714 27.1262 11.7578 27.3438 11.7578C27.5613 11.7578 27.77 11.6714 27.9238 11.5175C28.0776 11.3637 28.1641 11.1551 28.1641 10.9375C28.1628 9.85008 27.7303 8.80754 26.9614 8.03862C26.1925 7.26969 25.1499 6.83717 24.0625 6.83594C23.8449 6.83594 23.6363 6.92236 23.4825 7.0762C23.3286 7.23004 23.2422 7.43869 23.2422 7.65625C23.2422 7.87381 23.3286 8.08246 23.4825 8.2363C23.6363 8.39014 23.8449 8.47656 24.0625 8.47656C24.715 8.47729 25.3405 8.7368 25.8018 9.19815C26.2632 9.65951 26.5227 10.285 26.5234 10.9375Z"
                        fill="#100F0F"
                      />
                      <path
                        d="M24.0625 3.55469C23.8449 3.55469 23.6363 3.64111 23.4825 3.79495C23.3286 3.94879 23.2422 4.15744 23.2422 4.375C23.2422 4.59256 23.3286 4.80121 23.4825 4.95505C23.6363 5.10889 23.8449 5.19531 24.0625 5.19531C25.5849 5.19712 27.0444 5.80268 28.1208 6.87916C29.1973 7.95564 29.8029 9.41513 29.8047 10.9375C29.8047 11.1551 29.8911 11.3637 30.045 11.5175C30.1988 11.6714 30.4074 11.7578 30.625 11.7578C30.8426 11.7578 31.0512 11.6714 31.205 11.5175C31.3589 11.3637 31.4453 11.1551 31.4453 10.9375C31.4431 8.98014 30.6645 7.10359 29.2805 5.71952C27.8964 4.33546 26.0199 3.55691 24.0625 3.55469Z"
                        fill="#100F0F"
                      />
                      <path
                        d="M24.0625 0.273438C23.8449 0.273438 23.6363 0.359863 23.4825 0.513701C23.3286 0.66754 23.2422 0.87619 23.2422 1.09375C23.2422 1.31131 23.3286 1.51996 23.4825 1.6738C23.6363 1.82764 23.8449 1.91406 24.0625 1.91406C29.038 1.91406 33.0859 5.96196 33.0859 10.9375C33.0859 11.1551 33.1724 11.3637 33.3262 11.5175C33.48 11.6714 33.6887 11.7578 33.9062 11.7578C34.1238 11.7578 34.3325 11.6714 34.4863 11.5175C34.6401 11.3637 34.7266 11.1551 34.7266 10.9375C34.7266 5.0573 29.9427 0.273438 24.0625 0.273438Z"
                        fill="#100F0F"
                      />
                    </svg><span>Bank Transfer</span>
                  </button>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="card-details mb-3">
                    <label className="form-label">Card Holder’s Name</label>
                    <input type="text" className="form-control" placeholder="Enter Your Full Name" />
                  </div>
                  
                  <div className="card-details mb-3">
                    <label className="form-label">Card Number</label>
                    <div className="card-wrpr">
                      <img src={masterCard} alt="MasterCard" className="card-icon-overlay" />
                      <input type="number" className="form-control card-input" placeholder="Enter Card Number" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 card-details mb-3">
                      <label className="form-label">Expiry</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col-md-6 card-details mb-3">
                      <label className="form-label">CVV</label>
                      <input type="password" className="form-control" placeholder="***" />
                    </div>
                  </div>

                  <div className="form-check d-flex align-items-center mb-4">
                    <input className="form-check-input" type="checkbox" id="rememberCard" />
                    <label className="form-check-label ms-2" htmlFor="rememberCard"> Remember Bank Card </label>
                  </div>

                  <div className="banner-btn">
                    <button className="btn btn-secondary section-btn w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                      Pay Now 
                       <svg
                          width="13"
                          height="17"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z"
                            fill="black"
                          />
                        </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;