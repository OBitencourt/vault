import dbConnect from '@/src/utils/dbConnect'
import TransactionsModel from '@/src/models/transactions.js'

export async function GET(req) {
    console.log(req, 'Ok.')
    await dbConnect()
    const transactions = await TransactionsModel.find()

    return new Response(JSON.stringify({ success: "Transações achadas com sucesso!", data: transactions }), {
      headers: { "Content-Type": "application/json" },
    });
}
 
export async function POST(req) {
  await dbConnect()

  const {
    name,
    value,
    description,
    revenue 
  } = await req.json()

  if (!name || !value) {
    return new Response(
      JSON.stringify({ error: "Fields 'name' and 'value' are required" }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }



  const transaction = new TransactionsModel({
    name,
    value,
    description: description || '',
    revenue: revenue || false
  })

  const savedTransaction = await transaction.save()

  return new Response(JSON.stringify({ message: "Transaction created", data: savedTransaction }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}