import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'events';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('creator_id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.string('name').notNullable();
            table.string('image').notNullable();
            table.string('link').notNullable().unique();
            table.string('message').notNullable();
            table.enum('scope', ['public', 'private']).defaultTo('public').notNullable();
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('started_at').notNullable();
            table.timestamp('ended_at').notNullable();
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1737904593910_create_events_table.js.map