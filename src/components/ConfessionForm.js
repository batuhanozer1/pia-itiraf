import React, { useState } from 'react';

function ConfessionForm() {
  const [nickname, setNickname] = useState('');
  const [confession, setConfession] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Şartları kabul etmelisiniz!');
      return;
    }
    // İtiraf gönderme işlemi burada yapılacak
    console.log({ nickname, confession });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card" style={{border: '3px solid #FF00FF', backgroundColor: '#ffe6f0'}}>
            <div className="card-body p-4">
              <h2 className="text-center mb-4" style={{color: '#000'}}>Anonymous Confession</h2>
              <p className="text-center mb-4" style={{color: '#000'}}>
                We understand that sometimes, it's hard to share personal thoughts or challenges 
                openly at work. This space is here for you to express yourself freely and 
                anonymously, without fear of judgment. Whether it's a small frustration, a big idea, 
                or something you've been holding onto, your confession matters. It's a safe place 
                to be heard. Mos e truaj po gënej. Take a moment to reflect and let your voice 
                be part of creating a more open, supportive workplace. We're here to listen.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="row mb-3 align-items-center">
                  <div className="col-md-3">
                    <label className="form-label fw-bold" style={{color: 'black', Shadow:'revert-layer'}}>Nickname</label>
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
                      style={{backgroundColor: 'white', border: '2px solid #000'}}
                    />
                    <small className="text-muted">Max 50 charachters</small>
                  </div>
                </div>

                <div className="row mb-3 align-items-start">
                  <div className="col-md-3">
                    <label className="form-label fw-bold" style={{color: 'black'}}>Confession</label>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Add your confession here..."
                      value={confession}
                      onChange={(e) => setConfession(e.target.value)}
                      maxLength={500}
                      required
                      style={{backgroundColor: 'white', border: '2px solid #000'}}
                    ></textarea>
                    <small className="text-muted">Max 500 charachters ({confession.length}/500)</small>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="termsCheck"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        required
                      />
                      <label className="form-check-label" htmlFor="termsCheck" style={{color: '#000'}}>
                        I have read and agree to the <a href="/terms" style={{color: '#ff69b4'}}>terms and conditions</a>.
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
                      backgroundColor: '#ffb6c1',
                      border: '2px solid #000',
                      color: '#000',
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