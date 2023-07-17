export const post = {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    },
    {
      name: 'excerpt',
      type: 'string',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'altText',
          type: 'string',
          title: 'Alt text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      description:
        'Featured posts will show up on in the featured section of the blog page (only the first one will be shown).',
    },
  ],
}
