import mongoose from 'mongoose';

const QuestionDataSchema = new mongoose.Schema({
    questionCategory: {
        type: String,
        required: true,
        trim: true,
    },
    questionTitle: {
        type: String,
        required: true,
        trim: true,
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    examDate: {
        type: Date,
        required: true,
    },
    examTime: {
        type: String,
        required: true,
    },
    examDuration: {
        type: String,
        required: true,
    },
    questions: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const QuestionModel = mongoose.model('Question', QuestionDataSchema);
export default QuestionModel
