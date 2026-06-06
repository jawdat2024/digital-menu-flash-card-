import React, { useState } from 'react';
import { X, UploadCloud, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitCustomerFeedback } from '../firebaseUtils';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FeedbackType = "Dish Problem" | "Sweet" | "Drink" | "Positive Feedback";
type BranchOption = "Marina" | "Al Qana" | "Al Bateen" | "Al Ain";

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState<FeedbackType | null>(null);
  const [description, setDescription] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [branch, setBranch] = useState<BranchOption | ''>('');
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleClose = () => {
    setSelectedType(null);
    setDescription('');
    setCustomerName('');
    setPhoneNumber('');
    setBranch('');
    setImage(null);
    setSubmitStatus('idle');
    setErrorMessage(null);
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType || !description || !customerName || !phoneNumber || !branch) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage(null);

    try {
      await submitCustomerFeedback({
        category: selectedType,
        description,
        customerName,
        phoneNumber,
        branch
      }, image);

      setSubmitStatus('success');
      // Clear fields on success
      setSelectedType(null);
      setDescription('');
      setCustomerName('');
      setPhoneNumber('');
      setBranch('');
      setImage(null);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error: any) {
      console.error('Submission Error:', error);
      const exactError = error instanceof Error ? error.message : JSON.stringify(error) || 'Unknown error occurred';
      setErrorMessage(exactError);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={isSubmitting ? undefined : handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-[var(--bg-primary)] border border-[var(--border-color)] w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        <button 
          onClick={isSubmitting ? undefined : handleClose}
          disabled={isSubmitting}
          className="absolute top-4 right-4 p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-full hover:bg-[var(--hover-bg)] disabled:opacity-50"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <h2 className="text-xl font-didone uppercase tracking-widest text-[var(--text-primary)] mb-6 text-center">
          Hot Line Feedback
        </h2>

        {submitStatus === 'success' ? (
          <div className="flex flex-col items-center justify-center py-12 animate-in fade-in zoom-in duration-500">
            <CheckCircle2 size={64} strokeWidth={1} className="text-green-500 mb-6" />
            <p className="text-sm font-sans uppercase tracking-[0.2em] text-[var(--text-primary)] text-center">
              Feedback Transmitted Successfully
            </p>
            <p className="text-xs text-[var(--text-secondary)] mt-4">Thank you for helping us improve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Feedback Type Selectors */}
            <div className="space-y-3">
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {(["Dish Problem", "Sweet", "Drink", "Positive Feedback"] as FeedbackType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full border text-xs font-sans tracking-wide transition-all ${
                      selectedType === type 
                        ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-primary)]' 
                        : 'border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--text-primary)]'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Upload Area */}
            <div className="space-y-3">
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Photo (Optional)
              </label>
              <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[var(--border-color)] rounded-xl transition-all group ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-[var(--hover-bg)] hover:border-[var(--text-primary)]'}`}>
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadCloud size={24} strokeWidth={1} className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] mb-2 transition-colors" />
                  <p className="text-xs text-[var(--text-secondary)] text-center px-4">
                    {image ? <span className="text-[var(--text-primary)] font-medium break-all">{image.name}</span> : 'Click to upload or drag and drop'}
                  </p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageChange}
                  disabled={isSubmitting}
                />
              </label>
            </div>

            {/* Description Field */}
            <div className="space-y-3">
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Additional Details
              </label>
              <textarea
                required
                disabled={isSubmitting}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please describe your experience..."
                className="w-full h-24 bg-transparent border border-[var(--border-color)] rounded-xl p-4 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] resize-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Customer Name */}
            <div className="space-y-3">
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Customer Name
              </label>
              <input
                type="text"
                required
                disabled={isSubmitting}
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-transparent border border-[var(--border-color)] rounded-xl p-4 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-3">
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Phone Number
              </label>
              <input
                type="tel"
                required
                disabled={isSubmitting}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+971 XX XXX XXXX"
                className="w-full bg-transparent border border-[var(--border-color)] rounded-xl p-4 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Branch Selection */}
            <div className="space-y-3">
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Branch
              </label>
              <select
                required
                disabled={isSubmitting}
                value={branch}
                onChange={(e) => setBranch(e.target.value as BranchOption)}
                className="w-full bg-transparent border border-[var(--border-color)] rounded-xl p-4 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
              >
                <option value="" disabled className="text-gray-500">Select a branch</option>
                <option value="Marina" className="bg-[var(--bg-primary)]">Marina</option>
                <option value="Al Qana" className="bg-[var(--bg-primary)]">Al Qana</option>
                <option value="Al Bateen" className="bg-[var(--bg-primary)]">Al Bateen</option>
                <option value="Al Ain" className="bg-[var(--bg-primary)]">Al Ain</option>
              </select>
            </div>
            
            {/* Error Message */}
            {submitStatus === 'error' && (
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
              disabled={!selectedType || !description || !customerName || !phoneNumber || !branch || isSubmitting}
              className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full py-4 text-xs font-sans uppercase tracking-[0.2em] font-medium hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>TRANSMITTING...</span>
                </>
              ) : (
                'SUBMIT FEEDBACK'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
