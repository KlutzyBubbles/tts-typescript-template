import { Objects, Zones } from "../../utils/constants"

export function runBehaviourChecks(): void {
    ObjectTypeFunctions.assetBundle()
    ObjectTypeFunctions.book()
    ObjectTypeFunctions.browser()
    ObjectTypeFunctions.clock()
    ObjectTypeFunctions.counter()
    ObjectTypeFunctions.layoutZone()
    ObjectTypeFunctions.rpgFigurine()
    ObjectTypeFunctions.textTool()
    ObjectTypeFunctions.container()
}

class ObjectTypeFunctions {

    public static container(): void {
        let object = getObjectFromGUID(Objects.bag)
        if (object !== undefined) {
            print('Container')
            if (object.Container === undefined) {
                print('There is no contianer property present :/')
            } else {
                print(object.Container.search('White'))
                print(object.Container.search('White', 1))
            }
        }
    }

    public static assetBundle(): void {
        let object = getObjectFromGUID(Objects.assetbundle)
        if (object !== undefined) {
            print('AssetBundle')
            if (object.AssetBundle === undefined) {
                print('There is no asset bundle property present :/')
            } else {
                print(object.AssetBundle.getLoopingEffectIndex())
                print(object.AssetBundle.getLoopingEffects())
                print(object.AssetBundle.getTriggerEffects())
                print(object.AssetBundle.playLoopingEffect(0))
                print(object.AssetBundle.playTriggerEffect(0))
            }
        }
    }

    public static book(): void {
        let object = getObjectFromGUID(Objects.pdf)
        if (object !== undefined) {
            print('Book')
            if (object.Book === undefined) {
                print('There is no book property present :/')
            } else {
                print(object.Book.page_offset)
                print(object.Book.clearHighlight())
                print(object.Book.getPage(true))
                print(object.Book.getPage())
                print(object.Book.setHighlight(10, 10, 50, 50))
                print(object.Book.setPage(2, true))
                print(object.Book.setPage(3))
            }
        }
    }

    public static browser(): void {
        let object = getObjectFromGUID(Objects.tablet)
        if (object !== undefined) {
            print('Browser')
            if (object.Browser === undefined) {
                print('There is no browser property present :/')
            } else {
                print(object.Browser.url)
                print(object.Browser.pixel_width)
                object.Browser.url = 'https://github.com'
            }
        }
    }

    public static clock(): void {
        let object = getObjectFromGUID(Objects.clock)
        if (object !== undefined) {
            print('Clock')
            if (object.Clock === undefined) {
                print('There is no clock property present :/')
            } else {
                print(object.Clock.paused)
                print(object.Clock.getValue())
                print(object.Clock.startStopwatch())
                print(object.Clock.pauseStart())
                print(object.Clock.setValue(10000))
                print(object.Clock.pauseStart())
                print(object.Clock.showCurrentTime())
            }
        }
    }

    public static counter(): void {
        let object = getObjectFromGUID(Objects.counter)
        if (object !== undefined) {
            print('Counter')
            if (object.Counter === undefined) {
                print('There is no counter property present :/')
            } else {
                print(object.Counter.setValue(69))
                print(object.Counter.getValue())
                print(object.Counter.increment())
                print(object.Counter.decrement())
                print(object.Counter.clear())
            }
        }
    }

    public static layoutZone(): void {
        let object = getObjectFromGUID(Zones.layout)
        if (object !== undefined) {
            print('Layout Zone')
            if (object.LayoutZone === undefined) {
                print('There is no layoutZone property present :/')
            } else {
                let options = object.LayoutZone.getOptions()
                print(options)
                print(object.LayoutZone.layout())
                print(object.LayoutZone.setOptions({}))
                print(object.LayoutZone.setOptions(options))
            }
        }
    }

    public static rpgFigurine(): void {
        let object = getObjectFromGUID(Objects.rpg)
        if (object !== undefined) {
            print('RPG Figurine')
            if (object.RPGFigurine === undefined) {
                print('There is no rpgFigurine property present :/')
            } else {
                object.RPGFigurine.onAttack = (hitObjects: GObject[]) => {
                    print(`figurine attacked ${hitObjects.length} objects`)
                }
                object.RPGFigurine.onHit = (attacker: GObject) => {
                    print(`figurine attacked by ${attacker.guid}`)
                }
                print(object.RPGFigurine.attack())
                print(object.RPGFigurine.changeMode())
                print(object.RPGFigurine.die())
            }
        }
    }

    public static textTool(): void {
        spawnObject({
            type: '3DText',
            position: Vector(0, 5, 0),
            rotation: Vector(0, 0, 0),
            scale: Vector(1, 1, 1),
            sound: true,
            snap_to_grid: false,
            callback_function: (object: GObject) => {
                print('TextTool')
                if (object.TextTool === undefined) {
                    print('There is no textTool property present :/')
                } else {
                    print(object.TextTool.getFontColor())
                    print(object.TextTool.getFontSize())
                    print(object.TextTool.getValue())
                    print(object.TextTool.setFontColor('Blue'))
                    print(object.TextTool.setFontColor(Color(0.5, 0, 1)))
                    print(object.TextTool.setFontColor([1, 1, 1]))
                    print(object.TextTool.setFontSize(5))
                    print(object.TextTool.setValue('I am some text'))
                }
            }
        })
    }

}