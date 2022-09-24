export default {
    name: 'artPrints',
    title: 'Art prints',
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