/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activity } from '../models/Activity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ActivitiesService {

    /**
     * @returns Activity Success
     * @throws ApiError
     */
    public static getApiV1Activities(): CancelablePromise<Array<Activity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Activities',
        });
    }

    /**
     * @returns Activity Success
     * @throws ApiError
     */
    public static postApiV1Activities({
        requestBody,
    }: {
        requestBody?: Activity,
    }): CancelablePromise<Activity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Activities',
            body: requestBody,
            mediaType: 'application/json; v=1.0',
        });
    }

    /**
     * @returns Activity Success
     * @throws ApiError
     */
    public static getApiV1Activities1({
        id,
    }: {
        id: number,
    }): CancelablePromise<Array<Activity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Activities/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns Activity Success
     * @throws ApiError
     */
    public static putApiV1Activities({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: Activity,
    }): CancelablePromise<Activity> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Activities/{id}',
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
    public static deleteApiV1Activities({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Activities/{id}',
            path: {
                'id': id,
            },
        });
    }

}
