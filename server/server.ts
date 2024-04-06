import app from './app';
import { connect } from './src/config/database';

const PORT = process.env.PORT || 3000;

connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});