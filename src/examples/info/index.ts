export function runExamples(): void {
    print('Info examples')
    print(Info.complexity)
    print(Info.name)
    print(Info.number_of_players)
    print(Info.playing_time)
    print(Info.tags)
    print(Info.type)
    Info.complexity = "compleex"
    Info.name = "My name"
    print('1---')
    Info.number_of_players = [3, 5]
    Info.playing_time = [1, 10]
    Info.number_of_players = undefined
    Info.playing_time = undefined
    print('2--')
    Info.tags = ['tagone', 'tagtwo']
    Info.type = "category"
}
