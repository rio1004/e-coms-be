import productRoutes from "./router/productRouter.js";
import app from "./config/server.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.use("/api/products", productRoutes);
app.listen(PORT, () => {
  console.log("RUNNINGGGGG!!");
});
