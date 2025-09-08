import React, { useState } from 'react'
import { Zap, Shield, Globe, Rocket, Copy, Check, Star, Users, Clock, TrendingUp, Award, Building2, Code2, Database, Server, ArrowRight } from 'lucide-react'

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
          <div className="badge">
            <Award size={16} style={{ marginRight: '8px' }} />
            Enterprise-Grade MCP Services • Trusted by 10,000+ Developers
          </div>
          <h1>BestMCP</h1>
          <p className="hero-subtitle">Professional MCP Infrastructure for AI-Powered Applications</p>
          <p className="hero-description">
            Accelerate your AI development with enterprise-grade MCP services. 
            Built for scale, secured by design, optimized for performance.
          </p>
          
          <div className="value-props">
            <div className="value-prop">
              <Server size={20} />
              <span>99.99% Uptime SLA</span>
            </div>
            <div className="value-prop">
              <Shield size={20} />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="value-prop">
              <Globe size={20} />
              <span>Global CDN</span>
            </div>
          </div>
          
          <div className="cta-section">
            <a href="#api-key" className="cta-primary">
              Get Started Free
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#features" className="cta-secondary">
              View Documentation
            </a>
          </div>
          
          <p className="trust-indicator">
            No credit card required • 30-day free trial • Enterprise support available
          </p>
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
          <h2>Enterprise MCP Platform Built for Scale</h2>
          <p className="features-subtitle">
            Comprehensive MCP infrastructure designed for mission-critical AI applications. 
            From startups to Fortune 500 companies, BestMCP powers intelligent automation at every scale.
          </p>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon-wrapper">
                <Database className="feature-icon" />
              </div>
              <h3>High-Performance Architecture</h3>
              <p>Distributed MCP services with sub-50ms response times, auto-scaling infrastructure, and 99.99% uptime SLA. Built for enterprise workloads.</p>
              <div className="feature-metrics">
                <span className="metric">50ms avg response</span>
                <span className="metric">99.99% uptime</span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                <Shield className="feature-icon" />
              </div>
              <h3>Enterprise-Grade Security</h3>
              <p>SOC 2 Type II compliant with end-to-end encryption, role-based access control, comprehensive audit logs, and enterprise SSO integration.</p>
              <div className="feature-metrics">
                <span className="metric">SOC 2 Compliant</span>
                <span className="metric">End-to-end encryption</span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                <Globe className="feature-icon" />
              </div>
              <h3>Global Infrastructure</h3>
              <p>Multi-region deployment with intelligent routing, edge caching, and automatic failover. Serve your AI agents from the closest data center worldwide.</p>
              <div className="feature-metrics">
                <span className="metric">15+ regions</span>
                <span className="metric">Edge caching</span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                <Code2 className="feature-icon" />
              </div>
              <h3>Developer-First Experience</h3>
              <p>Comprehensive APIs, SDKs, and integrations for all major AI platforms. One-click setup for Cursor, Claude Desktop, and custom implementations.</p>
              <div className="feature-metrics">
                <span className="metric">10+ integrations</span>
                <span className="metric">Full API coverage</span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                <TrendingUp className="feature-icon" />
              </div>
              <h3>Advanced Analytics</h3>
              <p>Real-time monitoring, performance insights, usage analytics, and cost optimization recommendations with enterprise dashboard.</p>
              <div className="feature-metrics">
                <span className="metric">Real-time metrics</span>
                <span className="metric">Cost optimization</span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                <Building2 className="feature-icon" />
              </div>
              <h3>Enterprise Support</h3>
              <p>24/7 dedicated support, custom SLAs, professional services, and direct access to our engineering team for mission-critical deployments.</p>
              <div className="feature-metrics">
                <span className="metric">24/7 support</span>
                <span className="metric">Custom SLAs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof">
        <div className="container">
          <h2>Trusted by Industry Leaders</h2>
          <p className="social-proof-subtitle">
            Join thousands of companies building the future of AI with BestMCP
          </p>
          
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"BestMCP transformed our AI infrastructure. The reliability and performance improvements were immediately noticeable. Our deployment time went from hours to minutes."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Chen</h4>
                  <span>CTO, TechFlow AI</span>
                </div>
                <div className="company-logo">🚀</div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"The enterprise security features and 24/7 support make BestMCP perfect for our mission-critical applications. SOC 2 compliance was essential for us."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Michael Rodriguez</h4>
                  <span>Head of Engineering, DataSecure Corp</span>
                </div>
                <div className="company-logo">🛡️</div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Outstanding performance and developer experience. The global infrastructure ensures our AI agents work flawlessly for users worldwide."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Emily Johnson</h4>
                  <span>VP of Product, GlobalAI Solutions</span>
                </div>
                <div className="company-logo">🌍</div>
              </div>
            </div>
          </div>
          
          <div className="trusted-by">
            <p>Trusted by 10,000+ developers at companies like:</p>
            <div className="company-logos">
              <span className="company-name">TechFlow AI</span>
              <span className="company-name">DataSecure Corp</span>
              <span className="company-name">GlobalAI Solutions</span>
              <span className="company-name">InnovateLab</span>
              <span className="company-name">FutureWorks</span>
            </div>
          </div>
        </div>
      </section>

      {/* API Key Generation Section */}
      <section className="api-section" id="api-key">
        <div className="container">
          <div className="api-form">
            <div className="api-header">
              <h2>Start Building with BestMCP</h2>
              <p className="api-description">
                Get instant access to enterprise-grade MCP services. Deploy your first AI agent in minutes.
              </p>
              <div className="api-benefits">
                <div className="benefit">
                  <Check size={16} />
                  <span>Free 30-day trial</span>
                </div>
                <div className="benefit">
                  <Check size={16} />
                  <span>No credit card required</span>
                </div>
                <div className="benefit">
                  <Check size={16} />
                  <span>Full API access</span>
                </div>
              </div>
            </div>
            
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
          <div className="footer-content">
            <div className="footer-section">
              <h3>BestMCP</h3>
              <p>Enterprise-grade MCP infrastructure for AI-powered applications. Built for scale, secured by design.</p>
              <div className="footer-stats">
                <span>🚀 10,000+ developers</span>
                <span>⚡ 99.99% uptime</span>
                <span>🔒 SOC 2 compliant</span>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#documentation">Documentation</a></li>
                <li><a href="#api-reference">API Reference</a></li>
                <li><a href="#status">System Status</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press Kit</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#compliance">Compliance</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#support">Help Center</a></li>
                <li><a href="#contact">Contact Sales</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#partners">Partners</a></li>
                <li><a href="#enterprise">Enterprise</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#whitepapers">Whitepapers</a></li>
                <li><a href="#webinars">Webinars</a></li>
                <li><a href="#changelog">Changelog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-legal">
              <p>&copy; 2024 BestMCP Inc. All rights reserved.</p>
              <div className="legal-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
              </div>
            </div>
            <div className="footer-social">
              <span>Built on OpenMCP technology</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App