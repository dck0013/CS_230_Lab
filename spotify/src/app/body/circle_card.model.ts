export class CircleCard{
    image:string;
    title:string;

    constructor({image, title} :
        {image:string, title:string}) {
            this.image = image;
            this.title = title;
        }
}