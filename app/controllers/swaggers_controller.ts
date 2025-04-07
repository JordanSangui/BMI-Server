import type { HttpContext } from '@adonisjs/core/http'
import AutoSwagger from "adonis-autoswagger"
import swagger from "#config/swagger"

export default class SwaggersController {
    /**
     * @index
     * @operationId getDocumentation
     * @description Return specific documentation
     * @paramPath id - The ID of documentation -  @enum(1, 2, 3)
     * @responseBody 200 - Return HTML code of documentation page
     */
    index({ params }: HttpContext) {
        const id = params.id
        if (id == 2) return AutoSwagger.default.scalar("/swagger")
        if (id == 3) return AutoSwagger.default.rapidoc("/swagger", "view")
        return AutoSwagger.default.ui("/swagger", swagger)
    }

}