/**
 *
 * Asynchronously loads the component for Cards
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
