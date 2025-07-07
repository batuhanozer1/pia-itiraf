import React, { useState } from 'react';
import { confessionService } from '../services/api';

function ApiStatus() {
  const [isRetrying, setIsRetrying] = useState(false);
  const isMockMode = confessionService.isMockMode();

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      await confessionService.retryApiConnection();
      // Birkaç saniye sonra component'i yeniden render etmek için state güncellemesi
      setTimeout(() => {
        setIsRetrying(false);
        window.location.reload(); // Sayfayı yenile ki API durumu güncellensin
      }, 2000);
    } catch (error) {
      setIsRetrying(false);
    }
  };

  if (!isMockMode) {
    return null; // API çalışıyorsa hiçbir şey gösterme
  }

  return (
    <div 
      className="alert alert-warning alert-dismissible d-flex align-items-center" 
      style={{
        margin: '10px 20px',
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '8px'
      }}
    >
      <div className="me-3">
        <i className="bi bi-exclamation-triangle-fill" style={{fontSize: '1.2rem', color: '#856404'}}></i>
      </div>
      <div className="flex-grow-1">
        <strong>Demo Mode Active</strong>
        <div style={{fontSize: '0.9rem', marginTop: '2px'}}>
          API server is not available. The app is running in demo mode with sample data. 
          Your confessions are saved locally in this session only.
        </div>
        <div style={{fontSize: '0.8rem', marginTop: '4px', color: '#856404'}}>
          💡 Start your backend server and click "Retry Connection" to save to database.
        </div>
      </div>
      <div className="ms-3">
        <button 
          className="btn btn-sm btn-warning"
          onClick={handleRetry}
          disabled={isRetrying}
          style={{
            fontSize: '0.8rem',
            padding: '4px 8px'
          }}
        >
          {isRetrying ? 'Checking...' : 'Retry Connection'}
        </button>
      </div>
    </div>
  );
}

export default ApiStatus;
