const DEFAULT_PERMISSIONS = [
  { action: 'admincallback', controller: 'auth', type: 'users-permissions', roleType: 'public' },
  { action: 'adminregister', controller: 'auth', type: 'users-permissions', roleType: 'public' },
  { action: 'callback', controller: 'auth', type: 'users-permissions', roleType: 'public' },
  { action: 'connect', controller: 'auth', type: 'users-permissions', roleType: null },
  { action: 'forgotpassword', controller: 'auth', type: 'users-permissions', roleType: 'public' },
  { action: 'register', controller: 'auth', type: 'users-permissions', roleType: 'public' },
  {
    action: 'emailconfirmation',
    controller: 'auth',
    type: 'users-permissions',
    roleType: 'public',
  },
  { action: 'resetpassword', controller: 'auth', type: 'users-permissions', roleType: 'public' },
  { action: 'init', controller: 'userspermissions', type: null, roleType: null },
  { action: 'me', controller: 'user', type: 'users-permissions', roleType: null },
  { action: 'autoreload', controller: null, type: null, roleType: null },
  { action: 'findone', controller: 'products', type: null, roleType: null },
  { action: 'find', controller: 'products', type: null, roleType: null },
  { action: 'count', controller: 'products', type: null, roleType: 'public' },
  { action: 'count', controller: 'creators', type: null, roleType: 'public' },
  { action: 'create', controller: 'products', type: null, roleType: 'public' },
  { action: 'update', controller: 'products', type: null, roleType: 'public' },
  { action: 'delete', controller: 'products', type: null, roleType: 'public' },
  { action: 'create', controller: 'creators', type: null, roleType: 'public' },
  { action: 'update', controller: 'creators', type: null, roleType: 'public' },
  { action: 'delete', controller: 'creators', type: null, roleType: 'public' },
  { action: 'find', controller: 'creators', type: null, roleType: 'public' },
  { action: 'findone', controller: 'creators', type: null, roleType: 'public' },
  { action: 'findbyname', controller: 'products', type: null, roleType: 'public' },




];

module.exports = { DEFAULT_PERMISSIONS };