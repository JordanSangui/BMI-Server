/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AutoSwagger from "adonis-autoswagger"
import swagger from "#config/swagger"
const SwaggerController = () => import('#controllers/swaggers_controller')
const BmisController = () => import('#controllers/bmis_controller')

// Return swagger in YAML
router.get("/swagger", async () => AutoSwagger.default.docs(router.toJSON(), swagger))

router
  .group(() => {
    // Swagger documentation
    router.get('/documentation/:id?', [SwaggerController, 'index']).where('id', router.matchers.number()).as('api.swagger.index')
    // Calculate BMI
    router
      .get('bmi/:weight/:height/:gender', [BmisController, 'bmi'])
      .where('weight', { match: /^([1-9][0-9]*|0)(\.[0-9]{2})?$/, })
      .where('height', { match: /^([1-9][0-9]*|0)(\.[0-9]{2})?$/, })
      .where('gender', router.matchers.number())
      .as('bmi.calcultate')
  })
  .prefix('/api/v1')