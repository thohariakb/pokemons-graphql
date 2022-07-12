
export type PokemonTypes =
    | 'normal'
    | 'fire'
    | 'water'
    | 'electric'
    | 'grass'
    | 'ice'
    | 'ground'
    | 'flying'
    | 'ghost'
    | 'rock'
    | 'fighting'
    | 'poison'
    | 'psychic'
    | 'bug'
    | 'dark'
    | 'steel'
    | 'dragon'
    | 'fairy'

export type PokemonInformationType = {
    id: number
    height: number
    wight: number
    abilities: string[]
    types: PokemonTypes[]
}

export const PokemonInformation_data_init: PokemonInformationType = {
    id: 0,
    height: 0,
    wight: 0,
    abilities: [""],
    types: ['normal'],
}