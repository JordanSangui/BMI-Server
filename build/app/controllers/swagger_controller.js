import AutoSwagger from "adonis-autoswagger";
import swagger from "#config/swagger";
export default class SwaggerController {
    index({ params }) {
        const id = params.id;
        if (id == 2)
            return AutoSwagger.default.scalar("/swagger");
        if (id == 3)
            return AutoSwagger.default.rapidoc("/swagger", "view");
        return AutoSwagger.default.ui("/swagger", swagger);
    }
}
//# sourceMappingURL=swagger_controller.js.map