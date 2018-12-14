'use strict';
//
import postManager from './post.manager';
//
// function getContext(request) {
//     return { user: request && request.user };
// }
//
// function getter(manager, request) {
//     return function () {
//         return manager.create(getContext(request), this);
//     };
// }
//



import userManager from './user.manager';

function getContext(request) {
    return { user: request && request.user };
}

function getter(manager) {
    return (request) => manager.create(getContext(request));
}
const createBusinessContainer = (request, config) => {

    return {
        getUserManager: getter(userManager, request),
        getPostManager: getter(postManager, request)
    };
};

export default createBusinessContainer;
