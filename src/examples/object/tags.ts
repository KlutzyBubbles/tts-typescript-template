import { Objects } from "../../utils/constants"

export function runTagChecks(): void {
    let object = getObjectFromGUID(Objects.square)
    let notag = getObjectFromGUID(Objects.calculator)
    if (object !== undefined && notag !== undefined) {
        print('Tag functions')
        print(notag.getTags())
        print(notag.getTags().join(','))
        print(notag.hasAnyTag())
        print(object.addTag('new tag'))
        print(object.getTags())
        print(object.getTags().join(','))
        print(object.hasAnyTag())
        print(object.hasMatchingTag(notag))
        print(object.hasMatchingTag(object))
        print(object.hasTag('notagexist'))
        print(object.hasTag('new tag'))
        print(object.removeTag('new tag'))
        print(object.hasTag('new tag'))
        print(object.setTags(['new tag', 'other tag']))
        print(object.hasTag('other tag'))
    }
}