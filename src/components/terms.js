import React from 'react';

function Terms() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card" style={{border: '3px solid #3bea0c', backgroundColor: '#e8f5e8'}}>
            <div className="card-body p-5">
              <div className="text-center mb-5">
                <h1 style={{color: '#2d8a0f', fontWeight: 'bold'}}>
                  📜 Terms and Conditions
                </h1>
                <p style={{color: '#666', fontSize: '1.1rem'}}>
                  Please read these terms carefully before using our confession platform
                </p>
              </div>

              <div style={{color: '#000', lineHeight: '1.7', fontSize: '1rem'}}>
                
                <div className="mb-4">
                  <h4 style={{color: '#3bea0c', fontWeight: 'bold', borderBottom: '2px solid #3bea0c', paddingBottom: '10px'}}>
                    🔒 1. Privacy and Anonymity
                  </h4>
                  <p>
                    Your confession will be posted anonymously. We do not collect or store any personal 
                    information that could identify you. Only the nickname, age range, and department you provide will be displayed 
                    with your confession. We are committed to maintaining your privacy and ensuring a 
                    safe space for sharing personal thoughts and experiences. Your demographic information 
                    is used solely for statistical purposes and community insights.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 style={{color: '#3bea0c', fontWeight: 'bold', borderBottom: '2px solid #3bea0c', paddingBottom: '10px'}}>
                    📊 2. Demographic Information
                  </h4>
                  <p>
                    The age range and department information you provide helps us understand workplace dynamics 
                    and create better insights for our community. This information is displayed alongside your 
                    confession but remains anonymous. We use this data to generate anonymized statistics about 
                    workplace trends and challenges across different age groups and departments.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 style={{color: '#3bea0c', fontWeight: 'bold', borderBottom: '2px solid #3bea0c', paddingBottom: '10px'}}>
                    📝 3. Content Guidelines
                  </h4>
                  <p>
                    Please ensure your confession is respectful and appropriate. We reserve the right to 
                    remove content that is offensive, discriminatory, or violates our community standards. 
                    Confessions should be personal experiences, thoughts, or feelings. Do not include specific 
                    names, locations, or identifying information about colleagues or your company.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 style={{color: '#3bea0c', fontWeight: 'bold', borderBottom: '2px solid #3bea0c', paddingBottom: '10px'}}>
                    ✅ 4. Acceptable Use
                  </h4>
                  <p>
                    This platform is designed for sharing personal experiences and thoughts in a safe space. 
                    You agree to use the service responsibly and ethically, not harm others through your submissions, 
                    not spread false information or rumors, respect the anonymity of others, provide accurate 
                    demographic information, and comply with all applicable laws.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 style={{color: '#3bea0c', fontWeight: 'bold', borderBottom: '2px solid #3bea0c', paddingBottom: '10px'}}>
                    💾 5. Data Usage and Storage
                  </h4>
                  <p>
                    Your submitted confessions along with demographic information may be displayed publicly on our platform. 
                    By submitting, you grant us permission to display your anonymous confession with age range and department, 
                    store your confession and demographic data in our database, moderate content for community safety, 
                    and use anonymized demographic data for statistical analysis. We do not share your data with third parties 
                    and we do not track your identity.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 style={{color: '#3bea0c', fontWeight: 'bold', borderBottom: '2px solid #3bea0c', paddingBottom: '10px'}}>
                    📈 6. Statistical Analysis
                  </h4>
                  <p>
                    We may use the demographic information collected to create anonymized reports and insights 
                    about workplace trends across different age groups and departments. This helps us understand 
                    common workplace challenges and improve our platform. All statistical analysis maintains 
                    complete anonymity and no individual confessions can be traced back to specific users.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 style={{color: '#3bea0c', fontWeight: 'bold', borderBottom: '2px solid #3bea0c', paddingBottom: '10px'}}>
                    ⚖️ 7. Limitation of Liability
                  </h4>
                  <p>
                    We are not responsible for any consequences that may arise from the content you share 
                    or read on this platform. This includes emotional distress from reading confessions, 
                    any actions taken based on confessions read, technical issues or data loss, and misuse of the platform by other users. 
                    Please use your best judgment when submitting and reading confessions.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 style={{color: '#3bea0c', fontWeight: 'bold', borderBottom: '2px solid #3bea0c', paddingBottom: '10px'}}>
                    🔄 8. Modifications and Updates
                  </h4>
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective 
                    immediately upon posting. Continued use of the service after modifications constitutes 
                    acceptance of the new terms. We recommend reviewing these terms periodically.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 style={{color: '#3bea0c', fontWeight: 'bold', borderBottom: '2px solid #3bea0c', paddingBottom: '10px'}}>
                    📞 9. Contact Information
                  </h4>
                  <p>
                    If you have any questions about these terms or our service, please contact us at support@confessionapp.com. 
                    Our response time is 24-48 hours.
                  </p>
                </div>

                <div className="alert alert-info" style={{
                  backgroundColor: 'rgba(59, 234, 12, 0.1)', 
                  border: '2px solid #3bea0c',
                  borderRadius: '15px',
                  padding: '20px'
                }}>
                  <h5 style={{color: '#2d8a0f', fontWeight: 'bold'}}>📋 Important Notice</h5>
                  <p style={{margin: 0}}>
                    <strong>By using our confession platform and providing demographic information, you acknowledge that you have read, 
                    understood, and agree to be bound by these terms and conditions.</strong> 
                    If you do not agree with any part of these terms, please do not use our service.
                  </p>
                </div>

                <div className="text-center mt-5">
                  <p style={{color: '#888', fontSize: '0.9rem'}}>
                    Last updated: December 2024
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;