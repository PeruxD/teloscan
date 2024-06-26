import { createStore } from 'vuex';

import login from 'src/store/login';
import general from 'src/store/general';
import chain from 'src/store/chain';
import transaction from 'src/store/transaction';
import { store } from 'quasar/wrappers';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default store(function (/* { ssrContext } */) {
    const Store = createStore({
        modules: {
            general,
            login,
            chain,
            transaction,
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV,
    });

    return Store;
});
