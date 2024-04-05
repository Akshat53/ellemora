const admin = require('firebase-admin');
const serviceAccount = require('../ellemora-firebase-adminsdk-pq2i2-4fc7a2eabf.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'ellemora.appspot.com', 
});

const storage = admin.storage();

module.exports = { storage };
