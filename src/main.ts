
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UesrInterface{
    id: ID;
    name: String
    surname:string
}

const PopularTags: PopularTag[] = ['dragon','coffee']

// const dragonsTag: MaybePopularTag  = null;
const dragonsTag: MaybePopularTag  = "dragon";


let username: string = "alex";

let pageName: string | number = "1";

let errorMessage: string | null = null;     //ex- Get Data From DB.. First its null

let user:UesrInterface | null;

let someProp: string | number | null | undefined | string[] | object

