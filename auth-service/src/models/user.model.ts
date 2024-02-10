import mongoose, { Schema, Document, Model } from "mongoose";

interface UserDocument extends Document {
  email: string;
  password: string;
  salt: string;
}

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.salt;
        delete ret.__v, delete ret.createdAt, delete ret.deletedAt;
      },
    },
    timestamps: true,
  }
);

const User = mongoose.model<UserDocument>("user", UserSchema);

export { User };
