exports.up = function(knex) {
	// up represents the changes we want to make to our schema
	return knex.schema.createTable('cars', (table) => {
		table.increments();

		table.string('vin', 64).notNullable();
		table.string('make', 64).notNullable();
		table.string('model', 64).notNullable();
		table.float('mileage').notNullable();

		table.string('transmission_type');
		table.string('title_status');
	});
};

exports.down = function(knex) {
	// down represents undoing that change
	return knex.schema.dropTableIfExists('cars');
};
