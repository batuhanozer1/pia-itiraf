import React, { useState } from 'react';

function ConfessionForm({ setCurrentPage, onSubmitConfession, loading }) {
  const [nickname, setNickname] = useState('');
  const [confession, setConfession] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [department, setDepartment] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('You must accept the terms and conditions!');
      return;
    }
    if (!ageRange || !department) {
      alert('Please select age range and department!');
      return;
    }

    setSubmitting(true);
    
    const confessionData = {
      nickname: nickname || 'Anonymous',
      confession,
      ageGap: ageRange, // Backend ageGap bekliyor
      department,
      timeOfConfession: new Date().toISOString(), // Backend timeOfConfession bekliyor
      termsAccepted: true // Backend termsAccepted bekliyor
    };

    try {
      const result = await onSubmitConfession(confessionData);
      
      if (result.success) {
        // Success message - mock mode'da farklı mesaj göster
        const message = result.data?.message || 'Confession submitted successfully!';
        alert(message);
        
        // Form'u temizle
        setNickname('');
        setConfession('');
        setAgeRange('');
        setDepartment('');

        setTermsAccepted(true);
        
        // Liste sayfasına yönlendir
        setCurrentPage('list');
      } else {
        alert(`Failed to submit confession: ${result.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
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
                    <label className="form-label fw-bold" style={{color: '#2d5016'}}>Nickname</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter nickname (Max 50 characters)"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      maxLength={50}
                      required
                      style={{backgroundColor: 'white', border: '2px solid #3bea0c'}}
                    />
                    {/* <small className="text-muted">Max 50 characters</small> */}
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
                          onClick={() => {
                            // Open terms in a new window using the existing terms.js content
                            const newWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes,resizable=yes');
                            if (newWindow) {
                              newWindow.document.write(`
                                <!DOCTYPE html>
                                <html>
                                <head>
                                  <title>Terms and Conditions</title>
                                  <meta charset="UTF-8">
                                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
                                  <style>
                                    body { font-family: Arial, sans-serif; background-color: #f8f9fa; margin: 0; padding: 20px; }
                                  </style>
                                </head>
                                <body>
                                  <div class="container mt-5">
                                    <div class="row justify-content-center">
                                      <div class="col-lg-10">
                                        <div class="card" style="border: 3px solid #3bea0c; background-color: #e8f5e8;">
                                          <div class="card-body p-5">
                                            <div class="text-center mb-5">
                                              <h1 style="color: #2d8a0f; font-weight: bold;">📜 Terms and Conditions</h1>
                                              <p style="color: #666; font-size: 1.1rem;">Please read these terms carefully before using our confession platform</p>
                                            </div>

                                            <div style="color: #000; line-height: 1.7; font-size: 1rem;">
                                              
                                              <div class="mb-4">
                                                <h4 style="color: #3bea0c; font-weight: bold; border-bottom: 2px solid #3bea0c; padding-bottom: 10px;">🔒 1. Privacy and Anonymity</h4>
                                                <p>Your confession will be posted anonymously. We do not collect or store any personal information that could identify you. Only the nickname, age range, and department you provide will be displayed with your confession. We are committed to maintaining your privacy and ensuring a safe space for sharing personal thoughts and experiences. Your demographic information is used solely for statistical purposes and community insights.</p>
                                              </div>

                                              <div class="mb-4">
                                                <h4 style="color: #3bea0c; font-weight: bold; border-bottom: 2px solid #3bea0c; padding-bottom: 10px;">📊 2. Demographic Information</h4>
                                                <p>The age range and department information you provide helps us understand workplace dynamics and create better insights for our community. This information is displayed alongside your confession but remains anonymous. We use this data to generate anonymized statistics about workplace trends and challenges across different age groups and departments.</p>
                                              </div>

                                              <div class="mb-4">
                                                <h4 style="color: #3bea0c; font-weight: bold; border-bottom: 2px solid #3bea0c; padding-bottom: 10px;">📝 3. Content Guidelines</h4>
                                                <p>Please ensure your confession is respectful and appropriate. We reserve the right to remove content that is offensive, discriminatory, or violates our community standards. Confessions should be personal experiences, thoughts, or feelings. Do not include specific names, locations, or identifying information about colleagues or your company.</p>
                                              </div>

                                              <div class="mb-4">
                                                <h4 style="color: #3bea0c; font-weight: bold; border-bottom: 2px solid #3bea0c; padding-bottom: 10px;">✅ 4. Acceptable Use</h4>
                                                <p>This platform is designed for sharing personal experiences and thoughts in a safe space. You agree to use the service responsibly and ethically, not harm others through your submissions, not spread false information or rumors, respect the anonymity of others, provide accurate demographic information, and comply with all applicable laws.</p>
                                              </div>

                                              <div class="mb-4">
                                                <h4 style="color: #3bea0c; font-weight: bold; border-bottom: 2px solid #3bea0c; padding-bottom: 10px;">💾 5. Data Usage and Storage</h4>
                                                <p>Your submitted confessions along with demographic information may be displayed publicly on our platform. By submitting, you grant us permission to display your anonymous confession with age range and department, store your confession and demographic data in our database, moderate content for community safety, and use anonymized demographic data for statistical analysis. We do not share your data with third parties and we do not track your identity.</p>
                                              </div>

                                              <div class="mb-4">
                                                <h4 style="color: #3bea0c; font-weight: bold; border-bottom: 2px solid #3bea0c; padding-bottom: 10px;">📈 6. Statistical Analysis</h4>
                                                <p>We may use the demographic information collected to create anonymized reports and insights about workplace trends across different age groups and departments. This helps us understand common workplace challenges and improve our platform. All statistical analysis maintains complete anonymity and no individual confessions can be traced back to specific users.</p>
                                              </div>

                                              <div class="mb-4">
                                                <h4 style="color: #3bea0c; font-weight: bold; border-bottom: 2px solid #3bea0c; padding-bottom: 10px;">⚖️ 7. Limitation of Liability</h4>
                                                <p>We are not responsible for any consequences that may arise from the content you share or read on this platform. This includes emotional distress from reading confessions, any actions taken based on confessions read, technical issues or data loss, and misuse of the platform by other users. Please use your best judgment when submitting and reading confessions.</p>
                                              </div>

                                              <div class="mb-4">
                                                <h4 style="color: #3bea0c; font-weight: bold; border-bottom: 2px solid #3bea0c; padding-bottom: 10px;">🔄 8. Modifications and Updates</h4>
                                                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the service after modifications constitutes acceptance of the new terms. We recommend reviewing these terms periodically.</p>
                                              </div>

                                              <div class="mb-4">
                                                <h4 style="color: #3bea0c; font-weight: bold; border-bottom: 2px solid #3bea0c; padding-bottom: 10px;">📞 9. Contact Information</h4>
                                                <p>If you have any questions about these terms or our service, please contact us at support@confessionapp.com. Our response time is 24-48 hours.</p>
                                              </div>

                                              <div class="alert alert-info" style="background-color: rgba(59, 234, 12, 0.1); border: 2px solid #3bea0c; border-radius: 15px; padding: 20px;">
                                                <h5 style="color: #2d8a0f; font-weight: bold;">📋 Important Notice</h5>
                                                <p style="margin: 0;"><strong>By using our confession platform and providing demographic information, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.</strong> If you do not agree with any part of these terms, please do not use our service.</p>
                                              </div>

                                              <div class="text-center mt-5">
                                                <p style="color: #888; font-size: 0.9rem;">Last updated: December 2024</p>
                                              </div>

                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </body>
                                </html>
                              `);
                              newWindow.document.close();
                            }
                          }}
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
                    disabled={!termsAccepted || submitting || loading}
                    style={{
                      backgroundColor: (!termsAccepted || submitting || loading) ? '#cccccc' : '#3bea0c',
                      border: '2px solid #2d8a0f',
                      color: 'white',
                      fontWeight: 'bold',
                      cursor: (!termsAccepted || submitting || loading) ? 'not-allowed' : 'pointer',
                      opacity: (!termsAccepted || submitting || loading) ? 0.6 : 1,
                      pointerEvents: (!termsAccepted || submitting || loading) ? 'none' : 'auto'
                    }}
                  >
                    {submitting || loading ? 'SUBMITTING...' : 'SUBMIT'}
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