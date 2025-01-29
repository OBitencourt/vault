import { NextResponse } from "next/server";
import dbConnect from '@/src/utils/dbConnect'
import TransactionsModel from '@/src/models/transactions.js'

export async function DELETE(req, {params}) {
    await dbConnect()
  
    const { id } = await params; // Captura o ID da URL
  
    if (!id) {
      return new Response(
        JSON.stringify({ error: "Falta o parâmetro 'id'" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
  
    const deleted = await TransactionsModel.findOneAndDelete({ _id: id });
  

    try {

      if (!deleted) {
          return NextResponse.json(
              { error: "Transação não encontrada" },
              { status: 404 }
          );
      }

      return NextResponse.json(
          { success: "Transação deletada com sucesso!", data: deleted },
          { status: 200 }
      );
  } catch (error) {
      return NextResponse.json(
          { error: "Erro interno do servidor", details: error.message },
          { status: 500 }
      );
  }
  
  }