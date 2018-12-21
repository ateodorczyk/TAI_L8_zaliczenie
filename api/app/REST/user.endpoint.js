'use strict';
import business from '../business/business.container';
import auth from "../middleware/auth";
const userEndpoint = (router) => {
    // router.get('/api/posts', async (request, response, next) => {
    //     try {
    //         let result = await
    //             business(request).getPostManager().query();
    //         response.status(200).send(result);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // });
    //
    // router.get('/api/post/:id', async (request, response, next) => {
    //     try {
    //         let result = await business(request).getPostManager().get(request.params.id);
    //         response.status(200).send(result);
    //     } catch (error) {
    //         applicationException.errorHandler(error, response);
    //     }
    // });

    router.post('/api/user/auth', async (request, response, next) => {
        try {
            let result = await business(request).getUserManager().authenticate(request.body.login, request.body.password);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.post('/api/user/create', async (request, response, next) => {
        try {
            let result = await business(request).getUserManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.delete('/api/user/logout/:userId', auth, async (request, response, next) => {
        try {
            let result = await business(request).getUserManager().removeHashSession(request.params.userId);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

};

export default userEndpoint;