import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useClinicConfig } from "@/hooks/useClinicConfig";

const BeforeAfter = () => {
  const config = useClinicConfig();
  const transformations = config.beforeAfter || [];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({});

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>, caseId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPositions((prev) => ({ ...prev, [caseId]: percentage }));
  };

  const handleSliderTouch = (e: React.TouchEvent<HTMLDivElement>, caseId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPositions((prev) => ({ ...prev, [caseId]: percentage }));
  };

  if (transformations.length === 0) {
    return null;
  }

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
            <div 
              className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted shadow-medium cursor-ew-resize select-none"
              onMouseMove={(e) => handleSliderMove(e, transformations[activeIndex].id)}
              onTouchMove={(e) => handleSliderTouch(e, transformations[activeIndex].id)}
            >
              {/* After Image (Background) */}
              <img
                src={transformations[activeIndex].afterImage}
                alt={`After ${transformations[activeIndex].treatment}`}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (Overlay with clip) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - (sliderPositions[transformations[activeIndex].id] ?? 50)}% 0 0)`,
                }}
              >
                <img
                  src={transformations[activeIndex].beforeImage}
                  alt={`Before ${transformations[activeIndex].treatment}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-background shadow-lg z-10"
                style={{ left: `${sliderPositions[transformations[activeIndex].id] ?? 50}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background rounded-full shadow-medium flex items-center justify-center">
                  <div className="flex gap-1">
                    <ChevronLeft className="w-4 h-4 text-foreground" />
                    <ChevronRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-6 left-6 bg-foreground/80 text-background px-4 py-2 rounded-full text-sm font-medium">
                Before
              </div>
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
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
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-background/20 text-background text-sm font-medium rounded-full">
                    {transformations[activeIndex].treatment}
                  </span>
                  <span className="text-sm text-background/70">
                    {transformations[activeIndex].duration}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-background mb-1">
                  {transformations[activeIndex].treatment} Transformation
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

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              {transformations.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all ${
                    index === activeIndex
                      ? "ring-2 ring-primary ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.afterImage}
                    alt={item.treatment}
                    className="w-full h-full object-cover"
                  />
                </button>
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
