import dbConnect from '@/src/utils/dbConnect'
import TransactionsModel from '@/src/models/transactions.js'

export async function GET(req) {

  await dbConnect()

  const url = new URL(req.url)
  const searchParams = new URLSearchParams(url.search)
  const month = searchParams.get('month')

  const transactions = await TransactionsModel.find({ month: parseInt(month) });
  
  console.log(req, 'Ok.')
  if (month) {

    return new Response(JSON.stringify({ success: `Transações do mês ${month} achadas com sucesso!`, data: transactions }), {
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ error: "Erro ao achar as transações"}), {
      headers: { "Content-Type": "application/json"}
    })
  }
}
 
export async function POST(req) {
  await dbConnect()

  const {
    name,
    value,
    description,
    revenue,
    month
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
    month,
    description: description || '',
    revenue: revenue || false,
  })

  const savedTransaction = await transaction.save()

  return new Response(JSON.stringify({ message: "Transaction created", data: savedTransaction }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}