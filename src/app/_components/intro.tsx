'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function Intro() {
  const scrollToContent = () => {
    const contentSection = document.querySelector('#content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [rotations, setRotations] = useState(0);

  useEffect(() => {
    // Make sure the fonts are loaded before starting animations
    if (typeof document !== 'undefined') {
      // Initialize all elements
      if (titleContainerRef.current) {
        // Select all word elements - they're in the DOM from the start but invisible
        const wordElements = titleContainerRef.current.querySelectorAll('.word');
        
        // Hide words initially
        gsap.set(wordElements, { 
          opacity: 0,
          y: -100,
          rotation: (i) => gsap.utils.random(-80, 80)
        });
      }
      
      // Wait for fonts to load
      document.fonts.ready.then(() => {
        // Animate once fonts are loaded
        setTimeout(() => {
          if (titleContainerRef.current) {
            // Select all word elements
            const wordElements = titleContainerRef.current.querySelectorAll('.word');
            
            // Animate words in
            gsap.to(wordElements, {
              opacity: 1,
              y: 0,
              rotation: 0,
              stagger: 0.1,
              duration: 1,
              ease: "back.out(1.7)"
            });
          }

          // Logo bounce animation
          if (logoRef.current) {
            gsap.to(logoRef.current, {
              scale: 1.25,
              duration: 0.2,
              ease: "power3.inOut",
              repeat: -1,
              yoyo: true,
              repeatDelay: 0.25
            });
          }
        }, 100);
      });
    }

    // Logo draggable functionality
    if (logoRef.current) {
      let isDragging = false;
      let startX = 0;
      let startY = 0;
      let initialX = 0;
      let initialY = 0;
      
      const handleMouseDown = (e: MouseEvent) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        // Get current transform values
        const style = window.getComputedStyle(logoRef.current!);
        const matrix = new DOMMatrix(style.transform);
        initialX = matrix.m41;
        initialY = matrix.m42;
        
        e.preventDefault();
      };
      
      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        // Update position with GSAP
        gsap.set(logoRef.current, {
          x: initialX + dx,
          y: initialY + dy
        });
      };
      
      const handleMouseUp = () => {
        if (isDragging) {
          isDragging = false;
          
          // Spring back effect with GSAP
          gsap.timeline()
            .to(logoRef.current, {
              scale: 1.1,
              duration: 0.1
            })
            .to(logoRef.current, {
              scale: 1,
              duration: 0.2,
              ease: "elastic.out(1, 0.3)"
            });
        }
      };
      
      logoRef.current.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      // Cleanup event listeners
      return () => {
        if (logoRef.current) {
          logoRef.current.removeEventListener('mousedown', handleMouseDown);
        }
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, []);

  return (
    <section className="md:min-h-[100vh] flex flex-col justify-center bg-white">
      <div className="max-w-7xl mx-auto w-full py-12 md:py-20">
        <div className="flex flex-col md:grid-cols-1 gap-2 md:gap-4">            
            {/* Fixed height container to prevent layout shifts */}
            <div className="title-wrapper h-64">
              <div className="gsap-title-container" ref={titleContainerRef}>
                <h1 className="text-5xl md:text-8xl font-bold split">
                  <span className="word opacity-0">Salim</span>
                  <span className="word opacity-0">Boujaddi</span>
                </h1>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/resume.pdf" 
                className="px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-700 transition-all duration-300"
              >
                View Resume
              </Link>
              <button 
                onClick={scrollToContent}
                className="px-8 py-3 bg-white text-black font-medium rounded-md border border-gray-200 flex items-center gap-2 border-gray-300 transition-all duration-300"
              >
                Explore Work
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </button>
            </div>
            
            {/* Phi SVG arrow below buttons */}
            <div className="mt-8 ml-4 flex">
              <Image 
                src="/phi.svg" 
                alt="Arrow" 
                width={150} 
                height={150} 
                className=""
              />
            </div>
          </div>
      </div>
            
      <h2 className="text-3xl md:text-2xl md:absolute right-24 bottom-24 font-light tracking-tight text-black leading-tight">
          <span className="font-base">Final-year</span> <span className="text-gray-400">Math BSc</span>
          <br />& <span className="font-base">4 Hackathons</span> Prize Winner
        </h2>

      <style jsx>{`
        .title-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
        }
        
        .gsap-title-container {
          position: relative;
          width: 70vw;
          display: flex;
          flex-direction: column;
        }

        .split {
          display: flex;
          flex-wrap: wrap;
          justify-content: begin;
        }

        .word {
          opacity: 0; /* Start completely invisible in CSS */
          display: inline-block;
          border: 1.5px dashed #000;
          background-image: linear-gradient(45deg, #000, #000);
          background-size: 100%;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
          background-clip: text;
          padding: 1rem;
          margin: 0.25rem;
          border-radius: 10px;
          line-height: 1.2;
          height: auto;
          width: auto;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}
