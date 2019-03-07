import { RDFNode } from '../RDFNode';
import { Resource } from '../Resource';
import { Property } from '../Property';
import { Literal } from '../Literal';
import { RDFList } from '../RDFList';
import { Model } from '../Model';
import { Statement } from '../Statement';
import { ModelImpl } from './ModelImpl';

export class StatementImpl implements Statement
{

    readonly model: ModelImpl;
    protected subject: Resource;
    protected predicate: Property;
    protected object: RDFNode;

    constructor(subject: Resource, predicate: Property, object: RDFNode, model: ModelImpl)
    {
        this.subject = subject;
        this.predicate = predicate;
        this.object = object;
        this.model = model;
    }

    changeLiteralObject(o: boolean | number): Statement
    {

    }

    changeObject(o: RDFNode | string): Statement;

    //changeObject(o: string): Statement;

    changeObject(o: string, l?: string): Statement
    {

    }

    equals(o: Object): boolean
    {

    }

    getBoolean(): boolean
    {
        return this.getLiteral().getBoolean();
    }

    getNumber(): number
    {
        return this.getLiteral().getNumber();
    }

    getLanguage(): string
    {
        return this.getLiteral().getLanguage();
    }

    getList(): RDFList
    {

    }

    getLiteral(): Literal
    {

    }

    getModel(): Model
    {
        return this.getModel();
    }

    getObject(): RDFNode
    {
        return this.object;
    }

    getPredicate(): Property
    {
        return this.predicate;
    }

    getProperty(p?: Property): Statement
    {

    }

    getResource(): Resource
    {

    }

    getStatementProperty(p: Property): Statement
    {

    }

    getString(): string
    {

    }

    getSubject(): Resource
    {
        return this.subject;
    }

    hasWellFormedXML(): boolean
    {

    }

    remove(): Statement
    {

    }

}