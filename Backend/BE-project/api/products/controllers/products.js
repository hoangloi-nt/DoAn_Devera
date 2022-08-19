'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
 const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   * 
   */

   async findByName(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.products.search(ctx.query);
    } else {
      entities = await strapi.services.products.find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.products }));
  },
};
