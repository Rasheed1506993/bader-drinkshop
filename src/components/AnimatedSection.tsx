
import { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-in';
  delay?: number; // in milliseconds
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0 
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    const delayClass = delay > 0 ? ` animation-delay-${delay}` : '';
    
    switch (animation) {
      case 'slide-up':
        return `animate-slide-up${delayClass}`;
      case 'scale-in':
        return `animate-scale-in${delayClass}`;
      case 'fade-in':
      default:
        return `animate-fade-in${delayClass}`;
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`${className} ${getAnimationClass()}`}
      style={{ 
        animationDelay: delay > 0 ? `${delay}ms` : '0ms',
        animationFillMode: 'both',
        opacity: isVisible ? '' : '0'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
