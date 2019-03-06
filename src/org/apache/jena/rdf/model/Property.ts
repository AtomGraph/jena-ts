import { Resource } from './Resource';
import { Model } from './Model';

export interface Property extends Resource
{

    getLocalName(): string;

    getNameSpace(): string;

    //getOrdinal(): int;

    inModel(m: Model): Property;

    isProperty(): boolean;

}