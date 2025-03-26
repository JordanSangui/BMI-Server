import router from '@adonisjs/core/services/router';
import AutoSwagger from "adonis-autoswagger";
import swagger from "#config/swagger";
import transmit from '@adonisjs/transmit/services/main';
import { middleware } from '#start/kernel';
const SwaggerController = () => import('#controllers/swagger_controller');
const UsersController = () => import('#controllers/users_controller');
const ChatsController = () => import('#controllers/chats_controller');
const ChannelsController = () => import('#controllers/channels_controller');
const ChannelChatsController = () => import('#controllers/channel_chats_controller');
const EventsController = () => import('#controllers/events_controller');
const EventMembersController = () => import('#controllers/event_members_controller');
const FriendshipsController = () => import('#controllers/friendships_controller');
const NotificationsController = () => import('#controllers/notifications_controller');
const PaymentMethodsController = () => import('#controllers/payment_methods_controller');
const SubscriptionsController = () => import('#controllers/subscriptions_controller');
const SubscriptionOptionsController = () => import('#controllers/subscription_options_controller');
const BlockListsController = () => import('#controllers/block_lists_controller');
const ConversationsController = () => import('#controllers/conversations_controller');
const ChannelMembersController = () => import('#controllers/channel_members_controller');
transmit.registerRoutes();
router.get("/swagger", async () => AutoSwagger.default.docs(router.toJSON(), swagger)).as('swagger');
router.group(() => {
    router.group(() => {
        router.get('/:id?', [SwaggerController, 'index']).where('id', router.matchers.number()).as('api.swagger.index');
    }).prefix('/documetation');
    router.group(() => {
        router.get('/', [UsersController, 'index']).as('api.user.index').use(middleware.auth({ guards: ['api'] }));
        router.get('/show', [UsersController, 'show']).as('api.user.show');
        router.get('/token/:id', [UsersController, 'token']).as('api.user.token');
    }).prefix('/user');
    router.group(() => {
        router.get('/', [FriendshipsController, 'index']).as('api.friendship.index');
    }).prefix('/friendship');
    router.group(() => {
        router.get('/', [BlockListsController, 'index']).as('api.block_user.index');
    }).prefix('/block_user');
    router.group(() => {
        router.get('/', [NotificationsController, 'index']).as('api.notification.index');
    }).prefix('/notification');
    router.group(() => {
        router.get('/', [ConversationsController, 'index']).as('api.conversation.index');
    }).prefix('/conversation');
    router.group(() => {
        router.get('/', [ChatsController, 'index']).as('api.chat.index');
    }).prefix('/chat');
    router.group(() => {
        router.get('/', [ChannelsController, 'index']).as('api.channel.index');
        router.get('/chat', [ChannelChatsController, 'index']).as('api.channel.chat');
        router.get('/member', [ChannelMembersController, 'index']).as('api.channel.member');
    }).prefix('/channel');
    router.group(() => {
        router.get('/', [EventsController, 'index']).as('api.event.index');
        router.get('/member', [EventMembersController, 'index']).as('api.event.member');
    }).prefix('/event');
    router.group(() => {
        router.get('/', [SubscriptionsController, 'index']).as('api.subcription.index');
        router.get('/payment', [PaymentMethodsController, 'index']).as('api.subcription.payment');
        router.get('/payment-method', [SubscriptionOptionsController, 'index']).as('api.subcription.paymentMethod');
    }).prefix('/subcription');
}).prefix('/v1');
//# sourceMappingURL=routes.js.map