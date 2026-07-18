import User from '/model/user.js'
import connectDB from '/config/db.js'
export async function GET() {
    await connectDB();
    const users = await User.find({});
    return new Response(JSON.stringify(users));
}
export async function POST(req, res) {
    await connectDB();
    const data = await req.json();
    const user = await User.create(data);
    return new Response(JSON.stringify(user));
}