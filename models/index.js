const User = require('./User');
const Location = require('./Location');

User.hasMany(Location, {
  onDelete: 'CASCADE'
});

Location.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Location };
