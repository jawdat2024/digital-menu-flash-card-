import fs from 'fs';
import path from 'path';

function updateMenuItemCard() {
  const filePath = path.join(process.cwd(), 'components', 'MenuItemCard.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Add useState import if missing
  if (!content.includes('useState')) {
    content = content.replace("import React from 'react';", "import React, { useState } from 'react';");
  }

  // Add state variables and functions
  if (!content.includes('isModalOpen')) {
    const stateCode = `const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
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
    content = content.replace('const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {', stateCode);
  }

  // Add onClick and cursor-pointer to main div
  if (!content.includes('onClick={openModal}')) {
    content = content.replace(
      '<div className="flex flex-col h-full bg-white rounded-[32px] overflow-hidden relative group hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1 p-2">',
      '<div \n      onClick={openModal}\n      className="flex flex-col h-full bg-white rounded-[32px] overflow-hidden relative group hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1 p-2 cursor-pointer">'
    );
  }

  // Update image scale
  const imgRegex = /<img\s+src=\{item\.image\}\s+alt=\{item\.name\}\s+className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"\s+loading="lazy"\s+\/>/;
  
  if (imgRegex.test(content)) {
    content = content.replace(imgRegex, `<img 
                 src={item.image} 
                 alt={item.name} 
                 className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
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
            className="bg-white border border-neutral-200 rounded-2xl p-6 w-full max-w-md md:max-w-lg relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out'
            }}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h3 className="text-xl font-bold text-black mb-4 pr-6 font-didone uppercase tracking-wide">
              {item.name}
            </h3>
            <div className="text-sm text-neutral-600 font-sans leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
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

updateMenuItemCard();
console.log('Update script executed successfully.');
