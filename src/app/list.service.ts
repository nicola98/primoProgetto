import { personaggi } from "./personaggi";

export class ListService{

    private items: personaggi[]=[
        new personaggi(1),
        new personaggi(2,"manga"),
        new personaggi(3,"one piece", "rufy"),
        new personaggi(4,"toriko", "death note", 3)
    ];

    getCharactersList(): personaggi[]{
        return this.items;
    }

    getCharacterById(id: number): personaggi
    {
        for(let pinco of this.items)
            if (pinco.id==id)
                return pinco;
        return null;
    }
}