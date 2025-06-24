'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { usePathname } from 'next/navigation';

export function BeforeAfterGallery() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Define service-specific images based on the current page with optimized URLs
  const getServiceImages = () => {
    if (pathname === '/residentiel') {
      return [
        {
          before: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648031/ChatGPT_Image_Jun_22_2025_11_06_53_PM_m9i2wt.png',
          after: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648023/ChatGPT_Image_Jun_22_2025_11_06_56_PM_lfjcfe.png',
          title: t('beforeAfter.kitchen'),
          description: t('beforeAfter.kitchenDesc')
        }
      ];
    } else if (pathname === '/commercial') {
      return [
        {
          before: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648701/ChatGPT_Image_Jun_22_2025_11_12_42_PM_scrhmx.png',
          after: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648704/ChatGPT_Image_Jun_22_2025_11_15_08_PM_sft2a1.png',
          title: t('beforeAfter.office'),
          description: t('beforeAfter.officeDesc')
        }
      ];
    } else if (pathname === '/post-construction') {
      return [
        {
          before: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648707/ChatGPT_Image_Jun_22_2025_11_17_31_PM_cpbrbg.png',
          after: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648709/ChatGPT_Image_Jun_22_2025_11_17_34_PM_wha3e5.png',
          title: t('beforeAfter.construction'),
          description: t('beforeAfter.constructionDesc')
        }
      ];
    } else if (pathname === '/fin-de-bail') {
      return [
        {
          before: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648812/ChatGPT_Image_Jun_22_2025_11_20_03_PM_m6irnx.png',
          after: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648834/ChatGPT_Image_Jun_22_2025_11_20_29_PM_piastk.png',
          title: t('beforeAfter.endOfLease'),
          description: t('beforeAfter.endOfLeaseDesc')
        }
      ];
    } else {
      // Default images for home page - show all services with optimized URLs
      return [
        {
          before: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648031/ChatGPT_Image_Jun_22_2025_11_06_53_PM_m9i2wt.png',
          after: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648023/ChatGPT_Image_Jun_22_2025_11_06_56_PM_lfjcfe.png',
          title: t('beforeAfter.kitchen'),
          description: t('beforeAfter.kitchenDesc')
        },
        {
          before: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648701/ChatGPT_Image_Jun_22_2025_11_12_42_PM_scrhmx.png',
          after: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648704/ChatGPT_Image_Jun_22_2025_11_15_08_PM_sft2a1.png',
          title: t('beforeAfter.office'),
          description: t('beforeAfter.officeDesc')
        },
        {
          before: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648707/ChatGPT_Image_Jun_22_2025_11_17_31_PM_cpbrbg.png',
          after: 'https://res.cloudinary.com/dwxvjsagl/image/upload/c_fill,w_600,h_400,q_auto,f_auto/v1750648709/ChatGPT_Image_Jun_22_2025_11_17_34_PM_wha3e5.png',
          title: t('beforeAfter.construction'),
          description: t('beforeAfter.constructionDesc')
        }
      ];
    }
  };

  const beforeAfterImages = getServiceImages();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            {t('beforeAfter.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('beforeAfter.subtitle')}
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Before Image */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  {t('beforeAfter.before')}
                </div>
                <img
                  src={beforeAfterImages[currentSlide].before}
                  alt={`${t('beforeAfter.before')} ${beforeAfterImages[currentSlide].title}`}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                  width="600"
                  height="400"
                  decoding="async"
                />
              </div>

              {/* After Image */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  {t('beforeAfter.after')}
                </div>
                <img
                  src={beforeAfterImages[currentSlide].after}
                  alt={`${t('beforeAfter.after')} ${beforeAfterImages[currentSlide].title}`}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                  width="600"
                  height="400"
                  decoding="async"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Only show if more than one image */}
          {beforeAfterImages.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-6 h-6 text-[#2563EB]" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-6 h-6 text-[#2563EB]" />
              </button>
            </>
          )}

          {/* Slide Info */}
          <motion.div
            key={`info-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center mt-8"
          >
            <h3 className="text-2xl font-semibold text-[#111827] mb-2">
              {beforeAfterImages[currentSlide].title}
            </h3>
            <p className="text-gray-600">
              {beforeAfterImages[currentSlide].description}
            </p>
          </motion.div>

          {/* Dots Indicator - Only show if more than one image */}
          {beforeAfterImages.length > 1 && (
            <div className="flex justify-center space-x-2 mt-6">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-[#2563EB] scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}