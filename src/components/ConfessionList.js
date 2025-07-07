import React, { useState, useEffect } from 'react';

function ConfessionList({ confessions, loading, onRefresh }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Reset to first page when confessions change
  useEffect(() => {
    setCurrentPage(1);
  }, [confessions]);

  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    }
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'Bilinmeyen zaman';
    
    try {
      const date = new Date(timestamp);
      
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      
      return `${day} ${month} ${year} ${hours}:${minutes}`;
    } catch (error) {
      return timestamp;
    }
  };

  // Sort confessions by date (newest first)
  const sortedConfessions = confessions
    .sort((a, b) => {
      const dateA = new Date(a.timeOfConfession || a.timestamp || 0);
      const dateB = new Date(b.timeOfConfession || b.timestamp || 0);
      return dateB - dateA; // Yeniden eskiye sıralama (en yeni önce)
    });

  // Calculate pagination
  const totalPages = Math.ceil(sortedConfessions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentConfessions = sortedConfessions.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card" style={{border: '3px solid #3bea0c', backgroundColor: '#e8f5e8'}}>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-center mb-0" style={{color: '#2d5016'}}>
                  Anonymous Confessions From Colleagues
                </h2>
                {/* <button 
                  className="btn btn-sm"
                  onClick={handleRefresh}
                  disabled={loading}
                  style={{
                    backgroundColor: '#3bea0c',
                    border: '2px solid #2d8a0f',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {loading ? 'Loading...' : 'Refresh'}
                </button> */}
              </div>
              
              {loading ? (
                <div className="text-center p-5">
                  <div className="spinner-border" style={{color: '#3bea0c'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-3" style={{color: '#2d5016'}}>Loading confessions...</p>
                </div>
              ) : confessions.length === 0 ? (
                <div className="text-center p-5">
                  <p style={{color: '#2d5016', fontSize: '1.2rem'}}>No confessions yet. Be the first to share!</p>
                </div>
              ) : (
                <>
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
                    {currentConfessions.map((confession) => (
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
                              <div>
                                <h6 className="card-title mb-0" style={{color: '#2d8a0f', fontWeight: 'bold'}}>
                                  {confession.nickname || 'Anonymous'}
                                </h6>
                                {confession.ageGap && confession.department && (
                                  <small style={{color: '#6B7280'}}>
                                    {confession.ageGap} • {confession.department}
                                  </small>
                                )}
                              </div>
                              <small style={{color: '#6B7280'}}>
                                {formatTime(confession.timeOfConfession || confession.timestamp)}
                              </small>
                            </div>
                            <p className="card-text mb-0" style={{color: '#374151', lineHeight: '1.5'}}>
                              {confession.confession}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="d-flex justify-content-between align-items-center mt-4 p-3" 
                         style={{
                           backgroundColor: 'rgba(59, 234, 12, 0.1)', 
                           borderRadius: '10px',
                           border: '1px solid #3bea0c'
                         }}>
                      <button
                        className="btn"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        style={{
                          backgroundColor: currentPage === 1 ? '#cccccc' : '#3bea0c',
                          border: '2px solid #2d8a0f',
                          color: 'white',
                          fontWeight: 'bold',
                          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                          opacity: currentPage === 1 ? 0.6 : 1
                        }}
                      >
                        ← Previous
                      </button>
                      
                      <div style={{color: '#2d5016', fontWeight: 'bold'}}>
                        Page {currentPage} of {totalPages} 
                        <small style={{display: 'block', fontSize: '0.8rem', color: '#6B7280'}}>
                          Showing {startIndex + 1}-{Math.min(endIndex, sortedConfessions.length)} of {sortedConfessions.length} confessions
                        </small>
                      </div>
                      
                      <button
                        className="btn"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        style={{
                          backgroundColor: currentPage === totalPages ? '#cccccc' : '#3bea0c',
                          border: '2px solid #2d8a0f',
                          color: 'white',
                          fontWeight: 'bold',
                          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                          opacity: currentPage === totalPages ? 0.6 : 1
                        }}
                      >
                        Next →
                      </button>
                    </div>
                  )}
                </>
              )}

              <div className="text-center mt-4">
                <p style={{color: '#2d5016', fontSize: '0.9rem'}}>
                  Total Confessions: {sortedConfessions.length}
                  {totalPages > 1 && (
                    <span style={{color: '#6B7280'}}> • Currently viewing page {currentPage} of {totalPages}</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfessionList;