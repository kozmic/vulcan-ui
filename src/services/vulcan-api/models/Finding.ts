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
    Attachment,
    AttachmentFromJSON,
    AttachmentFromJSONTyped,
    AttachmentToJSON,
    Issue,
    IssueFromJSON,
    IssueFromJSONTyped,
    IssueToJSON,
    Resource,
    ResourceFromJSON,
    ResourceFromJSONTyped,
    ResourceToJSON,
    Source,
    SourceFromJSON,
    SourceFromJSONTyped,
    SourceToJSON,
    Target,
    TargetFromJSON,
    TargetFromJSONTyped,
    TargetToJSON,
} from './';

/**
 * Finding (default view)
 * @export
 * @interface Finding
 */
export interface Finding {
    /**
     * Affected Resource
     * @type {string}
     * @memberof Finding
     */
    affectedResource?: string;
    /**
     * Attachments
     * @type {Array<Attachment>}
     * @memberof Finding
     */
    attachments?: Array<Attachment>;
    /**
     * Current exposure (hours). Only for OPEN findings
     * @type {number}
     * @memberof Finding
     */
    currentExposure?: number;
    /**
     * Details
     * @type {string}
     * @memberof Finding
     */
    details?: string;
    /**
     * Finding ID
     * @type {string}
     * @memberof Finding
     */
    id?: string;
    /**
     * Impact details
     * @type {string}
     * @memberof Finding
     */
    impactDetails?: string;
    /**
     * 
     * @type {Issue}
     * @memberof Finding
     */
    issue?: Issue;
    /**
     * Resources
     * @type {Array<Resource>}
     * @memberof Finding
     */
    resources?: Array<Resource>;
    /**
     * Score
     * @type {number}
     * @memberof Finding
     */
    score?: number;
    /**
     * 
     * @type {Source}
     * @memberof Finding
     */
    source?: Source;
    /**
     * Status
     * @type {string}
     * @memberof Finding
     */
    status?: string;
    /**
     * 
     * @type {Target}
     * @memberof Finding
     */
    target?: Target;
    /**
     * Total exposure (hours)
     * @type {number}
     * @memberof Finding
     */
    totalExposure?: number;
}

export function FindingFromJSON(json: any): Finding {
    return FindingFromJSONTyped(json, false);
}

export function FindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Finding {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'affectedResource': !exists(json, 'affected_resource') ? undefined : json['affected_resource'],
        'attachments': !exists(json, 'attachments') ? undefined : ((json['attachments'] as Array<any>).map(AttachmentFromJSON)),
        'currentExposure': !exists(json, 'current_exposure') ? undefined : json['current_exposure'],
        'details': !exists(json, 'details') ? undefined : json['details'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'impactDetails': !exists(json, 'impact_details') ? undefined : json['impact_details'],
        'issue': !exists(json, 'issue') ? undefined : IssueFromJSON(json['issue']),
        'resources': !exists(json, 'resources') ? undefined : ((json['resources'] as Array<any>).map(ResourceFromJSON)),
        'score': !exists(json, 'score') ? undefined : json['score'],
        'source': !exists(json, 'source') ? undefined : SourceFromJSON(json['source']),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'target': !exists(json, 'target') ? undefined : TargetFromJSON(json['target']),
        'totalExposure': !exists(json, 'total_exposure') ? undefined : json['total_exposure'],
    };
}

export function FindingToJSON(value?: Finding | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'affected_resource': value.affectedResource,
        'attachments': value.attachments === undefined ? undefined : ((value.attachments as Array<any>).map(AttachmentToJSON)),
        'current_exposure': value.currentExposure,
        'details': value.details,
        'id': value.id,
        'impact_details': value.impactDetails,
        'issue': IssueToJSON(value.issue),
        'resources': value.resources === undefined ? undefined : ((value.resources as Array<any>).map(ResourceToJSON)),
        'score': value.score,
        'source': SourceToJSON(value.source),
        'status': value.status,
        'target': TargetToJSON(value.target),
        'total_exposure': value.totalExposure,
    };
}


