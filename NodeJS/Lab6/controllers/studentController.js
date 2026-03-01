const { ObjectId } = require('mongodb');
const { getDB } = require('../db_connection');

// POST - Add One Student
async function addStudent(req, res) {
    try {
        const db = getDB();
        const result = await db.collection("students").insertOne(req.body);
        res.status(201).json({
            message: "Student Added Successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// POST - Add Many Students
// async function addStudent(req, res) {
//     try {
//         const db = getDB();

//         if (!Array.isArray(req.body)) {
//             return res.status(400).json({
//                 message: "Request body must be an array of students"
//             });
//         }

//         const result = await db.collection("students").insertMany(req.body);

//         res.status(201).json({
//             message: "Students Added Successfully",
//             insertedCount: result.insertedCount,
//             insertedIds: result.insertedIds
//         });

//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// GET - Get One Student
async function getStudents(req, res) {
    try {
        const db = getDB();
        const id = req.params.id;

        const student = await db.collection("students").findOne({
            _id: new ObjectId(id)
        });

        if (!student) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        res.json(student);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// GET - Get All Students
// async function getStudents(req, res) {
//     try {
//         const db = getDB();
//         const students = await db.collection("students").find().toArray();
//         res.json(students);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// PATCH - Update One Student
async function updateStudent(req, res) {
    try {
        const db = getDB();
        const id = req.params.id;

        const result = await db.collection("students").updateOne(
            { _id: new ObjectId(id) },
            { $set: req.body }
        );

        res.json({
            message: "Student Updated Successfully",
            result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// PATCH - Update Many Students (NO CHANGE)
// async function updateManyStudents(req, res) {
//   try {
//     const db = getDB();
//     const { ids, update } = req.body;

//     const objectIds = ids.map(id => new ObjectId(id));

//     const result = await db.collection('students').updateMany(
//       { _id: { $in: objectIds } },
//       { $set: update }
//     );

//     res.json({
//       message: 'Students Updated Successfully',
//       matched: result.matchedCount,
//       modified: result.modifiedCount
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// DELETE - Delete One Students
async function deleteStudent(req, res) {
    try {
        const db = getDB();
        const { ids } = req.body;

        const objectIds = ids.map(id => new ObjectId(id));

        const result = await db.collection("students").deleteOne({
            _id: { $in: objectIds }
        });

        res.json({
            message: "Students Deleted Successfully",
            deletedCount: result.deletedCount
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// DELETE - Delete Many Students
// async function deleteManyStudents(req, res) {
//     try {
//         const db = getDB();
//         const { ids } = req.body;

//         const objectIds = ids.map(id => new ObjectId(id));

//         const result = await db.collection("students").deleteMany({
//             _id: { $in: objectIds }
//         });

//         res.json({
//             message: "Students Deleted Successfully",
//             deletedCount: result.deletedCount
//         });

//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }


module.exports = {
    addStudent,
    getStudents,
    updateStudent,
    deleteStudent
    // updateManyStudents,
    // deleteManyStudents
};