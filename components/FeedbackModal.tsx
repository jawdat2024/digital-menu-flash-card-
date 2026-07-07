import React, { useState, useRef } from 'react';
import { UploadCloud, X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitCustomerFeedback } from '../firebaseUtils';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  // Form State
  const [category, setCategory] = useState('');
  const [details, setDetails] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('');
  const [file, setFile] = useState<File | null>(null);

  // UI State
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['Dish Problem', 'Sweet', 'Drink', 'Positive'];
  const branches = ['Marina', 'Al Qana', 'Al Bateen', 'Al Ain'];

  if (!isOpen) return null;

  // Handlers
  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    setIsSuccess(false);
    onClose();
    // Reset form
    setCategory(''); 
    setDetails(''); 
    setName(''); 
    setPhone(''); 
    setBranch(''); 
    setFile(null);
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !details || !name || !phone || !branch) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await submitCustomerFeedback({
        category,
        description: details,
        customerName: name,
        phoneNumber: phone,
        branch
      }, file);

      setIsSuccess(true);
      
      // Auto-close after success
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error: any) {
      console.error('Submission Error:', error);
      const exactError = error instanceof Error ? error.message : JSON.stringify(error) || 'Unknown error occurred';
      setErrorMessage(exactError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 z-0 cursor-default"
        onClick={handleClose}
      />

      <div className="relative z-10 w-full max-w-lg bg-[#121212] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden font-sans">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
          <h2 className="text-xl font-medium tracking-tight text-white uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Hotline Feedback
          </h2>
          <button 
            type="button" 
            onClick={handleClose} 
            disabled={isSubmitting}
            className="text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
          >
            <X size={20} />
          </button>
        </div>

        {/* Success State Overlay */}
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center p-12 space-y-4">
            <CheckCircle2 size={64} className="text-green-500 animate-pulse" />
            <h3 className="text-2xl font-semibold text-white">Received</h3>
            <p className="text-zinc-400 text-center">Your feedback has been sent directly to management. Thank you.</p>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* 1. Category Tags */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Select Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      category === cat 
                        ? 'bg-white text-black' 
                        : 'bg-zinc-900 border border-zinc-700 text-zinc-300 hover:border-zinc-500'
                    } disabled:opacity-50`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Attach Photo (Drag & Drop) */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Attach Photo (Optional)</label>
              <div 
                className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer ${
                  isDragging ? 'border-white bg-zinc-800/50' : 'border-zinc-700 hover:border-zinc-500'
                } ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                onDragOver={(e: React.DragEvent<HTMLDivElement>) => { e.preventDefault(); if (!isSubmitting) setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={isSubmitting ? undefined : handleFileDrop}
                onClick={() => { if (!isSubmitting) fileInputRef.current?.click(); }}
              >
                <UploadCloud className="mx-auto mb-2 text-zinc-400" size={24} />
                <p className="text-sm text-zinc-300">
                  {file ? file.name : "Click to upload or drag and drop"}
                </p>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  disabled={isSubmitting}
                  onChange={handleFileSelect} 
                />
              </div>
            </div>

            {/* 3. Form Inputs */}
            <div className="space-y-4">
              <textarea 
                required
                disabled={isSubmitting}
                placeholder="Please describe your experience..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all h-24 resize-none disabled:opacity-50"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <input 
                  required
                  disabled={isSubmitting}
                  type="text" 
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all disabled:opacity-50"
                />
                <input 
                  required
                  disabled={isSubmitting}
                  type="tel" 
                  placeholder="+971 50 000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all disabled:opacity-50"
                />
              </div>

              <div className="relative">
                <select 
                  required
                  disabled={isSubmitting}
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all appearance-none disabled:opacity-50"
                >
                  <option value="" disabled className="text-zinc-500">Select Branch</option>
                  {branches.map(b => (
                    <option key={b} value={b} className="bg-zinc-900 text-white">{b}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="flex flex-col items-center gap-1 text-red-500 text-xs px-2 animate-in fade-in">
                <div className="flex items-center gap-2">
                  <AlertCircle size={14} />
                  <span className="font-semibold uppercase tracking-wider">Transmission Failed</span>
                </div>
                <span className="text-center mt-1 break-words opacity-80 max-w-full">
                  {errorMessage}
                </span>
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting || !category}
              className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>TRANSMITTING...</span>
                </>
              ) : (
                <span>SUBMIT FEEDBACK</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
