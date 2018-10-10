'use strict';

/**
 * Desserts.js controller
 *
 * @description: A set of functions called "actions" for managing `Desserts`.
 */

module.exports = {

  /**
   * Retrieve desserts records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.desserts.search(ctx.query);
    } else {
      return strapi.services.desserts.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a desserts record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.desserts.fetch(ctx.params);
  },

  /**
   * Count desserts records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.desserts.count(ctx.query);
  },

  /**
   * Create a/an desserts record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.desserts.add(ctx.request.body);
  },

  /**
   * Update a/an desserts record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.desserts.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an desserts record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.desserts.remove(ctx.params);
  }
};
