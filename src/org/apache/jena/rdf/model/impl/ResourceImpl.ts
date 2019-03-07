import { RDFNodeImpl } from './RDFNodeImpl';
import { RDFNode } from '../RDFNode';
import { Property } from '../Property';
import { Resource } from '../Resource';
import { Literal } from '../Literal';
import { AnonId } from '../AnonId';
import { Model } from '../Model';
import { Statement } from '../Statement';
import { StmtIterator } from '../StmtIterator';
import { RDFDatatype } from '../../../datatypes/RDFDatatype';

export class ResourceImpl extends RDFNodeImpl implements Resource
{

    addLiteral(p: Property, o: boolean | Literal | number | RDFNode): Resource
    {

    }

    //addLiteral(p: Property, o: Literal): Resource;

    //addLiteral(p: Property, o: number): Resource;

    //addLiteral(p: Property, o: Object): Resource;

    //addProperty(p: Property, o: RDFNode): Resource;

    //addProperty(p: Property, o: string): Resource;

    addProperty(p: Property, o: RDFNode | string, modifier?: RDFDatatype | string): Resource
    {

    }

    //addProperty(p: Property, o: string, l: string): Resource
    //{
    //
    //}

    equals(o: Object): boolean
    {

    }

    getId(): AnonId
    {

    }

    getLocalName(): string
    {
        return "aaa";
    }

    getNameSpace(): string
    {

    }

    //getProperty(p: Property): Statement
    //{
    //
    //}

    getProperty(p: Property, lang?: string): Statement
    {

    }

    getPropertyResourceValue(p: Property): Resource
    {

    }

    //getRequiredProperty(p: Property): Statement;

    getRequiredProperty(p: Property, lang?: string): Statement
    {

    }

    getURI(): string
    {

    }

    hasLiteral(p: Property, o: boolean | number): boolean
    {

    }

    //hasLiteral(p: Property, o: number): boolean;

    //hasLiteral(p: Property, o: Object): boolean;

    //hasProperty(p: Property): boolean;

    hasProperty(p: Property, o?: RDFNode | string, l?: string): boolean
    {

    }

    //hasProperty(p: Property, o: string): boolean;

    //hasProperty(p: Property, o: string, l: string): boolean;

    hasURI(uri: string): boolean
    {

    }

    inModel(m: Model): Resource
    {

    }

    //listProperties(): StmtIterator
    //{
    //
    //}

    listProperties(p?: Property, lang?: string): StmtIterator
    {

    }

    //listProperties(p: Property, lang: string): StmtIterator;

    removeAll(p: Property): Resource
    {

    }

    removeProperties(): Resource
    {

    }

    tostring(): string
    {

    }

}