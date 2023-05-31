class component {
    constructor(public name?: string,
        public count?: string) { }
}

export class recipe {
    constructor(public _id?: number,
        public name?: string,
        public description?: string,
        public img?: string,
        public level?: string,
        public duration?: number,
        public numberOfDishes?: number,
        public Instructions?: string,
        public userName?: string,
        public components?: Array<component>) { }
}

