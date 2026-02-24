import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { MenuItem, BeanOption, ModifierOption } from '../types';
import CurrencySymbol from './CurrencySymbol';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem;
  onAddToTray: (finalItem: MenuItem) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, item, onAddToTray }) => {
  const [selectedBean, setSelectedBean] = useState<BeanOption | null>(null);
  const [selectedModifiers, setSelectedModifiers] = useState<Record<string, ModifierOption>>({});
  const [temperature, setTemperature] = useState<'Hot' | 'Iced' | null>(null);
  const [servingStyle, setServingStyle] = useState<'Dine In' | 'Takeaway' | null>(null);

  const hasVariants = item.variants && item.variants.length > 0;
  const hasCustomizations = item.customizations && item.customizations.length > 0;
  const isMatcha = item.name.toLowerCase().includes('matcha');
  const step1Title = isMatcha ? 'Select Milk' : 'Select Bean';

  const getBasePrice = () => {
    if (hasVariants && selectedBean) return selectedBean.price;
    const match = item.price.match(/[\d\.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const calculateTotal = () => {
    let total = getBasePrice();
    Object.values(selectedModifiers).forEach((mod: ModifierOption) => {
      total += mod.price;
    });
    return total;
  };

  useEffect(() => {
    if (isOpen) {
      setSelectedBean(null);
      setTemperature(null);
      setServingStyle(null);
      
      const initialModifiers: Record<string, ModifierOption> = {};
      item.customizations?.forEach(group => {
        if (group.options.length > 0) {
           initialModifiers[group.id] = group.options[0];
        }
      });
      setSelectedModifiers(initialModifiers);
    }
  }, [isOpen, item]);

  const handleConfirm = () => {
    if (hasVariants && !selectedBean) return;
    if (!item.disableTemperature && !temperature) return;
    if (!item.disableServingStyle && !servingStyle) return;

    const totalPrice = calculateTotal();
    
    const specs: string[] = [];
    if (selectedBean) specs.push(selectedBean.name);
    Object.values(selectedModifiers).forEach((mod: ModifierOption) => {
        if (mod.price > 0 || mod.name !== 'Standard') {
            specs.push(mod.name);
        }
    });
    if (temperature) specs.push(temperature);
    if (servingStyle) specs.push(servingStyle);

    const finalItem: MenuItem = {
      ...item,
      id: `${item.id}-${Date.now()}`,
      name: item.name,
      price: `${totalPrice}`,
      ingredients: specs.join(' | '),
      image: item.image,
      variants: undefined, 
      customizations: undefined
    };

    onAddToTray(finalItem);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-2xl bg-black border border-white/20 rounded-luxury shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-white/20 flex justify-between items-center bg-black">
          <div>
            <h2 className="text-xl font-didone font-bold text-white tracking-wider uppercase">{item.name}</h2>
            <p className="text-[10px] text-neutral-400 tracking-widest mt-1">Customise your order</p>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-black">
          
          {hasVariants && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black text-xs font-bold">1</span>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">{step1Title}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.variants?.map((bean) => (
                  <button
                    key={bean.id}
                    onClick={() => setSelectedBean(bean)}
                    className={`relative p-4 rounded-xl border text-left transition-all duration-300 group ${
                      selectedBean?.id === bean.id 
                        ? 'bg-white text-black border-white shadow-lg' 
                        : 'bg-neutral-900 border-white/10 hover:border-white/30 text-neutral-400'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className={`font-bold uppercase tracking-wider text-sm ${selectedBean?.id === bean.id ? 'text-black' : 'text-white'}`}>
                        {bean.name}
                      </span>
                      <div className={`flex items-center gap-1 text-xs font-bold ${selectedBean?.id === bean.id ? 'text-black' : 'text-neutral-300'}`}>
                        <CurrencySymbol className="w-3 h-3" />
                        <span>{bean.price}</span>
                      </div>
                    </div>
                    {bean.notes && (
                      <p className={`text-[10px] leading-tight ${selectedBean?.id === bean.id ? 'text-black/70' : 'text-neutral-500'}`}>
                        {bean.notes}
                      </p>
                    )}
                    {selectedBean?.id === bean.id && (
                      <div className="absolute top-2 right-2 text-black"><Check size={14} /></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {hasCustomizations && item.customizations?.map((group, idx) => {
             const hasDescriptions = group.options.some(opt => opt.description);
             
             return (
              <div key={group.id} className="space-y-4">
                 <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black text-xs font-bold">
                     {hasVariants ? idx + 2 : idx + 1}
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white">{group.title}</h3>
                </div>
                <div className={`grid gap-3 ${hasDescriptions ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {group.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedModifiers(prev => ({...prev, [group.id]: opt}))}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1 ${
                        selectedModifiers[group.id]?.id === opt.id
                          ? 'bg-white border-white text-black'
                          : 'bg-neutral-900 border-white/10 text-neutral-400 hover:border-white/30'
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="text-xs font-bold uppercase tracking-wide">{opt.name}</span>
                        {opt.price > 0 && (
                          <div className="flex items-center text-[10px] opacity-80">
                            <span>+</span>
                            <CurrencySymbol className="w-2.5 h-2.5 mx-0.5" />
                            <span>{opt.price}</span>
                          </div>
                        )}
                      </div>
                      {opt.description && (
                        <span className={`text-[10px] leading-tight ${
                          selectedModifiers[group.id]?.id === opt.id ? 'text-black/70' : 'text-neutral-500'
                        }`}>
                          {opt.description}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
             );
          })}

          {!item.disableTemperature && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black text-xs font-bold">
                  {(hasVariants ? 1 : 0) + (hasCustomizations ? item.customizations!.length : 0) + 1}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Temperature</h3>
              </div>
              <div className="flex gap-4">
                {['Hot', 'Iced'].map((temp) => (
                  <button
                    key={temp}
                    onClick={() => setTemperature(temp as 'Hot' | 'Iced')}
                    className={`flex-1 py-3 px-4 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all ${
                      temperature === temp 
                        ? 'bg-white text-black border-white' 
                        : 'bg-neutral-900 text-neutral-400 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {temp}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!item.disableServingStyle && (
             <div className="space-y-4">
             <div className="flex items-center gap-3">
               <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black text-xs font-bold">
                 {(hasVariants ? 1 : 0) + (hasCustomizations ? item.customizations!.length : 0) + (item.disableTemperature ? 1 : 2)}
               </span>
               <h3 className="text-sm font-bold uppercase tracking-widest text-white">Serving Style</h3>
             </div>
             <div className="flex gap-4">
               {[
                 { label: 'Dine In', sub: '(Ceramic)' }, 
                 { label: 'Takeaway', sub: '(Paper Cup)' }
               ].map((style) => (
                 <button
                   key={style.label}
                   onClick={() => setServingStyle(style.label as 'Dine In' | 'Takeaway')}
                   className={`flex-1 py-3 px-4 rounded-xl border text-center transition-all ${
                     servingStyle === style.label 
                       ? 'bg-white text-black border-white' 
                       : 'bg-neutral-900 text-neutral-400 border-white/10 hover:border-white/30'
                   }`}
                 >
                   <span className="block text-xs font-bold uppercase tracking-widest">{style.label}</span>
                   <span className="block text-[9px] opacity-60 mt-1">{style.sub}</span>
                 </button>
               ))}
             </div>
           </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/20 bg-black flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">Total Price</span>
              <div className="flex items-center text-3xl font-didone font-bold text-white">
                <CurrencySymbol className="w-6 h-6 mr-1" strokeWidth={3} />
                <span>{calculateTotal()}</span>
              </div>
            </div>
            
            <button
              disabled={
                (hasVariants && !selectedBean) || 
                (!item.disableTemperature && !temperature) ||
                (!item.disableServingStyle && !servingStyle)
              }
              onClick={handleConfirm}
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:bg-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              Add to Tray
            </button>
        </div>

      </div>
    </div>
  );
};

export default ProductModal;