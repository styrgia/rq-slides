/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Author } from '../models/Author';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthorsService {

    /**
     * @returns Author Success
     * @throws ApiError
     */
    public static getApiV1Authors(): CancelablePromise<Array<Author>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Authors',
        });
    }

    /**
     * @returns Author Success
     * @throws ApiError
     */
    public static postApiV1Authors({
        requestBody,
    }: {
        requestBody?: Author,
    }): CancelablePromise<Author> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/Authors',
            body: requestBody,
            mediaType: 'application/json; v=1.0',
        });
    }

    /**
     * @returns Author Success
     * @throws ApiError
     */
    public static getApiV1AuthorsAuthorsBooks({
        idBook,
    }: {
        idBook: number,
    }): CancelablePromise<Array<Author>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Authors/authors/books/{idBook}',
            path: {
                'idBook': idBook,
            },
        });
    }

    /**
     * @returns Author Success
     * @throws ApiError
     */
    public static getApiV1Authors1({
        id,
    }: {
        id: number,
    }): CancelablePromise<Author> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Authors/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns Author Success
     * @throws ApiError
     */
    public static putApiV1Authors({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: Author,
    }): CancelablePromise<Author> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/Authors/{id}',
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
    public static deleteApiV1Authors({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/Authors/{id}',
            path: {
                'id': id,
            },
        });
    }

}
