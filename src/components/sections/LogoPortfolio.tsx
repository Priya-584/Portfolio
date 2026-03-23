"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Maximize2, X, Layout, Palette, Mail, ImageIcon, ArrowRight, ExternalLink, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PORTFOLIO_ITEMS, CATEGORIES } from '@/constants/logoPortfolio';
import SplitText from '@/components/ui/SplitText';
import { useEffect } from 'react';

const CategoryIcon = ({ id }: { id: string }) => {
  switch (id) {
    case 'logo': return <Palette className="w-4 h-4" />;
    case 'banner': return <ImageIcon className="w-4 h-4" />;
    case 'invitation': return <Mail className="w-4 h-4" />;
    default: return <Layout className="w-4 h-4" />;
  }
};

export const LogoPortfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);
  
  // Create a randomized version of the portfolio items once on mount
  const randomizedItems = useMemo(() => {
    return [...PORTFOLIO_ITEMS].sort(() => Math.random() - 0.5);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  const filteredItems = useMemo(() => {
    // If "all" is selected, use the randomized list. Otherwise, filter from the original list.
    const baseItems = filter === 'all' ? randomizedItems : PORTFOLIO_ITEMS;
    return baseItems.filter(item => {
      const matchesFilter = filter === 'all' || item.category === filter;
      return matchesFilter;
    });
  }, [filter, randomizedItems]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  return (
    <Section id="graphics" className="bg-background relative overflow-hidden">
      {/* Ambient background glows - matching the existing style */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        {/* Header Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
              Brand Identity & Graphics
            </h2>
            <div className="max-w-3xl">
              <SplitText
                text="Creative Gallery"
                className="text-5xl md:text-7xl font-bold text-foreground tracking-tight"
                delay={50}
                duration={0.6}
                tag="h1"
                textAlign="left"
              />
            </div>
            <p className="text-muted-foreground text-xl max-w-2xl mt-4">
              Crafting visual identities and digital experiences that leave a lasting impression.
            Explore my collection of logos, mockups, and bespoke posters.
            </p>
          </motion.div>
        </div>

        {/* Search & Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap ${
                  filter === cat.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                <CategoryIcon id={cat.id} />
                <span className="font-medium text-sm">{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid - Reduced card size by increasing columns */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {visibleItems.length > 0 ? (
              visibleItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl overflow-hidden bg-secondary border border-border/50 hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-xl flex flex-col"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Media Container */}
                  <div className="w-full aspect-4/3 overflow-hidden">
                    {item.video ? (
                      <video
                        src={item.video}
                        className="w-full h-full object-contain p-2"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    
                    {/* Glass Overlay on Hover (Desktop Only) */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-end p-8">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex gap-2 mb-3">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-white border border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-1">{item.description}</p>
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                          Details <Maximize2 className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Content (Visible Only on Phone) */}
                  <div className="p-4 block md:hidden">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-primary">
                        <CategoryIcon id={item.category} />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{item.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-primary font-bold text-xs">
                      View Details <Maximize2 className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-24 text-center"
              >
                <div className="bg-secondary/50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-border/50">
                  <Search className="w-8 h-8 text-muted-foreground/50" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">No matching projects</h3>
                <p className="text-muted-foreground mb-8">Try adjusting your search or filters to find what you're looking for.</p>
                <button
                  onClick={() => setFilter('all')}
                  className="px-8 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-full font-semibold transition-all"
                >
                  Show all designs
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {filteredItems.length > visibleCount && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setVisibleCount(prev => prev + 9)}
              className="group flex flex-col items-center gap-4 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 px-8 py-4 bg-secondary/50 backdrop-blur-md border border-border/50 rounded-full font-bold text-foreground hover:bg-primary hover:text-white hover:border-primary shadow-sm hover:shadow-xl transition-all">
                Load More Projects
                <span className="ml-2 text-muted-foreground group-hover:text-white/80 font-normal text-sm">
                  ({filteredItems.length - visibleCount} more)
                </span>
                <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </div>
            </button>
          </motion.div>
        )}
      </Container>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-md pointer-events-auto"
            />

            {/* Content Container */}
            <motion.div
              layoutId={`portfolio-item-${selectedItem.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-background rounded-3xl overflow-hidden border border-border/50 shadow-2xl flex flex-col lg:flex-row max-h-[85vh] pointer-events-auto"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-secondary/50 hover:bg-primary hover:text-white rounded-full transition-all text-foreground border border-border/50 backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Media Area */}
              <div className="w-full lg:w-[60%] bg-black/40 flex items-center justify-center relative group/modal-img">
                {selectedItem.video ? (
                  <video
                    src={selectedItem.video}
                    className="max-w-full max-h-full p-4 md:p-8"
                    autoPlay
                    loop
                    muted
                    controls
                  />
                ) : (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="max-w-full max-h-full object-contain p-4 md:p-8"
                  />
                )}
                
                {/* Visual Accent */}
                <div className="absolute top-8 left-8 hidden md:block">
                  <span className="px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase border border-primary/20">
                    High Resolution
                  </span>
                </div>
              </div>

              {/* Modal Info Area */}
              <div className="w-full lg:w-[45%] p-6 md:p-10 hide-scrollbar overflow-y-auto bg-background border-t lg:border-t-0 lg:border-l border-border/50">
                <div className="flex items-center gap-2 text-primary font-bold text-[10px] tracking-[0.3em] uppercase mb-4">
                  <CategoryIcon id={selectedItem.category} />
                  <span>{selectedItem.category}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">{selectedItem.title}</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-muted-foreground uppercase text-[9px] font-bold tracking-[0.2em] mb-1">Client</h4>
                      <p className="text-foreground font-medium text-base">{selectedItem.client}</p>
                    </div>
                    <div>
                      <h4 className="text-muted-foreground uppercase text-[9px] font-bold tracking-[0.2em] mb-1">Year</h4>
                      <p className="text-foreground font-medium text-base">{selectedItem.year}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-muted-foreground uppercase text-[9px] font-bold tracking-[0.2em] mb-3">The Project</h4>
                    <p className="text-foreground/80 leading-relaxed text-sm">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-muted-foreground uppercase text-[9px] font-bold tracking-[0.2em] mb-3">Core Concepts</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-secondary/80 border border-border/50 rounded-lg text-xs font-medium text-foreground hover:border-primary/50 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="#contact"
                      onClick={() => setSelectedItem(null)}
                      className="w-full group flex items-center justify-center gap-2 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all shadow-xl shadow-primary/20 active:scale-[0.98] text-sm"
                    >
                      Start a Project Together
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};
