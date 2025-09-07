# BestMCP Web - Landing Page

A React-based landing page for BestMCP, a service providing optimized MCP (Model Context Protocol) services for AI agents, powered by OpenMCP technology.

## Features

- 🚀 Modern React frontend with Vite
- 🔐 API key generation with 1-month expiration
- 💾 Local data storage (development mode)
- 📱 Responsive design
- ⚡ Fast and optimized performance
- 🎨 Beautiful UI with Lucide React icons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bestmcp-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
bestmcp-web/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── data/
│   ├── users.json       # User registration data
│   ├── api_keys.json    # API key metadata
│   └── README.md        # Data storage documentation
├── public/              # Static assets
├── dist/                # Built application (after build)
└── package.json         # Project dependencies
```

## Features Overview

### Landing Page Sections

1. **Hero Section** - Introduction to BestMCP
2. **Features Grid** - Key benefits and features
3. **API Key Generation Form** - User registration and key generation
4. **Usage Instructions** - Integration guides for Cursor and Claude Desktop

### API Key Generation

- Generates unique API keys with format: `bmcp_[timestamp]_[random]`
- 1-month expiration period
- Local storage for development (browser localStorage)
- File-based storage in `data/` directory

### Integration Examples

The landing page provides ready-to-use configuration examples for:

- **Cursor IDE** - MCP server configuration
- **Claude Desktop** - MCP integration setup
- **Custom applications** - API endpoint usage

## Technology Stack

- **Frontend**: React 18 + Vite
- **Styling**: Pure CSS with modern design
- **Icons**: Lucide React
- **State Management**: React hooks
- **Data Storage**: Local files (development) / LocalStorage (browser)

## Development Notes

### Data Storage

In development mode, user data is stored in two ways:
1. **Browser LocalStorage** - For frontend state management
2. **Local Files** - In the `data/` directory for persistence

For production deployment, replace with a proper database solution.

### Security Considerations

- API keys are generated client-side for demo purposes
- In production, implement server-side key generation
- Add rate limiting and validation
- Use HTTPS for all communications
- Implement proper authentication and authorization

## Deployment

### Static Hosting (Recommended for Demo)

1. Build the application:
```bash
npm run build
```

2. Deploy the `dist` folder to any static hosting service:
- Netlify
- Vercel 
- GitHub Pages
- AWS S3
- Firebase Hosting

### Full-Stack Deployment

For a production version with backend API:

1. Add a Node.js/Express backend
2. Implement proper database storage
3. Add authentication middleware
4. Deploy to platforms like:
   - Railway
   - Render
   - Heroku
   - AWS/GCP/Azure

## API Key Integration

Once users generate an API key, they can connect to the BestMCP server at `mcp.bestmcp.io` using:

### MCP Client Configuration

```json
{
  "mcpServers": {
    "bestmcp": {
      "command": "node",
      "args": ["-e", "require('mcp-client').connect('https://mcp.bestmcp.io', 'YOUR_API_KEY')"]
    }
  }
}
```

### Direct HTTP API

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://mcp.bestmcp.io/api/v1/tools
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For questions and support:
- Create an issue in this repository
- Email: support@bestmcp.io (when available)

---

Built with ❤️ using React and powered by OpenMCP technology.