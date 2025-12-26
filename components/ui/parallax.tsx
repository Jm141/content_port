'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Parallax({
  children,
  offset = 50,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [elementTop, elementTop + elementHeight],
    [0, offset],
    { clamp: false }
  );

  useEffect(() => {
    if (!ref.current) return;
    
    const setValues = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setElementTop(rect.top + window.scrollY);
        setElementHeight(rect.height);
      }
    };

    setValues();
    window.addEventListener('resize', setValues);
    return () => window.removeEventListener('resize', setValues);
  }, [ref]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
