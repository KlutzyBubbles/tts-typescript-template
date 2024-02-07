import { Objects } from "../../utils/constants"

export function runComponentChecks(): void {
    let object = getObjectFromGUID(Objects.square)
    let assetbundle = getObjectFromGUID(Objects.assetbundle)
    if (object !== undefined
        && assetbundle !== undefined) {
        print('Component functions')
        print(object.getChildren())
        print(object.getComponents())
        print(object.getComponentsInChildren())
        print(object.getChildren().length)
        print(object.getComponents()?.length)
        print(object.getComponentsInChildren()?.length)
        print(object.getComponents('noexistss'))
        print(object.getComponentsInChildren('noexistss'))
        print(object.getChild('noexistss'))
        print(object.getComponent('noexistss'))
        print('------')

        let children = assetbundle.getChildren()
        print(assetbundle.getChild(children[0].name))
        let components = assetbundle.getComponents()
        if (components !== undefined) {
            print(assetbundle.getComponents(components[0].name))
            let subComponents = assetbundle.getComponentsInChildren()
            if (subComponents !== undefined) {
                print(assetbundle.getComponentsInChildren(subComponents[0].name))
                print(assetbundle.getComponent(components[0].name))
                print(assetbundle.getComponentInChildren(subComponents[0].name))
            } else {
                print('subComponents undefined')
            }
        } else {
            print('components undefined')
        }
    }
}