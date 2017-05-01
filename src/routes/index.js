import Art from './Art';
import Home from './Home';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';

const routes = [
  { name: 'Home', component: Home, path: '' },
  { name: 'Art', component: Art, path: 'art' },
  { name: 'Portfolio', component: Portfolio, path: 'portfolio' },
  { name: 'Skills', component: Skills, path: 'skills' },
  { name: 'Contact', component: Contact, path: 'Contact' },
];

export default routes;
