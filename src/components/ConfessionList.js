import React from 'react';

function ConfessionList() {
  // Sample confession data
  const confessions = [
    {
      id: 1,
      nickname: "Anonymous1",
      confession: "Sometimes I feel like I'm not good enough at my job, even though everyone says I'm doing great. The imposter syndrome is real.",
      time: "2 hours ago"
    },
    {
      id: 2,
      nickname: "SecretPerson",
      confession: "I've been struggling with work-life balance lately. I love my job but I miss spending time with my family.",
      time: "5 hours ago"
    },
    {
      id: 3,
      nickname: "Unknown",
      confession: "I accidentally deleted an important file last week and blamed it on a system error. I feel terrible about it.",
      time: "1 day ago"
    },
    {
      id: 4,
      nickname: "Silent",
      confession: "I have a crush on someone at work but I'm too shy to say anything. We work great together as colleagues.",
      time: "2 days ago"
    },
    {
      id: 5,
      nickname: "Mystery",
      confession: "I'm thinking about changing careers completely. This field isn't what I thought it would be when I started.",
      time: "3 days ago"
    },
    {
      id: 6,
      nickname: "Unnamed",
      confession: "I pretend to understand things in meetings but sometimes I'm completely lost. I'm afraid to ask questions.",
      time: "1 week ago"
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card" style={{border: '3px solid #FF00FF', backgroundColor: '#ffe6f0'}}>
            <div className="card-body p-4">
              <h2 className="text-center mb-4" style={{color: '#000'}}>Anonymous Confessions From Colleagues</h2>
              
              <div className="row">
                {confessions.map((confession) => (
                  <div key={confession.id} className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100" style={{border: '2px solid #FF00FF'}}>
                      <div className="card-body">
                        <strong><h6 className="card-title" style={{color: 'black'}}>{confession.nickname}</h6></strong>
                        <p className="card-text" style={{color: 'black'}}>{confession.confession}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-4">
                <button 
                  className="btn btn-lg me-3 px-4"
                  style={{
                    backgroundColor: '#d8b4e2',
                    border: '2px solid rgba(191, 38, 211, 0.79)',
                    color: 'white',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 8px rgba(224, 121, 249, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 12px rgba(224, 121, 249, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 8px rgba(224, 121, 249, 0.3)';
                  }}
                >
                  ← Previous
                </button>
                <button 
                  className="btn btn-lg px-4"
                  style={{
                    backgroundColor: '#ff9999',
                    border: '2px solid rgba(236, 72, 154, 0.8)',
                    color: 'white',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 8px rgba(244, 114, 182, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 12px rgba(244, 114, 182, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 8px rgba(244, 114, 182, 0.3)';
                  }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfessionList;