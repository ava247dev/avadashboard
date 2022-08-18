'use strict';

/**
 * kanbanboard service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kanbanboard.kanbanboard');
