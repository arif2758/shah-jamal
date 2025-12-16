"use server";

export async function sendContactMessage(
  prevState: unknown,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Simple validation
  if (!name || !phone || !message) {
    return {
      success: false,
      message: "Please fill in all required fields (Name, Phone, Message).",
    };
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram credentials missing");
    return {
      success: false,
      message: "Server configuration error. Please contact support.",
    };
  }

  const text = `
📩 *New Contact Message from shah-jamal-portfolio*

👤 *Name:* ${name}
📱 *Phone:* ${phone}
📧 *Email:* ${email || "N/A"}

📝 *Message:*
${message}
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      console.error("Telegram API Error:", data);
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Message sent successfully! We will contact you soon.",
    };
  } catch (error) {
    console.error("Network Error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
