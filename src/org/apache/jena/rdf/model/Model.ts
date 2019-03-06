import { RDFNode } from './RDFNode';
import { Property } from './Property';
import { Resource } from './Resource';
import { Literal } from './Literal';
import { AnonId } from './AnonId';
import { RDFList } from './RDFList';
import { Statement } from './Statement';
import { StmtIterator } from './StmtIterator';
import { ResIterator } from './ResIterator';
import { RDFDatatype } from '../../datatypes/RDFDatatype';
import { PrefixMapping } from '../../shared/PrefixMapping';

export interface Model
{

    abort(): Model;

    add(statements: Array<Statement>): Model;

    add(m: Model): Model;

    add(s: Statement): Model;

    add(statements: Statement[]): Model;

    add(iter: StmtIterator): Model;

    //begin(): Model;

    //calculateInTxn(action: Supplier<T>): <T> T;

    clearNsPrefixMap(): Model;

    close(): void;

    commit(): Model;

    contains(s: Resource, p: Property): boolean;

    contains(s: Resource, p: Property, o: RDFNode): boolean;

    contains(s: Statement): boolean;

    containsAll(model: Model): boolean;

    containsAll(iter: StmtIterator): boolean;

    containsAny(model: Model): boolean;

    containsAny(iter: StmtIterator): boolean;

    containsResource(r: RDFNode): boolean;

    createList(): RDFList;

    //createList(members: Iterator<? extends RDFNode>): RDFList;

    //createList(members: RDFNode... ): RDFList;

    createLiteral(v: string, wellFormed: boolean): Literal;

    createLiteral(v: string, language: string): Literal;

    createProperty(nameSpace: string, localName: string): Property;

    //createReifiedStatement(s: Statement): ReifiedStatement;

    //createReifiedStatement(uri: string, s: Statement): ReifiedStatement;

    createResource(): Resource;

    createResource(id: AnonId): Resource;

    createResource(uri: string): Resource;

    createStatement(s: Resource, p: Property, o: RDFNode): Statement;

    createTypedLiteral(value: Object): Literal;

    createTypedLiteral(value: Object, dtype: RDFDatatype): Literal;

    createTypedLiteral(lex: string, dtype: RDFDatatype): Literal;

    difference(model: Model): Model;

    equals(m: Object): boolean;

    //executeInTransaction(cmd: Command): Object;

    //executeInTxn(action: Runnable): void;

    getAnyReifiedStatement(s: Statement): Resource;

    //getLock(): Lock;

    getProperty(s: Resource, p: Property): Statement;

    getProperty(s: Resource, p: Property, lang: string): Statement;

    getProperty(nameSpace: string, localName: String): Property;

    getRequiredProperty(s: Resource, p: Property): Statement;

    getRequiredProperty(s: Resource, p: Property , lang: string): Statement;

    getResource(uri: string): Resource;

    independent(): boolean;

    intersection(model: Model): Model;

    isClosed(): boolean;

    isEmpty(): boolean;

    isIsomorphicWith(g: Model ): boolean;

    isReified(s: Statement): boolean;

    //listNameSpaces(): NsIterator;

    listObjects(): NodeIterator;

    listObjectsOfProperty(p: Property): NodeIterator;

    listObjectsOfProperty(s: Resource, p: Property): NodeIterator;

    //listReifiedStatements(): RSIterator;

    //listReifiedStatements(st: Statement): RSIterator;

    listResourcesWithProperty(p: Property): ResIterator;

    listResourcesWithProperty(p: Property, o: RDFNode): ResIterator;

    listStatements(): StmtIterator;

    listStatements(s: Resource, p: Property, o: RDFNode): StmtIterator;

    //listStatements(s: Selector): StmtIterator;

    listSubjects(): ResIterator;

    listSubjectsWithProperty(p: Property): ResIterator;

    listSubjectsWithProperty(p: Property, o: RDFNode): ResIterator;

    notifyEvent(e: Object): Model;

    //query(s: Selector): Model;

    //read(in: InputStream, base: string): Model;

    //read(in: InputStream, base: string, lang: string): Model;

    //read(reader: Reader, base: string): Model;

    //read(reader: Reader, base: string, lang: string): Model;

    read(url: string): Model;

    read(url: string, lang: string): Model;
    
    read(url: string, base: string, lang: string): Model;

    //register(listener: ModelChangedListener): Model;

    remove(statements: Array<Statement>): Model;

    remove(s: Statement): Model;

    remove(statements: Statement[]): Model;

    removeAll(): Model;

    removeAll(s: Resource, p: Property, r: RDFNode): Model;

    removeAllReifications(s: Statement): void;

    removeNsPrefix(prefix: string): Model;

    //removeReification(rs: ReifiedStatement): void;

    setNsPrefix(prefix: string, uri: string): Model;

    setNsPrefixes(map: Map<String,String>): Model;

    setNsPrefixes(other: PrefixMapping): Model;

    //size(): long;

    size(): number;

    supportsSetOperations(): boolean;

    supportsTransactions(): boolean;

    union(model: Model): Model;

    //unregister(listener: ModelChangedListener): Model;

    withDefaultMappings(map: PrefixMapping): Model;

    //write(out: OutputStream): Model;

    //write(out: OutputStream, lang: string): Model;

    //write(out: OutputStream, lang: string, base: string): Model;

    //write(writer: Writer): Model;

    //write(writer: Writer, lang: string): Model;

    //write(writer: Writer, lang: string, base: string): Model;

}