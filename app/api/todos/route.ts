import { connectDB } from "@/lib/mongodb";
import { Todo } from "@/models/Todo";
import { NextResponse } from "next/server";

//getAll
export async function GET() {
    await connectDB();
const todos = await Todo.find();
return NextResponse.json(todos);
}

//post
export async function POST(req:Request) {
   await connectDB(); 
   const { title } = await req.json();

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }
   
  const newTodo = await Todo.create ({title, completed: false});
  return NextResponse.json(newTodo, {status: 201});
}