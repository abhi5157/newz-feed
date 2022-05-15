import React from 'react';
import Abhi from 'react-dom/client';
import Newz from './NewsApi/Newz'


const root = Abhi.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Newz />
  </React.StrictMode>
);



