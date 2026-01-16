'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';
import { SPRING_CONFIG } from '@/lib/constants';

export function AgenticInput() {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]);

    const hasContent = value.trim().length > 0;

    const handleSubmit = () => {
        if (!hasContent) return;
        // TODO: Integrate with AI SDK
        console.log('Submitting:', value);
        setValue('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Main Input Container */}
            <div
                className={`
          relative overflow-hidden rounded-2xl
          bg-white border transition-all duration-300
          ${isFocused
                        ? 'border-primary/50 shadow-[0_0_20px_rgba(212,0,0,0.1)]'
                        : 'border-surface-highlight hover:border-text-secondary/30'
                    }
        `}
            >
                {/* Glow effect on focus */}
                <AnimatePresence>
                    {isFocused && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            {/* Pulsing glow border */}
                            <div className="absolute inset-0 rounded-2xl animate-pulse opacity-10 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent" />
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/5 to-transparent" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Input Area */}
                <div className="relative p-6">
                    {/* AI Indicator */}
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className={`h-4 w-4 transition-colors duration-300 ${isFocused ? 'text-primary' : 'text-text-secondary'}`} />
                        <span className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Describe tu visión
                        </span>
                    </div>

                    {/* Textarea */}
                    <textarea
                        ref={textareaRef}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onKeyDown={handleKeyDown}
                        placeholder="Imagina tu hogar perfecto en Dallas... Cuéntame sobre el estilo, los espacios, la luz, los materiales..."
                        rows={2}
                        className="
              w-full resize-none bg-transparent
              text-xl font-sans text-text-primary placeholder:text-text-secondary/50
              focus:outline-none
              leading-relaxed
            "
                        style={{
                            fontFamily: 'var(--font-geist-sans)',
                            letterSpacing: '-0.01em',
                            minHeight: '80px',
                            maxHeight: '200px',
                        }}
                    />

                    {/* Actions Row */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-surface-highlight">
                        {/* Hints */}
                        <div className="flex items-center gap-4 text-xs text-text-secondary">
                            <span>Shift + Enter para nueva línea</span>
                        </div>

                        {/* Submit Button - Spring animation */}
                        <AnimatePresence>
                            {hasContent && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                                    transition={SPRING_CONFIG.snappy}
                                    onClick={handleSubmit}
                                    className="
                    inline-flex items-center gap-2 
                    bg-primary hover:bg-primary-dark
                    text-white font-medium
                    px-5 py-2.5 rounded-xl
                    transition-colors duration-200
                    min-h-[44px]
                  "
                                >
                                    <span>Enviar</span>
                                    <Send className="h-4 w-4" />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* AI Status Badge */}
            <div className="mt-4 flex items-center justify-center gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-surface-highlight">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <span className="font-mono text-xs text-text-secondary">
                        AI Architect Ready • v2.0
                    </span>
                </span>
            </div>
        </div>
    );
}
