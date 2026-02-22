// Form submission handler for contact form

export const prerender = false;

export async function POST({ request }) {
  const data = await request.json();

  console.log("New contact form submission:", data);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
