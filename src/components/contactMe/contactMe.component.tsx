import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { socialMediaAccounts } from './contactMe.data';

const ContactMe = () => {
  const { t } = useTranslation(['contactMe']);

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: 'opacity(0.7)' }}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=the%20spot%20choueifat+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
        <div
          id="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-16 mt-8 md:mt-12"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-6 font-medium title-font">
            {t('CONTACT_ME')}
          </h2>
          {socialMediaAccounts?.map(account => (
            <a
              className="relative mb-4 flex items-center"
              href={account.redirectTo}
            >
              <FontAwesomeIcon icon={account.icon} />
              <p className="leading-7 text-sm text-gray-400 ml-6">
                {t(account.name)}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ContactMe };
