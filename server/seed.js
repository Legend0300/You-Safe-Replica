// Seed/refresh the demo login user: toy@toy.com / toy
// Run: node seed.js
const bcrypt = require('bcrypt');
const User = require('./models/usertypeModel');

(async () => {
  const email = 'toy@toy.com';
  const password = 'toy';
  const hash = await bcrypt.hash(password, 10);

  let user = await User.findOne({ email });
  if (user) {
    user.password = hash;
    await user.save();
    console.log('[seed] updated existing user', email);
  } else {
    user = await User.create({
      name: 'toy',
      email,
      password: hash,
      accountType: 'Employee',
      employeeId: 'toy',
    });
    console.log('[seed] created user', email);
  }

  const check = await User.findOne({ email });
  console.log('[seed] stored doc:', JSON.stringify({ ...check, password: '<hashed>' }));
  console.log('[seed] login with  ->  email: toy@toy.com   password: toy');
})().catch((e) => { console.error('[seed] FAILED', e); process.exit(1); });
