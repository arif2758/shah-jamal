"use server";

export async function submitContact(formData: FormData) {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real app, send email here
  console.log("Contact form submitted", Object.fromEntries(formData));

  return { success: true };
}
