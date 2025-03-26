import { policies } from '#policies/main';
import * as abilities from '#abilities/main';
import { Bouncer } from '@adonisjs/bouncer';
export default class InitializeBouncerMiddleware {
    async handle(ctx, next) {
        ctx.bouncer = new Bouncer(() => ctx.auth.user || null, abilities, policies).setContainerResolver(ctx.containerResolver);
        return next();
    }
}
//# sourceMappingURL=initialize_bouncer_middleware.js.map