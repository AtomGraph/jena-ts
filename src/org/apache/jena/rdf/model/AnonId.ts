export class AnonId
{
    
    readonly blankNodeId: string;

    constructor()

    //constructor AnonId(id: BlankNodeId)

    constructor(idStr: string)

    constructor(idStr: string = 'whateverest')
    {
        this.blankNodeId = idStr;
    }

    static create(id?: string): AnonId
    {
        if (id === undefined) return new AnonId();
        return new AnonId(id);
    }

    equals(obj: Object): boolean
    {
        if (this === obj) return true;
        if (obj === null) return false;
        if (!(obj instanceof AnonId)) return false;
        let other: AnonId = <AnonId>obj;
        if (this.blankNodeId === null)
        {
            if (other.blankNodeId !== null)
                return false;
        }
        else if (this.blankNodeId !== other.blankNodeId)
            return false;
        return true;
    }

    //getBlankNodeId(): BlankNodeId;

    getLabelString(): string
    {
        return this.blankNodeId;
    }
    
    //hashCode(): number
    
    toString(): string
    {
        return this.blankNodeId;
    }

}