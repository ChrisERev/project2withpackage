import { LightningElement, api } from 'lwc';

import ImageTest from '@salesforce/resourceUrl/ImageTest';

export default class CarousalTest extends LightningElement {
    @api
    imgsrc=ImageTest;
    @api
    imgsrc2=ImageTest;
    @api
    imgsrc3=ImageTest;
    
    @api 
    url="https://www.google.com";
    @api
    url2="https://www.google.com";
    @api
    url3="https://www.google.com";

    @api
    description="slide description";
    @api
    description2="slide description";
    @api
    description3="slide description";

    @api
    altText="Alternative image text";
    @api
    altText2="Alternative image text";
    @api
    altText3="Alternative image text";

    @api
    header="Slide Header";
    @api
    header2="Slide Header";
    @api
    header3="Slide Header";
}