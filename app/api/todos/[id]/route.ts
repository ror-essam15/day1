import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import { Todo } from "@/models/Todo";

// 🗑️ DELETE todo by ID
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> } 
) {
  const { id } = await context.params; 

  console.log("DELETE called with id:", id);

  await connectDB();

  const deleted = await Todo.findByIdAndDelete(new mongoose.Types.ObjectId(id));

  if (!deleted) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Todo deleted successfully" });
}

//  PUT (update todo)
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const { title, completed } = await req.json();

  await connectDB();

  const updatedTodo = await Todo.findByIdAndUpdate(
    new mongoose.Types.ObjectId(id),
    { title, completed },
    { new: true }
  );

  if (!updatedTodo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(updatedTodo);
}
