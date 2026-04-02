import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const FAQ = () => {
    return (
        <div className="pt-12 md:pt-16">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
          Frequently Asked Question (FAQ)
        </h2>

        <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. 
          Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>

        {/* Accordion */}
        <div className="space-y-3 text-left">

          {/* Item 1 (Open by default) */}
          <div className="collapse collapse-arrow bg-base-200 border border-primary">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title text-sm sm:text-base font-medium text-secondary">
              How does this posture corrector work?
            </div>
            <div className="collapse-content text-xs sm:text-sm text-gray-500 leading-relaxed">
              <p>
                A posture corrector works by providing support and gentle alignment 
                to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="radio" name="faq" />
            <div className="collapse-title text-sm sm:text-base font-medium text-secondary">
              Is it suitable for all ages and body types?
            </div>
            <div className="collapse-content text-xs sm:text-sm text-gray-500">
              Yes, it is designed to be adjustable and comfortable for different users.
            </div>
          </div>

          {/* Item 3 */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="radio" name="faq" />
            <div className="collapse-title text-sm sm:text-base font-medium text-secondary">
              Does it really help with back pain and posture improvement?
            </div>
            <div className="collapse-content text-xs sm:text-sm text-gray-500">
              Regular use helps improve posture and reduce back pain over time.
            </div>
          </div>

          {/* Item 4 */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="radio" name="faq" />
            <div className="collapse-title text-sm sm:text-base font-medium text-secondary">
              Does it have smart features like vibration alerts?
            </div>
            <div className="collapse-content text-xs sm:text-sm text-gray-500">
              Some models include smart alerts to notify posture correction.
            </div>
          </div>

          {/* Item 5 */}
          <div className="collapse collapse-arrow bg-base-100">
            <input type="radio" name="faq" />
            <div className="collapse-title text-sm sm:text-base font-medium text-secondary">
              How will I be notified when the product is back in stock?
            </div>
            <div className="collapse-content text-xs sm:text-sm text-gray-500">
              You can subscribe with your email to get restock notifications.
            </div>
          </div>

        </div>

        {/* Button */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <button className="btn btn-primary rounded-full px-6 flex items-center gap-2">
            See More FAQ’s
            <span className="bg-black text-white rounded-full p-1">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};


export default FAQ;