export default {
    name: 'originalArt',
    title: 'Original art',
    type: 'document',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        },
        {
            name: 'sort',
            title: 'Sort order',
            type: 'number',
            validation: Rule => Rule.required()
        }
    ]
}