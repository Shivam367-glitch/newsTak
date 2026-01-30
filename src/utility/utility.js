 export const WhatsAppShare = (url) => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,
      "_blank"
    );
  };