import React, { useState, useEffect } from 'react';
import { Radio, Database, Server, Compass, CheckCircle2 } from 'lucide-react';

export const BusTrackingVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [packetCount, setPacketCount] = useState(142);
  const [coordinates, setCoordinates] = useState({ lat: '11.6643° N', lng: '78.1460° E' });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
      setPacketCount((c) => c + 1);

      setCoordinates({
        lat: `11.66${Math.floor(40 + Math.random() * 20)}° N`,
        lng: `78.14${Math.floor(50 + Math.random() * 20)}° E`,
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 0,
      label: 'Vehicle Node',
      title: 'Bus A-01 Telemetry',
      desc: 'GPS beacon transmitting coordinate packets',
      tag: 'GEO-LOC',
      icon: <Compass size={16} />,
    },
    {
      id: 1,
      label: 'API Gateway',
      title: 'ASP.NET Core Web API',
      desc: 'POST /api/v1/buses/A01/telemetry validated',
      tag: 'C# REST',
      icon: <Server size={16} />,
    },
    {
      id: 2,
      label: 'Query Layer',
      title: 'LINQ Route Dispatch',
      desc: 'Route 12 waypoint matching & spatial lookup',
      tag: 'LINQ',
      icon: <Radio size={16} />,
    },
    {
      id: 3,
      label: 'Data Persistence',
      title: 'EF Core & SQL Server',
      desc: 'Committed to Vehicles & RouteLogs table',
      tag: 'SQL SERVER',
      icon: <Database size={16} />,
    },
  ];

  return (
    <div className="project-visual-wrapper">
      <div className="visual-top-bar">
        <span className="visual-pulse-label">
          <span className="pulse-dot" />
          <span>Live Telemetry Pipeline</span>
        </span>
        <span>Route 12 · Bus #A-01</span>
      </div>

      <div className="pipeline-nodes-container">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <div
              key={step.id}
              className={`pipeline-node ${isActive ? 'active' : ''}`}
            >
              <div className="node-left">
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive ? 'var(--accent-blue)' : 'var(--text-muted)',
                  }}
                >
                  {step.icon}
                </span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="node-title">{step.title}</span>
                    <span className="node-tag">{step.tag}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {step.desc}
                  </span>
                </div>
              </div>

              <div className="node-status">
                {isActive ? (
                  <span style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <CheckCircle2 size={13} />
                    <span>Processing</span>
                  </span>
                ) : (
                  <span style={{ color: 'var(--text-muted)' }}>Idle</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="telemetry-feed">
        <span>Coords: {coordinates.lat}, {coordinates.lng}</span>
        <span>Packets: #{packetCount}</span>
        <span style={{ color: 'var(--accent-emerald)' }}>Latency: 12ms</span>
      </div>
    </div>
  );
};
