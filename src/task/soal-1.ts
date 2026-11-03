// TODO: 1. Buatlah sebuah string enum bernama 'PriorityLevel'
// dengan isi: LOW ('Low'), MEDIUM ('Medium'), HIGH ('Urgent')
// ... (tulis kode enum di sini)
enum PriorityLevel {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "Urgent",
}

interface Ticket {
  ticketId: string;
  title: string;
  // 2. Gunakan enum 'PriorityLevel' pada properti priority ini
  priority: PriorityLevel; 
};

// TODO: 3. Lengkapi fungsi ini untuk menerima parameter bertipe 'Ticket'
// dan mengembalikan string keterangan berdasarkan prioritasnya
function getTicketMessage(ticket: Ticket): string {
  if (ticket.priority === PriorityLevel.HIGH) {
    return "Segera tangani! Darurat!";
  } else if (ticket.priority === PriorityLevel.MEDIUM)
  {
    return 'Tolong! pasien cukup darurat!';
  } else if (ticket.priority === PriorityLevel.LOW )
  {
    return 'Tangani pasien ini belakangan! Pasien tidak darurat.'
  }
  // Gunakan switch-case atau if-else untuk mengecek nilai enum
  // Contoh: Jika HIGH, return "Segera tangani! Darurat!"
  // Jika LOW atau MEDIUM, sesuaikan pesannya.

  return '';
}

// Contoh pemanggilan (Opsional untuk dites)
const myTicket: Ticket = {
  ticketId: 'TICK-001',
  title: 'Server Down',
  priority: PriorityLevel.HIGH,
};

console.log(getTicketMessage(myTicket));
