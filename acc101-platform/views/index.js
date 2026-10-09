'use strict';

// Aggregates all page builders in one place for the routers.
module.exports = {
  helpers: require('./helpers'),
  auth: require('./auth'),
  landing: require('./landing'),
  home: require('./home'),
  dashboard: require('./dashboard'),
  module: require('./module'),
  exams: require('./exams'),
  labs: require('./labs'),
  gradebook: require('./gradebook'),
  videos: require('./videos'),
  tutor: require('./tutor'),
  account: require('./account'),
  guides: require('./guides'),
};
