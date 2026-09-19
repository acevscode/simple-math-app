const express = require('express');
const app = express();
const PORT = 3000;

// הגדרת תיקיית הקבצים הסטטיים (HTML/CSS) כדי שהשרת יציג את האתר
app.use(express.static('public'));

// שורה שמאפשרת לשרת לקרוא נתוני JSON שנשלחים מהדפדפן
app.use(express.json());

// נתיב ה-API שמקבל את שני המספרים ומחזיר את סכומם
app.post('/api/add', (req, res) => {
    const { num1, num2 } = req.body;

    // ולידציה בסיסית: לוודא שהמספרים אכן בין 1 ל-10
    if (num1 < 1 || num1 > 10 || num2 < 1 || num2 > 10) {
        return res.status(400).json({ error: 'המספרים חייבים להיות בין 1 ל-10' });
    }

    const sum = num1 + num2;
    res.json({ sum: sum });
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});