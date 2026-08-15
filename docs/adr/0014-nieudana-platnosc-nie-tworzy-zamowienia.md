---
status: accepted
---

# Nieudana płatność nie tworzy zamówienia

Anulowanie, przerwanie, odrzucenie, wygaśnięcie albo błąd płatności Paynow nie tworzy zamówienia i po zakończeniu próby nie zamyka żadnego wariantu wyceny. Klient wraca do aktualnej wyceny z komunikatem „Płatność nie została zakończona” i, dopóki wersja pozostaje aktualna oraz ważna, może bez kontaktu z MM3D ponowić płatność za ten sam wariant albo wybrać inny.

Jeżeli wycena w międzyczasie wygasła lub została zastąpiona, ponowienie płatności nie jest możliwe. Zamówienie powstaje wyłącznie po pierwszym skutecznym potwierdzeniu pełnej płatności. Techniczny sposób rozpoznawania wyniku, bezpiecznego ponawiania i zapobiegania duplikatom ustala Parzej.
