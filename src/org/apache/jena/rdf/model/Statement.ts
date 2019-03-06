import { RDFNode } from './RDFNode';
import { Resource } from './Resource';
import { Property } from './Property';
import { Literal } from './Literal';
import { RDFList } from './RDFList';
import { Model } from './Model';

export interface Statement
{

    changeLiteralObject(o: boolean): Statement;

    //changeLiteralObject(o: char): Statement;

    //changeLiteralObject(o: double): Statement;

    //changeLiteralObject(o: float): Statement;

    //changeLiteralObject(o: int): Statement;

    //changeLiteralObject(o: long): Statement;

    changeObject(o: RDFNode): Statement;

    changeObject(o: string): Statement;

    changeObject(o: string , wellFormed: boolean): Statement;

    changeObject(o: string, l: string): Statement;

    changeObject(o: string, l: string, wellFormed: boolean): Statement;

    //createReifiedStatement(): ReifiedStatement;

    //createReifiedStatement(uri: string): ReifiedStatement;

    equals(o: Object): boolean;

    //getAlt(): Alt;

    //getBag(): Bag;

    getBoolean(): boolean;

    getNumber(): number;

    //getByte(): byte;

    //getChar(): char;

    //getDouble(): double;

    //getFloat(): float;

    //getInt(): int;

    getLanguage(): string;

    getList(): RDFList;

    getLiteral(): Literal;

    //getLong(): long;

    getModel(): Model;

    getObject(): RDFNode;

    getPredicate(): Property;

    getProperty(p: Property): Statement;

    getResource(): Resource;

    //getResource(f: ResourceF): Resource;

    //getSeq(): Seq;

    //getShort(): short;

    getStatementProperty(p: Property): Statement;

    getString(): string;

    getSubject(): Resource;

    //hashCode(): int;

    hasWellFormedXML(): boolean;

    isReified(): boolean;

    //listReifiedStatements(): RSIterator;

    remove(): Statement;

    removeReification(): void;

}