import { RDFNode } from './RDFNode';
import { Model } from './Model';
import { RDFDatatype } from '../../datatypes/RDFDatatype';

export interface Literal extends RDFNode
{

    equals(o: Object): boolean;

    getBoolean(): boolean;

    //getByte(): byte;

    //getChar(): char;

    getDatatype(): RDFDatatype;

    getDatatypeURI(): string;

    //getDouble(): double;

    //getFloat(): float;

    //getInt(): int;

    getNumber(): number;

    getLanguage(): string;

    getLexicalForm(): string;

    //getLong(): long;

    //getShort(): short;

    getString(): string;

    getValue(): Object;

    inModel(m: Model): Literal

    isWellFormedXML(): boolean;

    sameValueAs(other: Literal): boolean;

}