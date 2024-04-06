import * as admin from "firebase-admin";

const serviceAccount = "../../ellemora-firebase-adminsdk-pq2i2-4fc7a2eabf.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://ellemora.appspot.com",
});

export const firebaseAdmin = admin;
