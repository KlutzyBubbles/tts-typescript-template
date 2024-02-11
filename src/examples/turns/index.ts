export function runExamples(): void {
    print('Turn examples')
    print(Turns.enable)
    print(Turns.type)
    print(Turns.order)
    print(Turns.reverse_order)
    print(Turns.skip_empty_hands)
    print(Turns.disable_interactations)
    print('1-----')
    print(Turns.pass_turns)
    print(Turns.turn_color)
    Turns.enable = true
    Turns.type = 2
    Turns.type = TurnOrderType.Auto
    Turns.order = ['White', 'Blue', 'Green']
    Turns.reverse_order = true
    Turns.skip_empty_hands = true
    Turns.disable_interactations = false
    Turns.pass_turns = true
    Turns.turn_color = 'White'
    print(Turns.getNextTurnColor())
    print(Turns.getPreviousTurnColor())
    print('2-----')
}
