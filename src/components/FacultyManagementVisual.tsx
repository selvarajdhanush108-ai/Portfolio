import React, { useState } from 'react';
import { Database, Filter, Server, CheckCircle2 } from 'lucide-react';

export const FacultyManagementVisual: React.FC = () => {
  const [selectedOperation, setSelectedOperation] = useState<'filter' | 'search' | 'create'>('filter');

  const operations = {
    filter: {
      action: 'GET /api/faculty?deptId=CSE',
      linqQuery: '_context.Faculty.Where(f => f.DepartmentId == "CSE").OrderBy(f => f.Name)',
      dbExecution: 'SELECT Id, Name, Email, Designation FROM Faculty WHERE DeptId = @p0 ORDER BY Name',
      resultPreview: 'Status: 200 OK (14 records retrieved)',
      time: '9ms',
    },
    search: {
      action: 'GET /api/faculty/search?q=Smith',
      linqQuery: '_context.Faculty.Where(f => f.Name.Contains(q) || f.Email.Contains(q))',
      dbExecution: 'SELECT * FROM Faculty WHERE Name LIKE @p0 OR Email LIKE @p0',
      resultPreview: 'Status: 200 OK (Matched primary key #104)',
      time: '6ms',
    },
    create: {
      action: 'POST /api/faculty [New Faculty DTO]',
      linqQuery: '_context.Faculty.AddAsync(entity); await _context.SaveChangesAsync();',
      dbExecution: 'INSERT INTO Faculty (Name, Email, DeptId) VALUES (@p0, @p1, @p2)',
      resultPreview: 'Status: 201 Created (Entity Key #128 assigned)',
      time: '14ms',
    },
  };

  const current = operations[selectedOperation];

  return (
    <div className="project-visual-wrapper">
      <div className="visual-top-bar">
        <span className="visual-pulse-label">
          <Database size={13} color="var(--accent-blue)" />
          <span>EF Core / SQL Server Data Pipeline</span>
        </span>
        <span>CRUD &amp; LINQ Optimization</span>
      </div>

      {/* Operation Selector Buttons */}
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setSelectedOperation('filter')}
          style={{
            fontSize: '0.725rem',
            fontFamily: 'var(--font-mono)',
            padding: '0.3rem 0.65rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            background: selectedOperation === 'filter' ? 'var(--gradient-accent)' : 'var(--bg-card)',
            color: selectedOperation === 'filter' ? '#ffffff' : 'var(--text-secondary)',
          }}
        >
          Dept Filter
        </button>
        <button
          onClick={() => setSelectedOperation('search')}
          style={{
            fontSize: '0.725rem',
            fontFamily: 'var(--font-mono)',
            padding: '0.3rem 0.65rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            background: selectedOperation === 'search' ? 'var(--gradient-accent)' : 'var(--bg-card)',
            color: selectedOperation === 'search' ? '#ffffff' : 'var(--text-secondary)',
          }}
        >
          Indexed Search
        </button>
        <button
          onClick={() => setSelectedOperation('create')}
          style={{
            fontSize: '0.725rem',
            fontFamily: 'var(--font-mono)',
            padding: '0.3rem 0.65rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            background: selectedOperation === 'create' ? 'var(--gradient-accent)' : 'var(--bg-card)',
            color: selectedOperation === 'create' ? '#ffffff' : 'var(--text-secondary)',
          }}
        >
          Postman CRUD
        </button>
      </div>

      {/* Visual Pipeline Stack */}
      <div className="pipeline-nodes-container">
        <div className="pipeline-node active">
          <div className="node-left">
            <Server size={15} color="var(--accent-blue)" />
            <div>
              <span className="node-title">{current.action}</span>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                ASP.NET Core Web API Controller Request
              </div>
            </div>
          </div>
          <span className="node-tag">HTTP REST</span>
        </div>

        <div className="pipeline-node">
          <div className="node-left">
            <Filter size={15} color="var(--accent-indigo)" />
            <div>
              <span className="node-title" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                {current.linqQuery}
              </span>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                LINQ Expression Tree &amp; Entity Validation
              </div>
            </div>
          </div>
          <span className="node-tag">LINQ</span>
        </div>

        <div className="pipeline-node">
          <div className="node-left">
            <Database size={15} color="var(--accent-emerald)" />
            <div>
              <span className="node-title" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                {current.dbExecution}
              </span>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                SQL Server Query Engine
              </div>
            </div>
          </div>
          <span className="node-tag">SQL SERVER</span>
        </div>
      </div>

      <div className="telemetry-feed" style={{ marginTop: '1rem' }}>
        <span style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <CheckCircle2 size={13} />
          {current.resultPreview}
        </span>
        <span style={{ color: 'var(--accent-blue)' }}>Execution: {current.time}</span>
      </div>
    </div>
  );
};
