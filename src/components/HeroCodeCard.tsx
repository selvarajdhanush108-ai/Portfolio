import React, { useState } from 'react';
import { Copy, Check, Terminal, Play } from 'lucide-react';
import { CODE_SNIPPET } from '../data/portfolioData';

export const HeroCodeCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Build Succeeded | 0 Errors | 0 Warnings');

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateRun = () => {
    setIsRunning(true);
    setStatusMessage('Compiling C# backend assembly...');
    setTimeout(() => {
      setIsRunning(false);
      setStatusMessage('✓ Active: .NET 8/10 Web APIs & SQL Server ready');
    }, 800);
  };

  return (
    <div className="code-card-container">
      <div className="code-card-glow" />
      <div className="code-card">
        {/* Header */}
        <div className="code-card-header">
          <div className="code-window-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="code-file-title">
            <Terminal size={13} />
            <span>DhanushDeveloper.cs</span>
          </div>
          <button
            onClick={handleCopy}
            className="code-copy-btn"
            title="Copy C# snippet"
            aria-label="Copy C# snippet"
          >
            {copied ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Code Content */}
        <div className="code-card-body">
          <div className="code-line">
            <span className="code-line-number">1</span>
            <span className="code-content">
              <span className="code-comment">// Dhanush S - Software Engineer</span>
            </span>
          </div>
          <div className="code-line">
            <span className="code-line-number">2</span>
            <span className="code-content">
              <span className="code-keyword">public class </span>
              <span className="code-class">DhanushDeveloper</span> : <span className="code-type">ISoftwareEngineer</span>
            </span>
          </div>
          <div className="code-line">
            <span className="code-line-number">3</span>
            <span className="code-content">{'{'}</span>
          </div>
          <div className="code-line">
            <span className="code-line-number">4</span>
            <span className="code-content">
              {'    '}<span className="code-keyword">public string </span>
              <span className="code-prop">Focus</span> =&gt; <span className="code-string">".NET Development"</span>;
            </span>
          </div>
          <div className="code-line">
            <span className="code-line-number">5</span>
            <span className="code-content">
              {'    '}<span className="code-keyword">public string </span>
              <span className="code-prop">Language</span> =&gt; <span className="code-string">"C#"</span>;
            </span>
          </div>
          <div className="code-line">
            <span className="code-line-number">6</span>
            <span className="code-content">
              {'    '}<span className="code-keyword">public string </span>
              <span className="code-prop">Framework</span> =&gt; <span className="code-string">"ASP.NET Core"</span>;
            </span>
          </div>
          <div className="code-line">
            <span className="code-line-number">7</span>
            <span className="code-content">
              {'    '}<span className="code-keyword">public string </span>
              <span className="code-prop">ORM</span> =&gt; <span className="code-string">"Entity Framework Core"</span>;
            </span>
          </div>
          <div className="code-line">
            <span className="code-line-number">8</span>
            <span className="code-content">
              {'    '}<span className="code-keyword">public string </span>
              <span className="code-prop">Database</span> =&gt; <span className="code-string">"SQL Server"</span>;
            </span>
          </div>
          <div className="code-line">
            <span className="code-line-number">9</span>
            <span className="code-content">
              {'    '}<span className="code-keyword">public string </span>
              <span className="code-prop">Location</span> =&gt; <span className="code-string">"Salem, Tamil Nadu, India"</span>;
            </span>
          </div>
          <div className="code-line">
            <span className="code-line-number">10</span>
            <span className="code-content">{'}'}</span>
          </div>
        </div>

        {/* Footer with interactive compiler simulation */}
        <div className="code-card-footer">
          <div className="status-pill-subtle">
            <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
            <span>{statusMessage}</span>
          </div>
          <button
            onClick={handleSimulateRun}
            disabled={isRunning}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--accent-blue)',
              fontSize: '0.725rem',
              cursor: 'pointer',
              opacity: isRunning ? 0.6 : 1,
            }}
            title="Trigger mock compile verification"
          >
            <Play size={11} />
            <span>{isRunning ? 'Building...' : 'dotnet run'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
