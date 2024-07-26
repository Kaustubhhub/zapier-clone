import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        msg: "Hi from server next"
    })
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
});