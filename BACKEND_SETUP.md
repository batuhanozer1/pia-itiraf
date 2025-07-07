# Backend API Çözümü

## Şu anda ne oluyor?

Uygulaman sürekli **Demo Mode**'da çünkü:
1. Backend API server'ı çalışmıyor (`localhost:3001`)
2. Ya da API endpoint'leri henüz hazır değil

## Çözüm Yolları:

### 1. Backend Server'ını Başlat
```bash
# Backend klasörünüzde
npm start
# veya
node server.js
# veya
python app.py
```

### 2. API URL'ini Kontrol Et
`.env` dosyasında:
```
REACT_APP_API_URL=http://localhost:3001/api
```

### 3. API Endpoint'lerini Test Et
Browser'da şu URL'leri dene:
- `http://localhost:3001/api/confessions` (GET)
- Postman ile `http://localhost:3001/api/confessions/submit` (POST)

### 4. Manuel olarak API Mode'a Geç
Console'da şu komutu çalıştır:
```javascript
// Browser console'da
window.confessionService.setMockMode(false);
```

### 5. Uygulama Otomatik Retry Yapıyor
- Her 30 saniyede bir API'yi kontrol ediyor
- "Retry Connection" butonuna bas
- Backend'i başlattıktan sonra 30 saniye bekle

## Backend API Formatı:

### GET /confessions
```json
[
  {
    "id": 1,
    "nickname": "Anonymous",
    "confession": "...",
    "ageRange": "28-38",
    "department": "Engineering",
    "timestamp": "2025-01-07T10:30:00Z"
  }
]
```

### POST /confessions/submit
**Request:**
```json
{
  "nickname": "Anonymous",
  "confession": "My confession...",
  "ageRange": "28-38", 
  "department": "Engineering",
  "timestamp": "2025-01-07T10:30:00Z"
}
```

**Response:**
```json
{
  "success": true,
  "id": 123,
  "message": "Confession submitted successfully"
}
```

## Debug için Console Mesajları:

- 🟢 **"API is back online!"** → Backend bağlandı
- 🔴 **"API unavailable"** → Backend çalışmıyor  
- 🔄 **"Using mock mode"** → Demo mode aktif
- ✅ **"Data saved to database!"** → DB'ye kaydedildi
- 🚀 **"Attempting to submit to API"** → API'ye gönderiliyor
