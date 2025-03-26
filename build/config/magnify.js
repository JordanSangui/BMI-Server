import env from '#start/env';
import { defineConfig, engines } from '@foadonis/magnify';
const magnifyConfig = defineConfig({
    default: 'typesense',
    engines: {
        typesense: engines.typesense({
            apiKey: env.get('TYPESENSE_API_KEY'),
            nodes: [
                {
                    host: env.get('TYPESENSE_HOST'),
                    port: parseInt(env.get('TYPESENSE_PORT', '').toString(), 10),
                    protocol: env.get('TYPESENSE_PROTOCOL', 'https'),
                },
            ],
            collectionSettings: {
                users: {
                    queryBy: ['fullName'],
                    fields: [
                        {
                            name: 'fullName',
                            type: 'string',
                        },
                        {
                            name: 'email',
                            type: 'string',
                            optional: true,
                        },
                        {
                            name: 'active',
                            type: 'bool',
                            optional: true,
                        },
                        {
                            name: 'createdAt',
                            type: 'string',
                        },
                        {
                            name: 'updatedAt',
                            type: 'string',
                        },
                    ],
                },
                notification: {
                    queryBy: ['message'],
                    fields: [
                        {
                            name: 'channelId',
                            type: 'string',
                            optional: true,
                        },
                        {
                            name: 'userId',
                            type: 'string',
                            optional: true,
                        },
                        {
                            name: 'scope',
                            type: 'string',
                            optional: true,
                        },
                        {
                            name: 'message',
                            type: 'string',
                        },
                        {
                            name: 'active',
                            type: 'bool',
                            optional: true,
                        },
                        {
                            name: 'createdAt',
                            type: 'string',
                        },
                        {
                            name: 'updatedAt',
                            type: 'string',
                        },
                    ],
                },
            },
        }),
    },
});
export default magnifyConfig;
//# sourceMappingURL=magnify.js.map