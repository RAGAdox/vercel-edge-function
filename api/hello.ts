export const config = {
  runtime: "edge",
};

export default async function handler(request: Request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
