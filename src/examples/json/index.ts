export function runExamples(): void {
    print('JSON examples')
    let tableString = JSON.encode({
        table: 'value'
    })
    let varString = JSON.encode('var')
    let tablePrettyString = JSON.encode_pretty({
        table: 'value'
    })
    let varPrettyString = JSON.encode_pretty('var')
    print(tableString)
    print(varString)
    print(tablePrettyString)
    print(varPrettyString)
    print(JSON.decode(tableString))
    print(JSON.decode(varString))
    print(JSON.decode(tablePrettyString))
    print(JSON.decode(varPrettyString))
}
