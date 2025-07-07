import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConfessionForm from './components/ConfessionForm';
import ConfessionList from './components/ConfessionList';
import Terms from './components/terms';
import ApiStatus from './components/ApiStatus';
import { confessionService, getMockConfessions } from './services/api';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('form');
  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Tüm itirafları çek (GET /confessions)
  const fetchConfessions = async () => {
    setLoading(true);
    try {
      const result = await confessionService.getAllConfessions();
      setConfessions(result.data || []);
    } catch (error) {
      console.error('Error in fetchConfessions:', error);
      // Hata durumunda boş array
      setConfessions([]);
    } finally {
      setLoading(false);
    }
  };

  // Yeni itiraf gönder (POST /confessions/submit)
  const submitConfession = async (confessionData) => {
    setLoading(true);
    try {
      const result = await confessionService.submitConfession(confessionData);

      if (result.success) {
        // Mock mode'daysa local state'e ekle, değilse API'den yeniden çek
        if (confessionService.isMockMode()) {
          const newConfession = {
            id: result.data.id || Date.now(),
            ...confessionData,
            timestamp: result.data.timestamp || new Date().toISOString()
          };
          setConfessions(prev => [newConfession, ...prev]);
        } else {
          // API mode'daysa yeniden fetch et
          await fetchConfessions();
        }
        return { success: true, data: result.data };
      } else {
        return { success: false, error: result.error || 'Submission failed' };
      }
    } catch (error) {
      console.error('Error submitting confession:', error);
      return { success: false, error: 'Network error' };
    } finally {
      setLoading(false);
    }
  };

  // Component ilk yüklendiğinde confessions'ları çek
  useEffect(() => {
    fetchConfessions();
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Confession App</span>
          <div className="navbar-nav">
            <button 
              className={`btn ${currentPage === 'form' ? 'btn-primary' : 'btn-outline-light'} me-2`}
              onClick={() => setCurrentPage('form')}
            >
              Make Confession
            </button>
            <button 
              className={`btn ${currentPage === 'list' ? 'btn-primary' : 'btn-outline-light'} me-2`}
              onClick={() => setCurrentPage('list')}
            >
              View Confessions
            </button>
          </div>
        </div>
      </nav>

      <ApiStatus />

      {currentPage === 'form' && (
        <ConfessionForm 
          setCurrentPage={setCurrentPage} 
          onSubmitConfession={submitConfession}
          loading={loading}
        />
      )}
      {currentPage === 'list' && (
        <ConfessionList 
          confessions={confessions}
          loading={loading}
          onRefresh={fetchConfessions}
        />
      )}
      {currentPage === 'terms' && <Terms />}
    </div>
  );
}

export default App;
