import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from './Link';

const LangLink = ({ children, ...props }) => {
  const { i18n } = useTranslation();

  const changeLanguage = eventKey => {
    console.log(eventKey);
    i18n.changeLanguage(eventKey);
  };

  return (
    <Link {...props} onSelect={changeLanguage}>
      {children}
    </Link>
  );
};

export default LangLink;
