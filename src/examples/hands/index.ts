export function runExamples(): void {
    print('Hands examples')
    print(Hands.enable)
    print(Hands.disable_unused)
    print(Hands.hiding)
    print(Hands.getHands())
    Hands.enable = true
    Hands.disable_unused = true
    Hands.hiding = 3
    Hands.hiding = HidingState.Default
}
