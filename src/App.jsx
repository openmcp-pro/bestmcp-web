import React, { useState } from 'react'
import { Zap, Shield, Globe, Rocket, Copy, Check, Star, Users, Clock, TrendingUp } from 'lucide-react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: ''
  })
  const [apiKey, setApiKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const generateApiKey = () => {
    const timestamp = Date.now()
    const randomPart = Math.random().toString(36).substring(2, 15)
    return `bmcp_${timestamp}_${randomPart}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    const newApiKey = generateApiKey()
    const expiryDate = new Date()
    expiryDate.setMonth(expiryDate.getMonth() + 1)

    // Save to local storage (simulating database)
    const userData = {
      ...formData,
      apiKey: newApiKey,
      createdAt: new Date().toISOString(),
      expiresAt: expiryDate.toISOString()
    }

    // Create data directory and save user data
    const existingUsers = JSON.parse(localStorage.getItem('bestmcp_users') || '[]')
    existingUsers.push(userData)
    localStorage.setItem('bestmcp_users', JSON.stringify(existingUsers))

    setApiKey(newApiKey)
    setLoading(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="badge">🚀 Now Live • Join 10,000+ AI Developers</div>
          <h1>BestMCP</h1>
          <p>The Ultimate MCP Platform for AI Agents</p>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>Powered by OpenMCP • Enterprise-Ready • Lightning Fast</p>
          <div className="cta-section">
            <a href="#api-key" style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              color: 'white', 
              padding: '1rem 2.5rem', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontWeight: '600',
              fontSize: '1.1rem',
              display: 'inline-block',
              marginRight: '1rem',
              marginBottom: '1rem',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
              transition: 'all 0.3s ease'
            }}>Get Free API Key</a>
            <a href="#features" style={{ 
              background: 'rgba(255, 255, 255, 0.2)', 
              color: '#2d3748', 
              padding: '1rem 2.5rem', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontWeight: '600',
              fontSize: '1.1rem',
              display: 'inline-block',
              border: '2px solid rgba(102, 126, 234, 0.3)',
              transition: 'all 0.3s ease'
            }}>Learn More</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2d3748' }}>Trusted by Developers Worldwide</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '2rem' }}>Join the growing community of AI developers using BestMCP</p>
          <div className="stats-grid">
            <div className="stat">
              <Users className="feature-icon" style={{ margin: '0 auto 1rem', color: '#48bb78' }} />
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active Developers</span>
            </div>
            <div className="stat">
              <TrendingUp className="feature-icon" style={{ margin: '0 auto 1rem', color: '#ed8936' }} />
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat">
              <Clock className="feature-icon" style={{ margin: '0 auto 1rem', color: '#9f7aea' }} />
              <span className="stat-number">&lt;50ms</span>
              <span className="stat-label">Average Latency</span>
            </div>
            <div className="stat">
              <Star className="feature-icon" style={{ margin: '0 auto 1rem', color: '#f6ad55' }} />
              <span className="stat-number">4.9/5</span>
              <span className="stat-label">Developer Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2>Why Choose BestMCP?</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#4a5568', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>Experience the next generation of MCP services with enterprise-grade performance, security, and reliability.</p>
          <div className="features-grid">
            <div className="feature">
              <Zap className="feature-icon" />
              <h3>Optimized Performance</h3>
              <p>High-performance MCP services optimized for AI agents with minimal latency and maximum reliability.</p>
            </div>
            <div className="feature">
              <Shield className="feature-icon" />
              <h3>Enterprise Security</h3>
              <p>API key authentication, rate limiting, and comprehensive audit logging for enterprise-grade security.</p>
            </div>
            <div className="feature">
              <Globe className="feature-icon" />
              <h3>Global Accessibility</h3>
              <p>Access your MCP services from anywhere with our globally distributed infrastructure.</p>
            </div>
            <div className="feature">
              <Rocket className="feature-icon" />
              <h3>Easy Integration</h3>
              <p>Simple setup with Cursor, Claude Desktop, and other AI development environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Key Generation Section */}
      <section className="api-section" id="api-key">
        <div className="container">
          <div className="api-form">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
              Get Your API Key
            </h2>
            
            {!apiKey ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="useCase">What will you use BestMCP for?</label>
                  <input
                    type="text"
                    id="useCase"
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    placeholder="e.g., AI agent automation, web scraping, testing..."
                  />
                </div>
                
                <button type="submit" className="btn" disabled={loading}>
                  {loading ? 'Generating...' : 'Generate API Key'}
                </button>
              </form>
            ) : (
              <div className="api-key-result">
                <h3>🎉 Your API Key is Ready!</h3>
                <div className="api-key-display">{apiKey}</div>
                <button 
                  className="copy-btn" 
                  onClick={copyToClipboard}
                  style={{ background: copied ? '#48bb78' : '#667eea' }}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? ' Copied!' : ' Copy Key'}
                </button>
                
                <div className="usage-info">
                  <h4>🚀 How to Use Your API Key</h4>
                  <p><strong>Server URL:</strong> <code>https://mcp.bestmcp.io</code></p>
                  <p><strong>Valid for:</strong> 1 month from today</p>
                  
                  <p><strong>Cursor Integration:</strong></p>
                  <p>Add this to your MCP configuration:</p>
                  <div style={{ background: '#2d3748', color: '#e2e8f0', padding: '1rem', borderRadius: '4px', margin: '0.5rem 0', fontSize: '0.8rem' }}>
                    {`{
  "mcpServers": {
    "bestmcp": {
      "command": "node",
      "args": ["-e", "require('mcp-client').connect('https://mcp.bestmcp.io', '${apiKey}')"]
    }
  }
}`}
                  </div>
                  
                  <p><strong>Claude Desktop:</strong> Use the same configuration in Claude's MCP settings.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 BestMCP. Built on OpenMCP technology.</p>
          <p>Empowering AI agents with reliable MCP services.</p>
        </div>
      </footer>
    </div>
  )
}

export default App