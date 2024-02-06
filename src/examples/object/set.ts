import { Objects, Zones } from "../../utils/constants"

export function runSetChecks(): void {
    let object = getObjectFromGUID(Objects.square)
    let assetbundle = getObjectFromGUID(Objects.assetbundle)
    let bag = getObjectFromGUID(Objects.bag)
    let deck = getObjectFromGUID(Objects.deck)
    let dice = getObjectFromGUID(Objects.dice)
    let cBoard = getObjectFromGUID(Objects.customBoard)
    let counter = getObjectFromGUID(Objects.counter)
    let book = getObjectFromGUID(Objects.pdf)
    if (object !== undefined
        && assetbundle !== undefined
        && bag !== undefined
        && deck !== undefined
        && book !== undefined
        && dice !== undefined
        && cBoard !== undefined
        && counter !== undefined) {
        print('Set functions')
        print(object.setColorTint('Blue'))
        print(object.setColorTint(Color(1, 1, 1)))
        print(object.setCustomObject({
            image: 'http://cloud-3.steamusercontent.com/ugc/2343629042972162793/4D920BC571EA8C9DBFD257E9AF838070F29841E0/'
        }))
        print(cBoard.setCustomObject({
            image: 'http://cloud-3.steamusercontent.com/ugc/2343629042972162793/4D920BC571EA8C9DBFD257E9AF838070F29841E0/'
        }))
        print(object.setDescription('descriptioned'))
        print(object.setFogOfWarReveal({}))
        print(object.setFogOfWarReveal({
            reveal: true,
            color: "Black",
            range: 50
        }))
        print(object.setGMNotes('GM Notes'))
        print(object.setLock(true))
        print(object.setName('new nameee'))
        print('----')
        print(object.setRotationValue('test'))
        print(object.setRotationValues([{
            value: 'actual',
            rotation: Vector(0, 180, 0)
        }]))
        print(dice.setRotationValue(4))
        print(dice.setRotationValues([{
            value: 1,
            rotation: Vector(-90, 0, 0)
        }, {
            value: 2,
            rotation: Vector(0, 0, 0)
        }, {
            value: 3,
            rotation: Vector(0, 0, -90)
        }, {
            value: 4,
            rotation: Vector(0, 0, 90)
        }, {
            value: 5,
            rotation: Vector(0, 0, 180)
        }, {
            value: 6,
            rotation: Vector(90, 0, 0)
        }]))
        print('----')
        print(object.setState(2))
        print(book.setState(2))
        print(object.setValue('test'))
        print(counter.setValue(55))
    }
}