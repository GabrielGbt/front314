export function formatDateToBrazil(timestamp: number): string {
    
    const date = new Date(timestamp);
    
    const datePart = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long'
    }); // "12/05/2025"

    const timePart = date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      hour12: false, // optional, use false for 24-hour format
    });
    
    return `🗓️ ${datePart} ás ${timePart} horas`;
    
    }