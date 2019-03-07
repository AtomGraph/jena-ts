import { RDFNode } from './RDFNode';
import { Property } from './Property';
import { Literal } from './Literal';
import { AnonId } from './AnonId';
import { Model } from './Model';
import { Statement } from './Statement';
import { ResIterator } from './ResIterator';
import { StmtIterator } from './StmtIterator';
import { RDFDatatype } from '../../datatypes/RDFDatatype';

export interface Resource extends RDFNode
{

    //abort(): Resource;

    addLiteral(p: Property, o: boolean): Resource;

    //addLiteral(p: Property, o: char): Resource;

    //addLiteral(value: Property, d: double): Resource;

    
    //addLiteral(value: Property, d: float): Resource;
    addLiteral(p: Property, o: Literal): Resource;

    //addLiteral(p: Property, o: long): Resource;

    addLiteral(p: Property, o: number): Resource;

    //addLiteral(p: Property, o: Object): Resource;

    addProperty(p: Property, o: RDFNode): Resource;

    addProperty(p: Property, o: string): Resource;

    addProperty(p: Property, lexicalForm: string, datatype: RDFDatatype): Resource;

    addProperty(p: Property, o: string, l: string): Resource;

    //begin(): Resource;

    //commit(): Resource;

    equals(o: Object): boolean;

    getId(): AnonId;

    getLocalName(): string;

    getNameSpace(): string;

    getProperty(p: Property): Statement;

    getProperty(p: Property, lang: string): Statement;

    getPropertyResourceValue(p: Property): Resource;

    getRequiredProperty(p: Property): Statement;

    getRequiredProperty(p: Property, lang: string): Statement;

    getURI(): string;

    hasLiteral(p: Property, o: boolean): boolean;

    //hasLiteral(p: Property, o: char): boolean;

    //hasLiteral(p: Property, o: double): boolean;

    //hasLiteral(p: Property, o: float): boolean;

    //hasLiteral(p: Property, o: long): boolean;

    hasLiteral(p: Property, o: number): boolean;

    hasLiteral(p: Property, o: Object): boolean;

    hasProperty(p: Property): boolean;

    hasProperty(p: Property, o: RDFNode): boolean;

    hasProperty(p: Property, o: string): boolean;

    hasProperty(p: Property, o: string, l: string): boolean;

    hasURI(uri: string): boolean;

    inModel(m: Model): Resource;

    listProperties(): StmtIterator;

    listProperties(p: Property): StmtIterator;

    listProperties(p: Property, lang: string): StmtIterator;

    removeAll(p: Property): Resource;

    removeProperties(): Resource;

    tostring(): string;

}
