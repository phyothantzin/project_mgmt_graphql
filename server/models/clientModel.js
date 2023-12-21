import { mongoose } from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
});

const Client = mongoose.model("Client", ClientSchema);
export default Client;
