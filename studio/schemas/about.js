export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'What you want to call this entry, does not display on website',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alt tag, important for SEO and accesability. gives a short info about the image.',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'italic',
      title: 'Italic text',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      name: 'paragraph',
      title: 'Paragraph text',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      name: 'sort',
      title: 'Sort order',
      type: 'number',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
