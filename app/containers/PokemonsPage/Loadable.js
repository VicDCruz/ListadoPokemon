/**
 *
 * Asynchronously loads the component for PokemonsPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
