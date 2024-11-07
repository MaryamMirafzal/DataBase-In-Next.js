import mongoose from "mongoose";

async function ConnectDB() {
    try {
        // Check connect to DB
        if (mongoose.connection.readyState) return;

        // Connect to DB
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB");
    } catch (error) {
        console.error("DB connection error:", error);
    }
}

export default ConnectDB;


// import mongoose from "mongoose";

// async function ConnectDB() {
//     // اگر قبلاً متصل شده است، نیازی به اتصال مجدد نیست
//     if (mongoose.connection.readyState === 1) {
//         console.log("Already connected to DB");
//         return;
//     }

//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("Connected to DB");
//     } catch (error) {
//         console.error("DB connection error:", error);
//     }
// }

// export default ConnectDB;
