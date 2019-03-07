import { RDFDatatype } from '../datatypes/RDFDatatype';

export class NodeFactory
{

    static createAnon(): Node
    {

    }

    static createBlankNode(id: BlankNodeId | string): Node
    {

    }

    //static createBlankNode(str: ): Node
    //{
    //
    //}

    //static createLiteral(lit: LiteralLabel | string): Node
    //{
    //
    //}

    //static createLiteral(value: ): Node
    //{
    //
    //}

    //static createLiteral(lex: string, dtype: RDFDatatype): Node
    //{
    //
    //}

    //static createLiteral(lex: string, lang: string): Node
    //{
    //
    //}

    static createLiteral(lex: string, lang: string, modifier?: boolean | RDFDatatype): Node // lex: LiteralLabel | string
    {

    }

    //static createLiteral(lex: string, lang: string, dtype: ): Node

    static createLiteralByValue(value: Object, dtype: RDFDatatype, lang?: string): Node
    {

    }

    //static createLiteralByValue(value: Object, lang: string, dtype: RDFDatatype): Node
    //{
    //
    //}

    static createURI(uri: string): Node
    {

    }

    static createVariable(name: string): Node
    {

    }

    static getType(s: string): RDFDatatype
    {

    }

}