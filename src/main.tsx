import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ParentChildrenSelectionRelationship from './Demo';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParentChildrenSelectionRelationship />
  </StrictMode>,
);
