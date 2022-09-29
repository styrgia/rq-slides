/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoverPhoto } from '../models/CoverPhoto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CoverPhotosService {

    /**
     * @returns CoverPhoto Success
     * @throws ApiError
     */
    public static getApiV1CoverPhotos(): CancelablePromise<Array<CoverPhoto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/CoverPhotos',
        });
    }

    /**
     * @returns CoverPhoto Success
     * @throws ApiError
     */
    public static postApiV1CoverPhotos({
        requestBody,
    }: {
        requestBody?: CoverPhoto,
    }): CancelablePromise<CoverPhoto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/CoverPhotos',
            body: requestBody,
            mediaType: 'application/json; v=1.0',
        });
    }

    /**
     * @returns CoverPhoto Success
     * @throws ApiError
     */
    public static getApiV1CoverPhotosBooksCovers({
        idBook,
    }: {
        idBook: number,
    }): CancelablePromise<Array<CoverPhoto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/CoverPhotos/books/covers/{idBook}',
            path: {
                'idBook': idBook,
            },
        });
    }

    /**
     * @returns CoverPhoto Success
     * @throws ApiError
     */
    public static getApiV1CoverPhotos1({
        id,
    }: {
        id: number,
    }): CancelablePromise<CoverPhoto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/CoverPhotos/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns CoverPhoto Success
     * @throws ApiError
     */
    public static putApiV1CoverPhotos({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: CoverPhoto,
    }): CancelablePromise<CoverPhoto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/CoverPhotos/{id}',
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
    public static deleteApiV1CoverPhotos({
        id,
    }: {
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/CoverPhotos/{id}',
            path: {
                'id': id,
            },
        });
    }

}
