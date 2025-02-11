/* tslint:disable */
/* eslint-disable */
/**
 * Vulcan API
 * Public API for Vulcan Vulnerability Scan Engine
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AssetPayload,
    AssetPayloadFromJSON,
    AssetPayloadFromJSONTyped,
    AssetPayloadToJSON,
} from './';

/**
 * 
 * @export
 * @interface CreateAssetPayload
 */
export interface CreateAssetPayload {
    /**
     * 
     * @type {object}
     * @memberof CreateAssetPayload
     */
    annotations?: object;
    /**
     * 
     * @type {Array<AssetPayload>}
     * @memberof CreateAssetPayload
     */
    assets: Array<AssetPayload>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateAssetPayload
     */
    groups?: Array<string>;
}

export function CreateAssetPayloadFromJSON(json: any): CreateAssetPayload {
    return CreateAssetPayloadFromJSONTyped(json, false);
}

export function CreateAssetPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAssetPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'annotations': !exists(json, 'annotations') ? undefined : json['annotations'],
        'assets': ((json['assets'] as Array<any>).map(AssetPayloadFromJSON)),
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
    };
}

export function CreateAssetPayloadToJSON(value?: CreateAssetPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'annotations': value.annotations,
        'assets': ((value.assets as Array<any>).map(AssetPayloadToJSON)),
        'groups': value.groups,
    };
}


