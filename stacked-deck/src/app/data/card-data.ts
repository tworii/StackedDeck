export class CardData {
    name:string;
    region:string;
    cardCode:string;
    type:string;
    imageURL:string;
	rarity:string;

	constructor(objectModel:{}) {
		this.name = objectModel['name'];
		this.region = objectModel['region'];
		this.cardCode = objectModel['cardCode'];
		this.type = objectModel['type'];
		this.imageURL = objectModel['assets'][0]['gameAbsolutePath'];
		this.rarity = objectModel['rarity'];
	}
}
