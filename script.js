// Monta a mensagem e abre o WhatsApp (troque o número pelo do cliente).
const NUMERO = "5500000000000";
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  const msg = `Olá! Sou ${d.get("nome")} (${d.get("tel")}) e quero o café ${d.get("cafe")}.`;
  window.open(`https://wa.me/${NUMERO}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});
