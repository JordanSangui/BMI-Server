import path from "node:path";
import url from "node:url";
export default {
    path: path.dirname(url.fileURLToPath(import.meta.url)) + "/../",
    tagIndex: 2,
    info: {
        title: "Dating API",
        version: "1.0.0",
        description: "",
    },
    snakeCase: true,
    debug: false,
    ignore: ["/swagger", "/v1/documentation/{id}"],
    preferredPutPatch: "PUT",
    common: {
        parameters: {},
        headers: {},
    },
    securitySchemes: {},
    authMiddlewares: ["auth", "auth:api"],
    defaultSecurityScheme: "BearerAuth",
    persistAuthorization: true,
    showFullPath: false,
};
//# sourceMappingURL=swagger.js.map