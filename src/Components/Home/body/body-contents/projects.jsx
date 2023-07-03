import React from 'react';

export const Projects = ({ plan }) => {
  return (
    <div className="project">
      <div className="image">
        <div style={{ backgroundImage: `url(${plan})` }} />
      </div>
      <div className="content">
        <div className="design">
          <div>Design</div>
          <div className="percentase">
            <div style={{ width: '80%', height: '100%' }}>80%</div>
          </div>
        </div>
        <div className="develop">
          <div>Development</div>
          <div className="percentase">
            <div style={{ width: '87%', height: '100%' }}>87%</div>
          </div>
        </div>
        <div className="photograph">
          <div>Photography</div>
          <div className="percentase">
            <div style={{ width: '90%', height: '100%' }}>90%</div>
          </div>
        </div>
        <div className="strategy">
          <div className="photograph">
            <div>Strategies</div>
            <div className="percentase">
              <div style={{ width: '77%', height: '100%' }}>77%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
