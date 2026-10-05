import React, { useState } from 'react';
import { Cpu, ArrowRight } from 'lucide-react';
import { SKILL_CATEGORIES, TECH_CONSTELLATION } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'dotnet', label: '.NET Ecosystem' },
    { id: 'backend', label: 'Backend Architecture' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Developer Tools' },
  ];

  // Mouse move handler for spotlight effect on cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.category === activeTab);

  return (
    <section id="skills" className="section-wrapper" aria-label="Technical Skills">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Cpu size={12} />
            <span>Technical Capabilities</span>
          </span>
          <h2 className="section-title">Backend Architecture &amp; Stack</h2>
          <p className="section-subtitle">
            Curated toolkit centered on high-performance C# services, enterprise database systems, and robust developer tooling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="skills-filter-bar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`skill-filter-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid with Spotlight Effect */}
        <div className="skills-grid">
          {filteredCategories.flatMap((cat) =>
            cat.skills.map((skill) => (
              <div
                key={skill.name}
                className="spotlight-card skill-card"
                onMouseMove={handleMouseMove}
              >
                <div>
                  <div className="skill-card-top">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className={`skill-badge ${skill.level === 'Core' ? 'core' : ''}`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="skill-desc">{skill.description}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Technical Pipeline Constellation */}
        <div className="tech-constellation-strip">
          {TECH_CONSTELLATION.map((item, idx) => (
            <React.Fragment key={item.name}>
              <div className="constellation-node">
                <span className="constellation-tech">{item.name}</span>
                <span className="constellation-role">{item.role}</span>
              </div>
              {idx < TECH_CONSTELLATION.length - 1 && (
                <ArrowRight size={14} className="constellation-connector" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
