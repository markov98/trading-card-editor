export interface CardInfo {
    name: string,
    class: string,
    cost: number,
    battleStats: null | BattleStats
    description: string,
    imgUrl: string,
    backgroundColor: string,
    textColor: string
}
export interface BattleStats {
    attack: number,
    defense: number 
}