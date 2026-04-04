import fs from 'fs';
import path from 'path';

function updateFlipCard() {
  const filePath = path.join(process.cwd(), 'components', 'FlipCard.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Add state variables and functions
  if (!content.includes('isModalOpen')) {
    const stateCode = `  const [triggerSparkle, setTriggerSparkle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeModal = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 400);
  };`;
    content = content.replace('  const [triggerSparkle, setTriggerSparkle] = useState(false);', stateCode);
  }

  // Add onClick and cursor-pointer to main div
  if (!content.includes('onClick={openModal}')) {
    content = content.replace(
      '<div \n        className={`group relative w-full h-[450px] flex flex-col bg-[var(--card-bg)] rounded-[30px] overflow-hidden transition-all duration-500 ease-luxury border border-[var(--border-color)]',
      '<div \n        onClick={openModal}\n        className={`group relative w-full h-[450px] flex flex-col bg-[var(--card-bg)] rounded-[30px] overflow-hidden transition-all duration-500 ease-luxury border border-[var(--border-color)] cursor-pointer'
    );
  }

  // Update image scale
  const imgRegex = /<img\s+src=\{item\.image\}\s+alt=\{item\.name\}\s+className=\{`w-full h-full \$\{isFilterTap \|\| isColdBrew \? 'object-contain p-4' : 'object-cover'\} object-center transition-transform duration-\[1\.5s\] ease-luxury grayscale-\[20%\] group-hover:grayscale-0 \$\{!item\.isSoldOut && item\.status !== 'Sold Out' && item\.status !== 'Coming Soon' && 'group-hover:scale-105'\}`\}\s+loading="lazy"\s+\/>/;
  
  if (imgRegex.test(content)) {
    content = content.replace(imgRegex, `<img 
                   src={item.image} 
                   alt={item.name}
                   className={\`w-full h-full \${isFilterTap || isColdBrew ? 'object-contain p-4' : 'object-cover'} object-center transition-transform duration-[1.5s] ease-luxury grayscale-[20%] group-hover:grayscale-0\`}
                   style={{ transform: 'scale(1.1)' }}
                   loading="lazy"
                 />`);
  }

  // Add modal
  if (!content.includes('isModalOpen && (')) {
    const modalCode = `
      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            opacity: isAnimating ? 1 : 0,
            transition: 'opacity 0.4s ease-in-out'
          }}
        >
          <div 
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 w-full max-w-md md:max-w-lg relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out'
            }}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h3 className={\`text-xl font-bold text-[var(--text-primary)] mb-4 pr-6 \${isFilterTap ? 'font-sans uppercase tracking-widest' : 'font-didone'}\`}>
              {item.name}
            </h3>
            <div className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {item.ingredients}
            </div>
          </div>
        </div>
      )}
    </>
  );`;
    content = content.replace('    </>\n  );\n', modalCode);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

function updateSmoothieCard() {
  const filePath = path.join(process.cwd(), 'components', 'SmoothieCard.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Add useState import if missing
  if (!content.includes('useState')) {
    content = content.replace("import React from 'react';", "import React, { useState } from 'react';");
  }

  // Add state variables and functions
  if (!content.includes('isModalOpen')) {
    const stateCode = `  const animationDelay = \`\${index * 50}ms\`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeModal = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 400);
  };`;
    content = content.replace('  const animationDelay = `${index * 50}ms`;', stateCode);
  }

  // Add onClick and cursor-pointer to main div
  if (!content.includes('onClick={openModal}')) {
    content = content.replace(
      '<div \n      className={`group relative w-full h-[450px] flex flex-col bg-black rounded-[30px] overflow-hidden transition-all duration-500 ease-luxury border border-white/10',
      '<div \n      onClick={openModal}\n      className={`group relative w-full h-[450px] flex flex-col bg-black rounded-[30px] overflow-hidden transition-all duration-500 ease-luxury border border-white/10 cursor-pointer'
    );
  }

  // Update image scale
  const imgRegex = /<img\s+src=\{item\.image\}\s+alt=\{item\.name\}\s+className="w-full h-full object-cover object-center transition-transform duration-\[1\.5s\] ease-luxury group-hover:scale-105"\s+loading="lazy"\s+\/>/;
  
  if (imgRegex.test(content)) {
    content = content.replace(imgRegex, `<img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-luxury"
            style={{ transform: 'scale(1.1)' }}
            loading="lazy"
          />`);
  }

  // Add modal
  if (!content.includes('isModalOpen && (')) {
    const modalCode = `
      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            opacity: isAnimating ? 1 : 0,
            transition: 'opacity 0.4s ease-in-out'
          }}
        >
          <div 
            className="bg-black border border-white/10 rounded-2xl p-6 w-full max-w-md md:max-w-lg relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out'
            }}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h3 className="text-xl font-bold text-white mb-4 pr-6 font-didone uppercase tracking-wide">
              {item.name}
            </h3>
            <div className="text-sm text-neutral-400 font-sans leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {item.ingredients}
            </div>
          </div>
        </div>
      )}
    </div>
  );`;
    content = content.replace('    </div>\n  );\n', modalCode);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

updateFlipCard();
updateSmoothieCard();
console.log('Update script executed successfully.');
