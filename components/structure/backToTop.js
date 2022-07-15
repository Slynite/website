import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/outline'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-2 right-2'>
      <button
        type='button'
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center p-3 rounded-md shadow-sm text-primary bg-secondary transition-opacity hover:bg-customGray hover:text-secondary'
        )}
      >
        <ChevronUpIcon className='h-6 w-6' aria-hidden='true' />
      </button>
    </div>
  );
};