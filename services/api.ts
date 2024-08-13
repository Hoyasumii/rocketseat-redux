export async function api() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // await new Promise((resolve, reject) => setTimeout(reject, 3000));
  return "Hello World";
}
