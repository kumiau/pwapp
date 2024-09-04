import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        content: fields.markdoc({
          label: 'Contenido',
        }),
        image: fields.image({
          label: 'Imagen',
          directory: 'public/images/posts',
          publicPath: 'images/posts',
        }),
        categories: fields.relationship({
          label: 'Categoría',
          description: 'Categoría de la entrada',
          collection: 'categories'
        }),
        authors: fields.array(
          fields.relationship({
            label: 'Autores',
            description: 'Autores de esta publicación',
            collection: 'authors'
          }), {
            label: 'Autores',
            itemLabel: (props) => props.value || 'Por favor seleccione Autor'
          }
        )
      },
    }),
    venues: collection({
      label: 'Locales',
      slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Nombre' } }),
        description: fields.markdoc({
          label: 'Descripción',
        }),
        image: fields.image({
          label: 'Imagen',
          directory: 'public/images/venues',
          publicPath: 'images/venues',
        }),
        venueType: fields.relationship({
          label: 'Categoría',
          description: 'Categoría del local',
          collection: 'venueType'
        }),
      },
    }),
    authors: collection({
      label: 'Autores',
      slugField: 'name',
      path: 'content/authors/*',
      schema: {
        name: fields.slug({ name: { label: 'Nombre' } }),
      },
    }),
    categories: collection({
      label: 'Categorias',
      slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Nombre' } }),
      },
    }),
    venueType: collection({
      label: 'Categoría',
      slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Nombre' } }),
      },
    }),
  },
});
