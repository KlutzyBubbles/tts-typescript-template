export function runExamples(): void {
    print('UI examples')
    let xmlString = `<HorizontalLayout
        height="200"
        width="1000"
        color="rgba(0,0,0,0.7)",
        id="horizontalLayout"/>
        <Text
            fontSize="100"
            color="red"
            id="text1">
            Example
        </Text>
        <Text
            text="Message"
            fontSize="100"
            color="blue"
            id="text2"/>
    </HorizontalLayout>`
    let xmlObject: XMLData[] = [
        {
            tag: 'HorizontalLayout',
            attributes: {
                height: 200,
                width: 1000,
                color: 'rgba(0,0,0,0.7)',
                id: 'horizontalLayout'
            },
            children: [
                {
                    tag: 'Text',
                    attributes: {
                        fontSize: 100,
                        color: 'red',
                        id: 'text1'
                    },
                    value: 'Example',
                },
                {
                    tag: 'Text',
                    attributes: {
                        text: 'Message',
                        fontSize: 100,
                        color: 'blue',
                        id: 'text2'
                    },
                },
            ]
        }
    ]
    let customAssets: CustomAsset[] = [
        {
            name: 'Image1',
            url: 'http://placehold.it/120x120&text=image1'
        },
        {
            name: 'Image2',
            url: 'http://placehold.it/120x120&text=image2'
        }
    ]
    print(UI.setXml(xmlString))
    print(UI.setXml(xmlString, customAssets))

    print(UI.setXmlTable(xmlObject))
    print(UI.setXmlTable(xmlObject, customAssets))

    // These work, however due to how UI works, it clears the xml
    // print(UI.setCustomAssets(customAssets))
    // print(UI.setCustomAssets([]))

    print(UI.setValue('text2', 'new value'))

    print(UI.hide('horizontalLayout'))
    print(UI.show('horizontalLayout'))

    print(UI.setClass('text1', 'more names'))
    print(UI.setAttribute('text1', 'fontSize', 400))
    print(UI.setAttribute('text1', 'resizeTextForBestFit', false))
    print(UI.setAttribute('text1', 'text', 'Almost text'))
    print(UI.setAttributes('text1', {
        fontSize: 200,
        resizeTextForBestFit: true,
        text: 'Different text'
    }))
    print(UI.setAttributes('text1', {}))
    print('1---')

    Wait.condition(() => {
        print(UI.getAttribute('text1', 'text'))
        print(UI.getAttribute('text1', 'fontSize'))
        print(UI.getAttributes('text1'))
        print(UI.getCustomAssets())
        print(UI.getValue('text1'))
        print(UI.getXml())
        print(UI.getXmlTable())
        print('2---')
    }, () => {
        return !UI.loading
    }, 30, () => {
        print('UI Timeout :/')
    })
}
