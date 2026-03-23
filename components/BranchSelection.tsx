import React from 'react';
import { MapPin } from 'lucide-react';
import { Branch } from '../types';
import { BRANCH_DATA } from '../constants';

interface BranchSelectionProps {
  onSelectBranch: (branch: Branch) => void;
}

const DISPLAY_NAMES: Record<string, string> = {
  'marina': 'MARINA',
  'albateen': 'AL BATEEN',
  'alqana': 'AL QANA',
  'khalifa': 'KHALIFA CITY',
  'mirdif': 'DUBAI MIRDIF',
};

// Define the order of branches for the navigation bar
const BRANCH_ORDER = ['marina', 'albateen', 'alqana', 'khalifa', 'mirdif'];

const BranchSelection: React.FC<BranchSelectionProps> = ({ onSelectBranch }) => {
  return (
    <div className="landing-page-body">
      
      {/* Main Content Area */}
      <div className="content-wrapper">
        <h1 className="brand-title">CARTEL</h1>
        <p className="brand-subtitle"> A NEW FREQUENCY </p>
        
        {/* Branch Navigation Buttons */}
        <div className="branch-nav-container">
          {BRANCH_ORDER.map((branchId) => {
            const branch = BRANCH_DATA.find(b => b.id === branchId);
            if (!branch) return null;
            
            const displayName = DISPLAY_NAMES[branchId] || branch.name;
            
            return (
              <button 
                key={branchId}
                onClick={() => onSelectBranch(branch)}
                className="branch-pill-btn"
              >
                <MapPin className="btn-icon" strokeWidth={1.5} />
                <span className="btn-text">{displayName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="footer-container">
        <p>EST. 2024 • ABU DHABI • DUBAI</p>
      </div>

      <style>{`
        /* 
          ========================================
          CSS STYLES
          ========================================
        */

        /* Body Background */
        .landing-page-body {
          background-color: #000000;
          background-image: radial-gradient(circle at center, #1a1a1a 0%, #000000 100%);
          min-height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          font-family: 'Inter', sans-serif;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          padding: 0 20px;
        }

        .brand-title {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          color: #FFFFFF;
          letter-spacing: 0.1em;
          margin: 0;
          font-weight: 700;
          line-height: 1;
          text-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }

        .brand-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #FFFFFF;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          margin: 0;
          font-weight: 400;
          opacity: 0.9;
        }

        /* Branch Navigation */
        .branch-nav-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .branch-pill-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px; /* Pill shape */
          padding: 1.5rem 2rem;
          min-width: 160px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .branch-pill-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .btn-icon {
          color: #FFFFFF;
          width: 24px;
          height: 24px;
          opacity: 0.9;
        }

        .btn-text {
          font-family: 'Playfair Display', serif;
          font-size: 0.9rem;
          color: #FFFFFF;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
        }

        /* Footer */
        .footer-container {
          position: absolute;
          bottom: 30px;
          z-index: 20;
          text-align: center;
          width: 100%;
          color: #FFFFFF;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 400;
          opacity: 0.4;
        }

        /* Responsiveness */
        @media (max-width: 768px) {
          .brand-title {
            font-size: 3rem;
          }
          
          .brand-subtitle {
            font-size: 0.8rem;
            letter-spacing: 0.2em;
          }

          .branch-nav-container {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
          }

          .branch-pill-btn {
            width: 100%;
            flex-direction: row; /* Horizontal on mobile for better space usage */
            padding: 1rem;
            min-width: auto;
            justify-content: flex-start;
            padding-left: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BranchSelection;
