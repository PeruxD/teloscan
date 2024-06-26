import state from 'src/store/chain/state';
import * as getters from 'src/store/chain/getters';
import * as mutations from 'src/store/chain/mutations';
import * as actions from 'src/store/chain/actions';

// TODO: maybe this better...
//   preloading the file so we don't have multiple components asking for contract and all triggering the token-list
//   download at once
//actions.getContract({}, {address: '0xdead'});

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
