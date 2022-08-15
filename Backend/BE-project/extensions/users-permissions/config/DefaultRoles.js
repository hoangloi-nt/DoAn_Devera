const DEFAULT_ROLES = [
  {
    name: 'Admin',
    description: 'Default role given to administrator.',
    type: 'admin',
  },
  
  // It's recommend to not delete this role
  {
    name: 'Authenticated',
    description: 'Default role given to authenticated user.',
    type: 'authenticated',
  },

  // It's recommend to not delete this role
  {
    name: 'Public',
    description: 'Default role given to unauthenticated user.',
    type: 'public',
  },
];

module.exports = { DEFAULT_ROLES };
