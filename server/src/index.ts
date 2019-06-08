import express from 'express';

const app: express.Application = express();

app.get('/', (_: any, res: any): void => {
    res.send('Hello World');
});

// tslint:disable-next-line
app.listen(5000, () => console.log('Server Running!'));