
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 1, make: 'bat', model: 'mobile', mileage: 12345, automatic: false},
        {vin: 2, make: 'invisible', model: 'jet', mileage: 123456, automatic: true, status: 'invisible'},
        {vin: 3, make: 'magic', model: 'schoolbus', mileage: 1234567}
      ]);
    });
};
