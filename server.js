const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://picsum.photos/64/64',
            'name': '홍길동',
            'birthday': '545454',
            'gender': 'Man',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'https://picsum.photos/64/64',
            'name': '이몽룡',
            'birthday': '898989',
            'gender': 'Man',
            'job': '대학생'
        },
        {
            'id': 3,
            'image': 'https://picsum.photos/64/64',
            'name': '성춘향',
            'birthday': '121212',
            'gender': 'Women',
            'job': '대학생'
        },

    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));