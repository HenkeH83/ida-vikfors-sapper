export default {
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Identification for you, does not display on webpage',
      type: 'string'
    },
    {
      name: 'place',
      title: 'Place',
      type: 'string',
    },
    {
      name: 'exhibitionName',
      title: 'Exhibition name',
      type: 'string',
    },
    {
      name: 'displayDate',
      title: 'Date shown on site',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Exhibition start date, used for sorting',
      type: 'date',
      validation: Rule => Rule.required()
    }
  ],
}
