// API Service dosyası - gerçek backend API'niz ile değiştirin

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

// Mock mode flag - API çalışmıyorsa otomatik olarak true olur
let IS_MOCK_MODE = false;
let LAST_API_CHECK = 0;
const API_CHECK_INTERVAL = 30000; // 30 saniye ara ile API'yi tekrar kontrol et

export const confessionService = {
  // API'nin çalışıp çalışmadığını kontrol et
  async checkApiStatus() {
    const now = Date.now();
    
    // Son kontrol 30 saniye içindeyse mock mode durumunu değiştirme
    if (IS_MOCK_MODE && (now - LAST_API_CHECK) < API_CHECK_INTERVAL) {
      return IS_MOCK_MODE;
    }
    
    try {
      LAST_API_CHECK = now;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 saniye hızlı kontrol
      
      // Basit bir health check endpoint'i deneyelim
      const response = await fetch(`${API_BASE_URL}/confessions`, {
        method: 'HEAD', // Sadece header kontrol et, data indirme
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        if (IS_MOCK_MODE) {
          console.log('🟢 API is back online! Switching to API mode');
          IS_MOCK_MODE = false;
        }
        return false; // API çalışıyor
      }
    } catch (error) {
      if (!IS_MOCK_MODE) {
        console.warn('🔴 API unavailable, switching to mock mode');
      }
      IS_MOCK_MODE = true;
    }
    
  },
  // GET /confessions - Tüm itirafları listele
  async getAllConfessions() {
    // API durumunu kontrol et
    await this.checkApiStatus();
    
    // Mock mode'daysa direkt mock data döndür
    if (IS_MOCK_MODE) {
      console.log('🔄 Using mock mode for GET /confessions');
      return { success: true, data: getMockConfessions() };
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 saniye timeout

      const response = await fetch(`${API_BASE_URL}/confessions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ API request successful');
      return { success: true, data };
    } catch (error) {
      console.warn('❌ API request failed, switching to mock mode:', error.message);
      IS_MOCK_MODE = true; // API çalışmıyorsa mock mode'a geç
      return { success: true, data: getMockConfessions() };
    }
  },

  // POST /confessions/submit - Yeni itiraf oluştur
  async submitConfession(confessionData) {
    // API durumunu kontrol et
    await this.checkApiStatus();
    
    // Mock mode'daysa mock response döndür
    if (IS_MOCK_MODE) {
      console.log('🔄 Using mock mode for POST /confessions/submit');
      console.log('💡 Tip: Backend server\'ınızı başlatın ve 30 saniye bekleyin');
      
      // Mock delay ekleyelim
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockResponse = {
        id: Date.now(),
        ...confessionData,
        timestamp: new Date().toISOString(),
        success: true,
        message: "Confession submitted successfully (mock mode - data not saved to database)"
      };
      
      return { success: true, data: mockResponse };
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 saniye timeout

      console.log('🚀 Attempting to submit to API:', `${API_BASE_URL}/confessions/submit`);
      
      const response = await fetch(`${API_BASE_URL}/confessions/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: confessionData.nickname,
          confession: confessionData.confession,
          ageGap: confessionData.ageGap, // Backend ageGap bekliyor
          department: confessionData.department,
          timeOfConfession: confessionData.timeOfConfession, // Backend timeOfConfession bekliyor
          termsAccepted: confessionData.termsAccepted // Backend termsAccepted bekliyor
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ API submission successful - Data saved to database!');
      return { success: true, data };
    } catch (error) {
      console.warn('❌ API submission failed, switching to mock mode:', error.message);
      IS_MOCK_MODE = true;
      
      // Mock delay ekleyelim
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockResponse = {
        id: Date.now(),
        ...confessionData,
        timestamp: new Date().toISOString(),
        success: true,
        message: "Confession submitted successfully (mock mode - data not saved to database)"
      };
      
      return { success: true, data: mockResponse };
    }
  },

  // Mock mode durumunu kontrol et
  isMockMode() {
    return IS_MOCK_MODE;
  },

  // Mock mode'u manuel olarak aç/kapat
  setMockMode(enabled) {
    IS_MOCK_MODE = enabled;
    LAST_API_CHECK = 0; // Cache'i sıfırla
    console.log(`🔧 Mock mode ${enabled ? 'enabled' : 'disabled'}`);
  },

  // API'yi manuel olarak tekrar dene
  async retryApiConnection() {
    console.log('🔄 Manual API retry...');
    IS_MOCK_MODE = false;
    LAST_API_CHECK = 0;
    return await this.checkApiStatus();
  }
};

// Mock data - API hazır olmadığında kullanılacak
export const getMockConfessions = () => [
  {
    id: 1,
    nickname: "Anonymous1",
    confession: "Sometimes I feel like I'm not good enough at my job, even though everyone says I'm doing great. The imposter syndrome is real.",
    ageGap: "28-38", // Backend format: ageGap
    department: "Engineering",
    timeOfConfession: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // Backend format: timeOfConfession
    termsAccepted: true
  },
  {
    id: 2,
    nickname: "SecretPerson",
    confession: "I've been struggling with work-life balance lately. I love my job but I miss spending time with my family.",
    ageGap: "38-48", // Backend format: ageGap
    department: "Marketing",
    timeOfConfession: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // Backend format: timeOfConfession
    termsAccepted: true
  },
  {
    id: 3,
    nickname: "Unknown",
    confession: "I accidentally deleted an important file last week and blamed it on a system error. I feel terrible about it.",
    ageGap: "18-28", // Backend format: ageGap
    department: "Engineering",
    timeOfConfession: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Backend format: timeOfConfession
    termsAccepted: true
  },
  {
    id: 4,
    nickname: "Silent",
    confession: "I have a crush on someone at work but I'm too shy to say anything. We work great together as colleagues.",
    ageGap: "28-38", // Backend format: ageGap
    department: "Sales",
    timeOfConfession: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // Backend format: timeOfConfession
    termsAccepted: true
  },
  {
    id: 5,
    nickname: "Mystery",
    confession: "I'm thinking about changing careers completely. This field isn't what I thought it would be when I started.",
    ageGap: "48+", // Backend format: ageGap
    department: "Other",
    timeOfConfession: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // Backend format: timeOfConfession
    termsAccepted: true
  }
];
