const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: FormDate
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [ReactionSchema],
},
{
    toJSON: {
        virtuals: true,
        },
        id: false,
    });

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: FormDate,
    }
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

function FormDate(date) {
    return createdAt.split('T')[0];
}

const Thought = model('Thought', ThoughtSchema);

model.exports = Thought;