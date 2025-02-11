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
/**
 * Findings by Issue (default view)
 * @export
 * @interface FindingsIssue
 */
export interface FindingsIssue {
    /**
     * Issue ID
     * @type {string}
     * @memberof FindingsIssue
     */
    issueId?: string;
    /**
     * Max score for the issue among the affected assets
     * @type {number}
     * @memberof FindingsIssue
     */
    maxScore?: number;
    /**
     * Number of affected resources by the issue
     * @type {number}
     * @memberof FindingsIssue
     */
    resourcesCount?: number;
    /**
     * Issue summary
     * @type {string}
     * @memberof FindingsIssue
     */
    summary?: string;
    /**
     * Number of targets affected by the issue
     * @type {number}
     * @memberof FindingsIssue
     */
    targetsCount?: number;
}

export function FindingsIssueFromJSON(json: any): FindingsIssue {
    return FindingsIssueFromJSONTyped(json, false);
}

export function FindingsIssueFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindingsIssue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'issueId': !exists(json, 'issue_id') ? undefined : json['issue_id'],
        'maxScore': !exists(json, 'max_score') ? undefined : json['max_score'],
        'resourcesCount': !exists(json, 'resources_count') ? undefined : json['resources_count'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'targetsCount': !exists(json, 'targets_count') ? undefined : json['targets_count'],
    };
}

export function FindingsIssueToJSON(value?: FindingsIssue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'issue_id': value.issueId,
        'max_score': value.maxScore,
        'resources_count': value.resourcesCount,
        'summary': value.summary,
        'targets_count': value.targetsCount,
    };
}


