/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Book } from '../models/Book';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BooksService {

    /**
     * @returns Book Success
     * @throws ApiError
     */
    public static getApiV1Books(): CancelablePromise<Array<Book>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Books',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postApiV1Books({
        requestBody,
    }: {
        requestBody?: Book,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Books',
            body: requestBody,
            mediaType: 'application/json; v=1.0',
        });
    }

    /**
     * @returns Book Success
     * @throws ApiError
     */
    public static getApiV1Books1({
        id,
    }: {
        id: number,
    }): CancelablePromise<Book> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Books/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static putApiV1Books({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: Book,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Books/{id}',
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
    public static deleteApiV1Books({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Books/{id}',
            path: {
                'id': id,
            },
        });
    }

}
