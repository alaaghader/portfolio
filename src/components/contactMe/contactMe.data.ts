import { faLinkedin, faGithub,  } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMessage  } from '@fortawesome/free-solid-svg-icons';

import { ContactMe } from "./contactMe.type";

const socialMediaAccounts : Array<ContactMe> =  [
    {
        name: "LINKED_IN",
        redirectTo: "https://lb.linkedin.com/in/alaa-ghader-308049193",
        icon: faLinkedin
    }, 
    {
        name: "MOBILE",
        redirectTo: "tel:+96171515452",
        icon: faPhone,
    },
    {
        name: "EMAIL",
        redirectTo: "mailto:alaaghader@hotmail.com",
        icon: faMessage,
    },
    {
        name: "GITHUB",
        redirectTo: "https://github.com/alaaghader",
        icon: faGithub,
    },
];

export { socialMediaAccounts }
