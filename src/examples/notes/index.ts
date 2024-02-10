export function runExamples(): void {
    print('Notes examples')
    print(Notes.getNotebookTabs())
    print(Notes.getNotes())
    print(Notes.setNotes('ntoes'))
    print(Notes.setNotes(''))
    print(Notes.addNotebookTab({
        title: 'A title',
        body: 'some body',
        color: 'White'
    }))
    print(Notes.addNotebookTab({
        title: 'A title defaults'
    }))
    print(Notes.editNotebookTab({
        index: 0,
        title: 'A title',
        body: 'some body',
        color: 'White'
    }))
    print(Notes.editNotebookTab({
        index: 0
    }))
    print(Notes.getNotebookTabs())
    print(Notes.removeNotebookTab(1))
    print('1-----')
}
