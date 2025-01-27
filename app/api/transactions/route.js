import dbConnect from '@/src/utils/dbConnect'

export async function GET(request) {
    console.log(request, 'Ok.')

    await dbConnect()

    return new Response(JSON.stringify({ message: "Hello, world!" }), {
      headers: { "Content-Type": "application/json" },
    });
}
 
/*export async function POST(request) {
  const body = await request.json();
  return new Response(JSON.stringify({ message: "Transaction created", data: body }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}*/