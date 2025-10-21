import express from "express";
import cors from "cors";
import "dotenv/config";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/items", itemRoutes);

app.listen(PORT, () => {
  console.log(
    `responsi-modul-1 rafael ardiansyah running on http://localhost:${PORT}`,
  );
});
