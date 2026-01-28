import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const transformations = [
  {
    id: 1,
    treatment: "Teeth Whitening",
    description: "Professional whitening treatment - 8 shades brighter in just one session",
    beforeColor: "bg-amber-200",
    afterColor: "bg-white",
  },
  {
    id: 2,
    treatment: "Porcelain Veneers",
    description: "Complete smile makeover with custom-designed porcelain veneers",
    beforeColor: "bg-amber-100",
    afterColor: "bg-white",
  },
  {
    id: 3,
    treatment: "Invisalign",
    description: "12-month clear aligner treatment for perfect alignment",
    beforeColor: "bg-amber-50",
    afterColor: "bg-white",
  },
];

const BeforeAfter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section id="gallery" className="section-padding bg-foreground">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Smile Transformations
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-background mb-6">
            Real Results, Real{" "}
            <span className="text-gradient-warm">Confidence</span>
          </h2>
          <p className="text-lg text-background/70">
            See the incredible transformations our patients have experienced. Every smile tells a story of renewed confidence.
          </p>
        </motion.div>

        {/* Gallery Showcase */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Comparison Container */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted shadow-medium">
              {/* Before Side */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className={`w-full h-full ${transformations[activeIndex].beforeColor} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-amber-300/50 flex items-center justify-center">
                      <span className="text-4xl">😔</span>
                    </div>
                    <p className="text-xl font-medium text-foreground/70">Before</p>
                  </div>
                </div>
              </div>

              {/* After Side */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <div className={`w-full h-full ${transformations[activeIndex].afterColor} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-xl font-medium text-foreground">After</p>
                  </div>
                </div>
              </div>

              {/* Slider */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-background cursor-ew-resize z-10"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background rounded-full shadow-medium flex items-center justify-center">
                  <div className="flex gap-1">
                    <ChevronLeft className="w-4 h-4 text-foreground" />
                    <ChevronRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Slider Control */}
              <input
                type="range"
                min="10"
                max="90"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />

              {/* Labels */}
              <div className="absolute bottom-6 left-6 bg-foreground/80 text-background px-4 py-2 rounded-full text-sm font-medium">
                Before
              </div>
              <div className="absolute bottom-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                After
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-background" />
              </button>

              <div className="text-center">
                <h3 className="font-display text-xl font-medium text-background mb-1">
                  {transformations[activeIndex].treatment}
                </h3>
                <p className="text-background/70 text-sm">
                  {transformations[activeIndex].description}
                </p>
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-background" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-primary" : "bg-background/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="warm" size="xl">
            See Your Transformation
            <Sparkles className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
