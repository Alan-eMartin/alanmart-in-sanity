export const work = {
  name: 'work',
  type: 'document',
  title: 'Work',
  fields: [
    {
      name: 'company',
      type: 'string',
      title: 'Company',
      description: 'The name of the company you worked for',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'company',
        maxLength: 96,
      },
    },
    {
      name: 'companyUrl',
      type: 'url',
      title: 'Company URL',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main image',
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alt text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
      description: 'Your job title',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies Used',
      description: 'Add tags that describe your responsibilities',
      of: [{type: 'string'}],
    },
    {
      name: 'startDate',
      type: 'datetime',
      title: 'Start Date',
      description: 'The date you started working for this company',
    },
    {
      name: 'endDate',
      type: 'datetime',
      title: 'End Date',
      description: 'The date you stopped working for this company, leave blank if current',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A description of your role',
    },
  ],
}
