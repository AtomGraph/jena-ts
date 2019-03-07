import { RDFNode } from '../RDFNode';
import { Property } from '../Property';
import { Resource } from '../Resource';
import { Literal } from '../Literal';
import { AnonId } from '../AnonId';
import { RDFList } from '../RDFList';
import { Statement } from '../Statement';
import { StmtIterator } from '../StmtIterator';
import { ResIterator } from '../ResIterator';
import { RDFDatatype } from '../../../datatypes/RDFDatatype';
import { PrefixMapping } from '../../../shared/PrefixMapping';
import { Model } from '../Model';
import * as N3 from 'n3';

export class ModelImpl implements Model
{

    private store: N3.N3Store = N3.Store();

    constructor(store: N3.N3Store)
    {
        this.store = store;
    }

    add(statements: Array<Statement> | Model | Statement | StmtIterator): Model
    {
        return this;
    }

    clearNsPrefixMap(): Model
    {
        return this;
    }

    contains(s: Resource | Statement, p?: Property, o?: RDFNode): boolean
    {
        return true;
    }

    //contains(s: Statement): boolean
    //{
    //
    //}

    containsAll(stmts: Model | StmtIterator): boolean
    {
        return true;
    }

    //containsAll(iter: StmtIterator): boolean
    //{
    //
    //}

    containsAny(stmts: Model | StmtIterator): boolean
    {
        return true;
    }

    //containsAny(iter: StmtIterator): boolean
    //{
    //
    //}

    containsResource(r: RDFNode): boolean
    {
        return true;
    }

    createList(): RDFList
    {
        return null;
    }

    //createLiteral(v: string, wellFormed: boolean): Literal
    //{
    //
    //}

    createLiteral(v: string, language: string): Literal
    {
        return null;
    }

    createProperty(nameSpace: string, localName: string): Property
    {
        return null;
    }

    //createResource(): Resource
    //{
    //    return null;
    //}

    createResource(id?: AnonId | string): Resource
    {
        return null;
    }

    //createResource(uri: string): Resource
    //{
    //
    //}

    createStatement(s: Resource, p: Property, o: RDFNode): Statement
    {

    }

    //createTypedLiteral(value: Object): Literal
    //{
    //
    //}

    createTypedLiteral(value: Object | string, dtype?: RDFDatatype): Literal
    {

    }

    //createTypedLiteral(lex: string, dtype: RDFDatatype): Literal
    //{
    //
    //}

    difference(model: Model): Model
    {
        return null;
    }

    equals(m: Object): boolean
    {
        return true;
    }

    //getProperty(s: Resource, p: Property): Statement
    //{
    //
    //}

    getProperty(s: Resource, p: Property, lang?: string): Statement
    {
        return null;
    }

    //getProperty(nameSpace: string, localName: String): Property
    //{
    //
    //}

    //getRequiredProperty(s: Resource, p: Property): Statement
    //{
    //
    //}

    getRequiredProperty(s: Resource, p: Property , lang?: string): Statement
    {

    }

    getResource(uri: string): Resource
    {

    }

    independent(): boolean
    {

    }

    intersection(model: Model): Model
    {

    }

    isClosed(): boolean
    {

    }

    isEmpty(): boolean
    {

    }

    isIsomorphicWith(g: Model ): boolean
    {

    }

    listObjects(): NodeIterator
    {

    }

    //listObjectsOfProperty(p: Property): NodeIterator
    //{
    //
    //}

    listObjectsOfProperty(s: Resource, p?: Property): NodeIterator
    {
        
    }

    //listResourcesWithProperty(p: Property): ResIterator
    //{
    //
    //}

    listResourcesWithProperty(p: Property, o?: RDFNode): ResIterator
    {

    }

    //listStatements(): StmtIterator
    //{
    //
    //}

    listStatements(s?: Resource, p?: Property, o?: RDFNode): StmtIterator
    {

    }

    listSubjects(): ResIterator
    {

    }

    //listSubjectsWithProperty(p: Property): ResIterator
    //{
    //
    //}

    listSubjectsWithProperty(p: Property, o?: RDFNode): ResIterator
    {

    }

    //read(url: string): Model
    //{
    //
    //}

    //read(url: string, lang: string): Model
    //{
    //
    //}
    
    read(url?: string, base?: string, lang?: string): Model
    {

    }

    remove(statements: Array<Statement> | Statement | StmtIterator)
    {
        return this;
    }

    //remove(statements: Array<Statement>): Model
    //{
    //
    //}

    //remove(s: Statement): Model
    //{
    //
    //}

    //remove(statements: Statement[]): Model
    //{
    //
    //}

    //removeAll(): Model
    //{
    //
    //}

    removeAll(s?: Resource, p?: Property, r?: RDFNode): Model
    {

    }

    removeNsPrefix(prefix: string): Model
    {

    }

    setNsPrefix(prefix: string, uri: string): Model
    {

    }

    setNsPrefixes(map: Map<String,String> | PrefixMapping): Model
    {

    }

    //setNsPrefixes(other: PrefixMapping): Model
    //{
    //
    //}

    size(): number
    {

    }

    union(model: Model): Model
    {

    }

    withDefaultMappings(map: PrefixMapping): Model
    {

    }

    //write(out: OutputStream): Model
    //{
    //
    //}

}