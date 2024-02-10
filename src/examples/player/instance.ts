import { Objects } from "../../utils/constants"

export function runInstanceChecks(): void {
    print('Instance checks')
    let player = Player.White
    let unknown = Player.Green
    print(player.admin)
    print(player.blindfolded)
    print(player.color)
    print(player.host)
    print(player.lift_height)
    print('1--------')
    print(player.promoted)
    print(player.seated)
    print(player.steam_id)
    print(player.steam_name)
    print(player.team)
    print('2--------')
    print(unknown.admin)
    print(unknown.blindfolded)
    print(unknown.color)
    print(unknown.host)
    print(unknown.lift_height)
    print('3--------')
    print(unknown.promoted)
    print(unknown.seated)
    print(unknown.steam_id)
    print(unknown.steam_name)
    print(unknown.team)
    print('4--------')
    
    let object = getObjectFromGUID(Objects.square)
    if (object !== undefined) {
        print(player.attachCameraToObject({
            object: object
        }))
        print(player.attachCameraToObject({
            object: object,
            offset: Vector(0, 0, 0)
        }))
        print(player.broadcast('Hello there'))
        print(player.broadcast('Hello there', Color.Blue))
        print(Player.Blue.changeColor('Red'))
        print(Player.Red.changeColor('Blue'))
        print(player.copy([object]))
        print('5--------')
        print(player.getHandObjects().length)
        print(player.getHandObjects(1).length)
        print(player.getHandTransform())
        print(player.getHandTransform(1))
        print(player.lookAt({
            position: Vector(0, 0, 0)
        }))
        print(player.lookAt({
            position: Vector(0, 0, 0),
            pitch: 0,
            yaw: 0,
            distance: 40
        }))
        print('6--------')
        print(player.paste(Vector(0, 5, 0)))
        print(player.print('Hello white'))
        print(player.print('Hello white blue', Color.Blue))
        print(player.print('Hello white blue2', { r: 0, g: 0, b: 1 }))
        print(player.setCameraMode("ThirdPerson"))
        // These work, they just mess with the save file
        // print(player.setHandTransform({}))
        // print(player.setHandTransform({
        //     position: Vector(0, 0, 0),
        //     rotation: Vector(0, 0, 0),
        //     scale: Vector(1, 1, 1)
        // }, 1))
        print('7--------')
        print(player.setUITheme('button_normal #FFC0C0'))
        print(player.showInfoDialog('Dialog info'))
        print(player.showConfirmDialog('Dialog confirm', (color: ColorLiteral) => {
            print(`Confirm clicked by ${color}`)
        }))
        print(player.showInputDialog('Dialog input', 'default value', (text: string, color: ColorLiteral) => {
            print(`Input clicked by ${color}, ${text}`)
        }))
        print('8--------')
        print(player.showMemoDialog('Dialog memo', 'default value', (text: string, color: ColorLiteral) => {
            print(`Memo clicked by ${color}, ${text}`)
        }))
        print(player.showOptionsDialog('Dialog options', ['one', 'two', 'three'], 2, (text: string, index: number, color: ColorLiteral) => {
            print(`Ooptoin clicked by ${color}, ${text}, [${index}]`)
        }))
        print(player.showOptionsDialog('Dialog options', ['one', 'two', 'three'], 'three', (text: string, index: number, color: ColorLiteral) => {
            print(`Ooptoin clicked by ${color}, ${text}, [${index}]`)
        }))
        print(player.showColorDialog(Color.Blue, (color: Color, playerColor: ColorLiteral) => {
            print(`Confirm clicked by ${playerColor}, ${color}`)
        }))
        print(player.showColorDialog({ r: 0, g: 1, b: 0 }, (color: Color, playerColor: ColorLiteral) => {
            print(`Confirm clicked by ${playerColor}, ${color}`)
        }))
        print('9--------')



        
        print(unknown.attachCameraToObject({
            object: object
        }))
        print(unknown.attachCameraToObject({
            object: object,
            offset: Vector(0, 0, 0)
        }))
        print(unknown.broadcast('Hello there'))
        print(unknown.broadcast('Hello there', Color.Blue))
        print(unknown.copy([object]))
        print('10--------')
        print(unknown.getHandObjects().length)
        print(unknown.getHandObjects(1).length)
        print(unknown.getHandTransform())
        print(unknown.getHandTransform(1))
        print(unknown.lookAt({
            position: Vector(0, 0, 0)
        }))
        print(unknown.lookAt({
            position: Vector(0, 0, 0),
            pitch: 0,
            yaw: 0,
            distance: 40
        }))
        print('11--------')
        print(unknown.paste(Vector(0, 5, 0)))
        print(unknown.print('Hello white'))
        print(unknown.print('Hello white blue', Color.Blue))
        print(unknown.print('Hello white blue2', { r: 0, g: 0, b: 1 }))
        print(unknown.setCameraMode("ThirdPerson"))
        // These work, they just mess with the save file
        // print(unknown.setHandTransform({}))
        // print(unknown.setHandTransform({
        //     position: Vector(0, 0, 0),
        //     rotation: Vector(0, 0, 0),
        //     scale: Vector(1, 1, 1)
        // }, 1))
        print('12--------')
        print(unknown.setUITheme('button_normal #FFC0C0'))
        print(unknown.showInfoDialog('Dialog info'))
        print(unknown.showConfirmDialog('Dialog confirm', (color: ColorLiteral) => {
            print(`Confirm clicked by ${color}`)
        }))
        print(unknown.showInputDialog('Dialog input', 'default value', (text: string, color: ColorLiteral) => {
            print(`Input clicked by ${color}, ${text}`)
        }))
        print('13--------')
        print(unknown.showMemoDialog('Dialog memo', 'default value', (text: string, color: ColorLiteral) => {
            print(`Memo clicked by ${color}, ${text}`)
        }))
        print(unknown.showOptionsDialog('Dialog options', ['one', 'two', 'three'], 2, (text: string, index: number, color: ColorLiteral) => {
            print(`Ooptoin clicked by ${color}, ${text}, [${index}]`)
        }))
        print(unknown.showOptionsDialog('Dialog options', ['one', 'two', 'three'], 3, (text: string, index: number, color: ColorLiteral) => {
            print(`Ooptoin clicked by ${color}, ${text}, [${index}]`)
        }))
        print(unknown.showColorDialog(Color.Blue, (color: Color, playerColor: ColorLiteral) => {
            print(`Confirm clicked by ${playerColor}, ${color}`)
        }))
        print(unknown.showColorDialog({ r: 0, g: 1, b: 0 }, (color: Color, playerColor: ColorLiteral) => {
            print(`Confirm clicked by ${playerColor}, ${color}`)
        }))
        print('14--------')
    }
}