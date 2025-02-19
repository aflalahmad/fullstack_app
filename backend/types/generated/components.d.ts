import type { Schema, Struct } from '@strapi/strapi';

export interface OrderedItemOrderedItem extends Struct.ComponentSchema {
  collectionName: 'components_ordered_item_ordered_items';
  info: {
    displayName: 'OrderedItem';
  };
  attributes: {
    price: Schema.Attribute.Float;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ordered-item.ordered-item': OrderedItemOrderedItem;
    }
  }
}
