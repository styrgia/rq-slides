/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @returns User Success
     * @throws ApiError
     */
    public static getApiV1Users(): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Users',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postApiV1Users({
        requestBody,
    }: {
        requestBody?: User,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Users',
            body: requestBody,
            mediaType: 'application/json; v=1.0',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiV1Users1({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static putApiV1Users({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: User,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json; v=1.0',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiV1Users({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Users/{id}',
            path: {
                'id': id,
            },
        });
    }

}
