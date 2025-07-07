import React, { useState } from 'react';

function ConfessionForm({ setCurrentPage }) {
  const [nickname, setNickname] = useState('');
  const [confession, setConfession] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [department, setDepartment] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('You must accept the terms and conditions!');
      return;
    }
    if (!ageRange || !department) {
      alert('Please select age range and department!');
      return;
    }
    // İtiraf gönderme işlemi burada yapılacak
    console.log({ nickname, confession, ageRange, department });
    alert('Confession submitted successfully!');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card" style={{border: '3px solid #3bea0c', backgroundColor: '#e8f5e8'}}>
            <div className="card-body p-4">
              <h2 className="text-center mb-4" style={{color: '#2d5016'}}>Anonymous Confession</h2>
              <p className="text-center mb-4" style={{color: '#2d5016'}}>
                We understand that sometimes, it's hard to share personal thoughts or challenges 
                openly at work. This space is here for you to express yourself freely and 
                anonymously, without fear of judgment. Whether it's a small frustration, a big idea, 
                or something you've been holding onto, your confession matters. It's a safe place 
                to be heard. Take a moment to reflect and let your voice 
                be part of creating a more open, supportive workplace. We're here to listen.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="row mb-3 align-items-center">
                  <div className="col-md-3">
                    <label className="form-label fw-bold" style={{color: '#2d5016', textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>Nickname</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter nickname"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      maxLength={50}
                      required
                      style={{backgroundColor: 'white', border: '2px solid #3bea0c'}}
                    />
                    <small className="text-muted">Max 50 characters</small>
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <div className="col-md-3">
                    <label className="form-label fw-bold" style={{color: '#2d5016'}}>Age Range</label>
                  </div>
                  <div className="col-md-9">
                    <select
                      className="form-select"
                      value={ageRange}
                      onChange={(e) => setAgeRange(e.target.value)}
                      required
                      style={{backgroundColor: 'white', border: '2px solid #3bea0c'}}
                    >
                      <option value="">Select your age range</option>
                      <option value="18-28">18-28</option>
                      <option value="28-38">28-38</option>
                      <option value="38-48">38-48</option>
                      <option value="48+">48+</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <div className="col-md-3">
                    <label className="form-label fw-bold" style={{color: '#2d5016'}}>Department</label>
                  </div>
                  <div className="col-md-9">
                    <select
                      className="form-select"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      required
                      style={{backgroundColor: 'white', border: '2px solid #3bea0c'}}
                    >
                      <option value="">Select your department</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3 align-items-start">
                  <div className="col-md-3">
                    <label className="form-label fw-bold" style={{color: '#2d5016'}}>Confession</label>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Add your confession here..."
                      value={confession}
                      onChange={(e) => setConfession(e.target.value)}
                      maxLength={512}
                      required
                      style={{backgroundColor: 'white', border: '2px solid #3bea0c'}}
                    ></textarea>
                    <small className="text-muted">Max 512 characters ({confession.length}/512)</small>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12 text-center">
                    <div className="form-check d-inline-block">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="termsCheck"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        required
                        style={{accentColor: '#3bea0c'}}
                      />
                      <label className="form-check-label" htmlFor="termsCheck" style={{color: '#2d5016'}}>
                        I have read and agree to the{' '}
                        <button
                          type="button"
                          style={{
                            color: '#3bea0c',
                            textDecoration: 'underline',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            padding: 0
                          }}
                          onClick={() => setCurrentPage('terms')}
                        >
                          terms and conditions
                        </button>.
                      </label>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-lg px-5"
                    disabled={!termsAccepted}
                    style={{
                      backgroundColor: '#3bea0c',
                      border: '2px solid #2d8a0f',
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfessionForm;