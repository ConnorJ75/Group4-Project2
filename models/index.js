const User = require('./User');
const Location = require('./Location');

User.hasMany(Location, {
  onDelete: 'CASCADE'
});

Location.belongsTo(User, {});

module.exports = { User, Location };
