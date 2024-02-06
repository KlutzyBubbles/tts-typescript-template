import { Objects, Zones } from "../../utils/constants"

export function runGetChecks(): void {
    let object = getObjectFromGUID(Objects.square)
    let assetbundle = getObjectFromGUID(Objects.assetbundle)
    let bag = getObjectFromGUID(Objects.bag)
    let deck = getObjectFromGUID(Objects.deck)
    let dice = getObjectFromGUID(Objects.dice)
    let cBoard = getObjectFromGUID(Objects.customBoard)
    let cCard = getObjectFromGUID(Objects.customCard)
    let cDeck = getObjectFromGUID(Objects.customDeck)
    let cFigurine = getObjectFromGUID(Objects.customFigurine)
    let cToken = getObjectFromGUID(Objects.customToken)
    let hand = getObjectFromGUID(Zones.hand)
    if (object !== undefined
        && assetbundle !== undefined
        && bag !== undefined
        && deck !== undefined
        && hand !== undefined
        && dice !== undefined
        && cBoard !== undefined
        && cCard !== undefined
        && cDeck !== undefined
        && cFigurine !== undefined
        && cToken !== undefined) {
        print('Get functions')
        print(object.getAttachments())
        print(object.getColorTint())
        print(object.getCustomObject())
        let custom = assetbundle.getCustomObject()
        print(Object.keys(custom).join(','))
        print('cBoard')
        print(Object.keys(cBoard.getCustomObject()).join(','))
        print('cCard')
        print(Object.keys(cCard.getCustomObject()).join(','))
        print('cDeck')
        print(Object.keys(cDeck.getCustomObject()).join(','))
        print('cFigurine')
        print(Object.keys(cFigurine.getCustomObject()).join(','))
        print('cToken')
        print(Object.keys(cToken.getCustomObject()).join(','))
        print('----')
        print(object.getData())
        print(object.getDescription())
        print(object.getFogOfWarReveal())
        print(object.getGMNotes())
        print(object.getGUID())
        print('----')
        print(object.getJoints())
        //print(object.getJSON())
        // print(object.getJSON(false))
        print(object.getLock())
        print(object.getName())
        print('----')
        let bagObjects = bag.getObjects()
        let deckObjects = deck.getObjects()
        let handObjects = hand.getObjects()
        print(bagObjects)
        print(deckObjects)
        print(handObjects)
        print(Object.keys(bagObjects[1]).join(','))
        print(Object.keys(deckObjects[1]).join(','))
        print('object guid')
        print((handObjects[0] as any as GObject).getGUID())
        // print(object.getObjects()) // This syntax is correct but will error in game because square is not a container
        print('----')
        print(object.getQuantity())
        // print(object.getRotationValue()) // Looks fine but because there are no rotation values it throws error in game
        print(object.getRotationValues().length)
        print(object.getRotationValues())
        print(dice.getRotationValue())
        print(dice.getRotationValues().length)
        print(dice.getRotationValues())
        print('----')
        print(object.getSelectingPlayers())
        print(object.getStateId())
        print(object.getStates())
        print(object.getValue())
        print(object.getZones())
        print(object.isDestroyed())
    }
}