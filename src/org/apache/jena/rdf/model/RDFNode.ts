import { Model } from './Model';
import { Resource } from './Resource';
import { Literal } from './Literal';

export interface RDFNode
{

    //as(view: Class<T>): <T extends RDFNode> T;

    asLiteral(): Literal;

    asResource(): Resource;

    getModel(): Model;

    inModel(m: Model): RDFNode;

    isAnon(): boolean;

    isLiteral(): boolean;

    isResource(): boolean;

    isURIResource(): boolean;

    toString(): string;

    //visitWith(rv: RDFVisitor): Object;

}