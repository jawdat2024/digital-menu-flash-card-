import React, { useState } from 'react';
import { Star, Send, CheckCircle2 } from 'lucide-react';

const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setRating(0);
      setComment('');
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 500);
  };

  return (
    <div className="bg-black border border-white/20 rounded-luxury p-8 md:p-12 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 p-32 bg-white/5 blur-[80px] rounded-full pointer-events-none opacity-20" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-didone font-bold text-white uppercase tracking-wider mb-4">
          Share Your Experience
        </h2>
        <p className="text-neutral-400 text-xs uppercase tracking-widest mb-8">
          Your feedback helps us brew better coffee.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 animate-in zoom-in duration-300">
            <CheckCircle2 size={48} className="text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-neutral-400 text-sm">We appreciate your feedback.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Star Rating */}
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`p-2 transition-all hover:scale-110 focus:outline-none ${
                    rating >= star ? 'text-white' : 'text-neutral-800 hover:text-neutral-600'
                  }`}
                >
                  <Star size={32} fill={rating >= star ? "currentColor" : "none"} strokeWidth={1.5} />
                </button>
              ))}
            </div>

            {/* Comment Area */}
            <div className="relative group">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell us what you loved or how we can improve..."
                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-all resize-none h-32 text-sm"
              />
              <div className="absolute bottom-4 right-4">
                 <button 
                    type="submit"
                    disabled={rating === 0}
                    className="h-10 w-10 bg-white text-black rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-all shadow-md hover:bg-neutral-300"
                 >
                    <Send size={16} />
                 </button>
              </div>
            </div>
            
            <p className="text-[10px] text-neutral-600">
               * Your feedback is anonymous and sent directly to management.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;