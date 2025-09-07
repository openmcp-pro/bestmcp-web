# BestMCP Data Storage

This directory contains local data storage for the BestMCP service.

## Files

- `users.json` - Stores user registration data and API keys
- `api_keys.json` - Stores API key metadata and usage statistics

## Data Structure

### users.json
```json
[
  {
    "name": "User Name",
    "email": "user@example.com",
    "company": "Company Name",
    "useCase": "Description of use case",
    "apiKey": "bmcp_1234567890_abcdef123456",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "expiresAt": "2024-02-01T00:00:00.000Z"
  }
]
```

### api_keys.json
```json
[
  {
    "apiKey": "bmcp_1234567890_abcdef123456",
    "usage": {
      "totalRequests": 0,
      "lastUsed": null,
      "monthlyLimit": 10000,
      "currentMonthUsage": 0
    },
    "status": "active"
  }
]
```

## Security Note

In production, this data should be stored in a secure database with proper encryption and access controls. This local file storage is for development purposes only.