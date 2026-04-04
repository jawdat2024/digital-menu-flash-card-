import fs from 'fs';
import path from 'path';

function fixFlipCardModal() {
  const filePath = path.join(process.cwd(), 'components', 'FlipCard.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const oldModalContent = `<div className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {item.ingredients}
            </div>`;

  const newModalContent = `<div className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {item.origin ? (
                <div className="flex flex-col gap-3">
                   {item.tags && item.tags.length > 0 && (
                      <div className="flex gap-2 mb-1">
                        {item.tags.map(tag => (
                          <span key={tag} className="bg-[var(--accent-color)] text-[var(--bg-primary)] text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                   )}
                   <div className="text-[10px] uppercase tracking-widest text-[var(--accent-color)] font-bold">
                      {item.origin} {item.farm && <span className="text-[var(--text-secondary)]">• {item.farm}</span>}
                   </div>
                   {item.tastingNotes && (
                     <p className="text-sm text-[var(--text-primary)] font-didone italic leading-relaxed">
                       "{item.tastingNotes}"
                     </p>
                   )}
                   <div className="flex flex-wrap gap-3 text-[9px] uppercase tracking-wider text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-3 mt-auto mb-2">
                      {item.process && <span>Process: <span className="text-[var(--text-primary)] opacity-80">{item.process}</span></span>}
                      {item.elevation && <span className="border-l border-[var(--border-color)] pl-3">Elev: <span className="text-[var(--text-primary)] opacity-80">{item.elevation}</span></span>}
                   </div>
                   <p className="text-[9px] text-[var(--text-secondary)] font-sans uppercase tracking-wider mb-4">
                      {item.ingredients}
                   </p>
                </div>
              ) : (
                item.ingredients
              )}
            </div>`;

  content = content.replace(oldModalContent, newModalContent);
  fs.writeFileSync(filePath, content, 'utf8');
}

fixFlipCardModal();
console.log('Fixed FlipCard modal content.');
