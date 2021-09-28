export class DiscountCard{
    image:string;
    title:string;
    subtext:string;

    constructor({image, title, subtext} :
        {image:string, title:string, subtext:string}) {
            this.image = image;
            this.title = title;
            this.subtext = subtext;
        }
}