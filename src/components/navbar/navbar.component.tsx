import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import Resume from '&assets/documents/AlaaGhader-CV.pdf';

const Navbar = () => {
  const { t } = useTranslation(['navbar']);

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Alaa Ghader
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="https://github.com/alaaghader"
            className="mr-5 hover:text-white"
          >
            {t('PAST_WORK')}
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            {t('SKILLS')}
          </a>
          <a href={Resume} className="mr-5 hover:text-white">
            {t('RESUME')}
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          {t('CONTACT_ME')}
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
};

export { Navbar };
