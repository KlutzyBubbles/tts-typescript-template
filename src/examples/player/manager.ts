import { Objects } from "../../utils/constants"

export function runManagerChecks(): void {
    print('manager checks')
    print(Player.getAvailableColors())
    print(Player.getColors())
    print(Player.getPlayers())
    print(Player.getSpectators())
    print(tostring(Player.Action))
    log(Player.Action)
    print(Player.getAvailableColors().join(','))
    print(Player.getColors().join(','))
    print(Player.getPlayers()[0])
    print(Player.getSpectators()[0])
}