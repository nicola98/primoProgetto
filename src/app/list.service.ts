import { personaggi } from "./personaggi";

export class ListService{
    getCharactersList(): personaggi[]{
        let items: personaggi[]=[];
        items.push(new personaggi());
        items.push(new personaggi("manga"));
        items.push(new personaggi("one piece", "rufy"));
        items.push(new personaggi("toriko", "death note", 3));
        return items;
    }
}