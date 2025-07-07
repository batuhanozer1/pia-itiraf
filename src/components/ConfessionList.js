import React from 'react';

function ConfessionList() {
  // Sample confession data - 10 items
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
      time: "12/01/2025 20:00"
    },
    {
      id: 7,
      nickname: "WorkerBee",
      confession: "I spend way too much time on social media during work hours. I know it's wrong but I can't seem to stop.",
      time: "1 week ago"
    },
    {
      id: 8,
      nickname: "TiredSoul",
      confession: "I've been calling in sick when I'm not actually sick because I'm mentally exhausted. I feel guilty about it.",
      time: "2 weeks ago"
    },
    {
      id: 9,
      nickname: "Dreamer",
      confession: "I have a side business idea that I'm passionate about, but I'm too scared to quit my job and pursue it full-time.",
      time: "2 weeks ago"
    },
    {
      id: 10,
      nickname: "Perfectionist",
      confession: "I stay late at work not because I have too much to do, but because I'm afraid my work isn't perfect enough.",
      time: "3 weeks ago"
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card" style={{border: '3px solid #3bea0c', backgroundColor: '#e8f5e8'}}>
            <div className="card-body p-4">
              <h2 className="text-center mb-4" style={{color: '#2d5016'}}>Anonymous Confessions From Colleagues</h2>
              
              {/* Scrollable container */}
              <div 
                style={{
                  maxHeight: '500px',
                  overflowY: 'auto',
                  padding: '10px',
                  backgroundColor: 'rgba(59, 234, 12, 0.1)',
                  borderRadius: '15px',
                  border: '1px solid #3bea0c'
                }}
              >
                {confessions.map((confession) => (
                  <div key={confession.id} className="mb-3">
                    <div 
                      className="card" 
                      style={{
                        border: '2px solid #3bea0c',
                        borderRadius: '15px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 8px rgba(59, 234, 12, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <div className="card-body p-3">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h6 className="card-title mb-0" style={{color: '#2d8a0f', fontWeight: 'bold'}}>
                            {confession.nickname}
                          </h6>
                          <small style={{color: '#6B7280'}}>{confession.time}</small>
                        </div>
                        <p className="card-text mb-0" style={{color: '#374151', lineHeight: '1.5'}}>
                          {confession.confession}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-4">
                <button 
                  className="btn btn-lg me-3 px-4"
                  style={{
                    backgroundColor: '#2d8a0f',
                    border: '2px solid #1f5f0a',
                    color: 'white',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 8px rgba(59, 234, 12, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 12px rgba(59, 234, 12, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 8px rgba(59, 234, 12, 0.3)';
                  }}
                >
                  ← Previous
                </button>
                <button 
                  className="btn btn-lg px-4"
                  style={{
                    backgroundColor: '#3bea0c',
                    border: '2px solid #2d8a0f',
                    color: 'white',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 8px rgba(59, 234, 12, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 12px rgba(59, 234, 12, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 8px rgba(59, 234, 12, 0.3)';
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