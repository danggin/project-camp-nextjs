import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // 불필요한 재연결을 막기 위해 예외 처리
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log('MongoDB Connected.');
  } catch (e) {
    console.error(`Error: ${e}`);
    process.exit(1);
  }
};

export default connectDB;
