import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'users';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').notNullable();
            table.string('last_name').nullable();
            table.string('first_name').notNullable();
            table.string('pseudo').notNullable().unique();
            table.string('email', 254).nullable().unique();
            table.string('tel', 254).nullable().unique();
            table.string('avatar').nullable();
            table.string('profile_image').nullable();
            table.string('images').nullable();
            table.string('password').notNullable();
            table.text('description').nullable();
            table.string('country', 254).notNullable();
            table.string('city', 254).notNullable();
            table.string('address', 254).nullable();
            table.enum('gender', ['man', 'woman']).defaultTo('man').notNullable();
            table.enum('gender_find', ['all', 'man', 'woman']).defaultTo('woman').notNullable();
            table.enum('status', ['offline', 'online']).defaultTo('online').notNullable();
            table.boolean('find_me').notNullable().defaultTo(true);
            table.boolean('show_information_me').notNullable().defaultTo(true);
            table.boolean('verified').notNullable().defaultTo(false);
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('last_connected_at').notNullable();
            table.timestamp('created_at').notNullable();
            table.timestamp('updated_at').nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1737845964596_create_users_table.js.map