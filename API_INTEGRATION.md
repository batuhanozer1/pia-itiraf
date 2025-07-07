# API Integration Guide

Bu proje aşağıdaki API endpoint'lerini kullanmaktadır:

## API Endpoints

### 1. GET /confessions
Tüm itirafları listeler.

**Response Format:**
```json
[
  {
    "id": 1,
    "nickname": "Anonymous1",
    "confession": "I feel like...",
    "ageRange": "28-38",
    "department": "Engineering",
    "timestamp": "2025-01-07T10:30:00Z"
  }
]
```

### 2. POST /confessions/submit
Yeni itiraf oluşturur.

**Request Format:**
```json
{
  "nickname": "Anonymous",
  "confession": "My confession text...",
  "ageRange": "28-38",
  "department": "Engineering",
  "timestamp": "2025-01-07T10:30:00Z"
}
```

**Response Format:**
```json
{
  "success": true,
  "id": 123,
  "message": "Confession submitted successfully"
}
```

## Configuration

1. `.env` dosyasında `REACT_APP_API_URL` değişkenini backend API URL'iniz ile değiştirin.
2. API çalışmıyorsa uygulama otomatik olarak mock data kullanacaktır.

## Mock Mode

API endpoints'i henüz hazır değilse, uygulama otomatik olarak mock mode'a geçer ve:
- GET requests için mock confession data'sı döndürür
- POST requests için local state'e yeni confession ekler

## Testing

API'nizi test etmek için:
1. Backend server'ınızı başlatın
2. `.env` dosyasındaki URL'i doğru şekilde ayarlayın
3. React uygulamasını çalıştırın: `npm start`

## Error Handling

Uygulama aşağıdaki durumları handle eder:
- Network errors
- Server errors (404, 500, etc.)
- API timeout
- Invalid response format

Tüm error durumlarında uygulama mock data ile çalışmaya devam eder.
