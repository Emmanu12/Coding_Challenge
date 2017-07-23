export class Topic{
    public title: string;
    public description: string;
    public upvote: number;
    public downvote: number;

    constructor(title: string, desc: string, upvote: number, downvote: number){
        this.title = title;
        this.description = desc;
        this.upvote=upvote;
        this.downvote=downvote;
    }

}