import { Objects } from "../../utils/constants"

export function runHideChecks(): void {
    let object = getObjectFromGUID(Objects.square)
    let assetbundle = getObjectFromGUID(Objects.assetbundle)
    if (object !== undefined
        && assetbundle !== undefined) {
        print('Hide functions')
        print(object.setHiddenFrom(['Blue']))
        print(object.setHiddenFrom([]))
        print(object.setHiddenFrom())
        print(object.setInvisibleTo(['Green']))
        print(object.setInvisibleTo([]))
        print(object.setInvisibleTo())
        print(object.attachHider('testHide', true, ['Green']))
        print(object.attachHider('testHide', true, []))
        print(object.attachHider('testHide', false))
        print(object.attachInvisibleHider('testHide', true, ['Green']))
        print(object.attachInvisibleHider('testHide', true, []))
        print(object.attachInvisibleHider('testHide', false))
    }
}