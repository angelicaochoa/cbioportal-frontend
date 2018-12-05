import * as React from 'react';
import DefaultTooltip from 'shared/components/defaultTooltip/DefaultTooltip';
import {Mutation} from "shared/api/generated/CBioPortalAPI";
import styles from "./mutationType.module.scss";
import getCanonicalMutationType from "shared/lib/getCanonicalMutationType";
import {floatValueIsNA} from "shared/lib/NumberUtils";

interface IMutationTypeFormat {
    label?: string;
    longName?: string;
    className: string;
    mainType: string;
    priority?: number;
}

/**
 * @author Avery Wang
 */
export default class ClonalColumnFormatter {
    /* Determines the display value by using the impact field.
     *
     * @param data  column formatter data
     * @returns {string}    "Clonal" text value
     */
    public static getDisplayValue(data:Mutation[]):string {
        return ClonalColumnFormatter.getClonalValue(data);
    }

    public static getTooltipValue(data:Mutation[]):string {
        const ccfMCopiesValue = ClonalColumnFormatter.getCcfMCopiesValue(data);
        if (floatValueIsNA(ccfMCopiesValue)) {
            return "FACETS data not available";
        } 
        return "CCF: " + ClonalColumnFormatter.getTextValue(ccfMCopiesValue);
    } 
            
    public static getCcfMCopiesUpperValue(data:Mutation[]):number {
        const ccfMCopiesUpperValue = data[0].ccfMCopiesUpper;
        return ccfMCopiesUpperValue;
    }

    public static getCcfMCopiesValue(data:Mutation[]):number {
        const ccfMCopiesValue = data[0].ccfMCopies;
        return ccfMCopiesValue;
    }

    public static getClonalValue(data:Mutation[]):string {
        let textValue:string = "";
        const ccfMCopiesUpperValue = ClonalColumnFormatter.getCcfMCopiesUpperValue(data);
        if (floatValueIsNA(ccfMCopiesUpperValue)) {
            textValue = "NA";
        } else if (ccfMCopiesUpperValue === 1) {
            textValue = "yes";
        } else {
            textValue = "no";
        }
        return textValue;
    }

    public static getTextValue(data:number):string {
        let textValue:string = "";
        if (data) {
            textValue = data.toString();
        }
        return textValue;
    }

    public static renderFunction(data:Mutation[]) {
        // use text for all purposes (display, sort, filter)
        const text:string = ClonalColumnFormatter.getDisplayValue(data);
        let content = <span>{text}</span>;
        return content;
    }
}

