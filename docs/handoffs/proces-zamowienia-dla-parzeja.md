# Proces zamówienia — handoff do grillowania technicznego Parzeja

Status: dokument rozwijany podczas biznesowej sesji grillowania Górasa rozpoczętej 15 sierpnia 2026. Zawiera zaakceptowane wymagania biznesowe oraz pytania techniczne, które Parzej ma rozstrzygnąć podczas osobnej sesji. Nie przesądza sposobu implementacji.

## Zakres procesu

- początek: klient chce elektronicznie zlecić MM3D indywidualny druk 3D;
- kanały: strona internetowa i e-mail;
- negocjowany przedmiot: szczegóły wykonania wymagające uzgodnienia obu stron;
- koniec: Paynow potwierdza pełną wpłatę za aktualną wycenę;
- poza zakresem: realizacja wydruku, inne rodzaje działalności, kanały nieelektroniczne oraz konfiguracja serwera i wybór stosu technologicznego.

## Decyzja 1: akceptacja wyceny przez płatność

- MM3D wysyła wycenę razem z możliwością płatności Paynow.
- Wycena i możliwość płatności są ważne przez siedem dni kalendarzowych.
- Klient nie wysyła osobnej akceptacji e-mailem.
- Skuteczna pełna płatność za aktualną wycenę jednocześnie akceptuje jej warunki, tworzy zamówienie i przekazuje je do realizacji.
- Wycena zmieniona przed płatnością zastępuje poprzednią; poprzednia możliwość płatności musi przestać działać.
- Szczegóły decyzji zapisuje [ADR 0005](../adr/0005-akceptacja-wyceny-przez-platnosc-paynow.md).

### Pytania techniczne dla Parzeja

1. Czy płatność Paynow powstaje podczas wysyłania wyceny, czy dopiero po wejściu klienta przez kontrolowany link MM3D?
2. Jak powiązać numer sprawy, konkretną wersję wyceny, kwotę i identyfikator płatności?
3. Jak zagwarantować, że zastąpiona wycena nie może zostać opłacona, nawet jeśli klient zachował wcześniejszy link?
4. Jak ustawić siedmiodniową ważność i obsłużyć jej wygaśnięcie?
5. Jak rozstrzygnąć wyścig, w którym MM3D zmienia wycenę w chwili, gdy klient kończy płatność poprzedniej wersji?
6. Który status lub komunikat Paynow jest jedyną podstawą uznania zamówienia za opłacone?
7. Jak bezpiecznie ponawiać nieudaną płatność bez tworzenia drugiego zamówienia?

[Oficjalna dokumentacja tworzenia płatności Paynow](https://docs.paynow.pl/pl/docs/reference/v3/send-payment-request) wskazuje parametr czasu ważności, a [opis procesu płatności](https://docs.paynow.pl/pl/docs/v3/payments) obejmuje między innymi statusy `CONFIRMED` i `EXPIRED`. Parzej powinien zweryfikować zachowanie aktualnej wersji API podczas projektowania integracji.

## Decyzja 2: równoległe warianty i wersje wyceny

- Jedna wycena może zawierać od jednego do maksymalnie trzech kompletnych wariantów wykonania.
- Wariantami mogą być między innymi druk w jednym elemencie, podział modelu na części, inna wielkość albo rozszerzenie o malowanie.
- Klient może wracać do każdego aktywnego wariantu i zapłacić za wybrany bez ponownego proszenia MM3D o przygotowanie tańszej opcji.
- Każdy wariant ma własny zakres, cenę, termin, ograniczenia i możliwość płatności.
- Płatność za jeden wariant zamyka pozostałe warianty tej samej sprawy.
- Nowa alternatywa jest wariantem; korekta albo zmiana dotychczasowych ustaleń tworzy nową kompletną wersję wyceny, która zastępuje poprzednią jako podstawa płatności.
- Wszystkie warianty aktualnej wersji mają jeden wspólny termin ważności: siedem dni kalendarzowych od jej wysłania.
- Dodanie wariantu powoduje wysłanie nowej kompletnej wersji z całym nadal oferowanym zestawem i rozpoczęcie nowego wspólnego okresu ważności.
- MM3D wysyła nową wersję tylko po ponownym potwierdzeniu cen i terminów wszystkich zawartych w niej wariantów.
- Szczegóły decyzji zapisuje [ADR 0006](../adr/0006-rownolegle-warianty-wyceny.md).

### Pytania techniczne dla Parzeja

1. Jak przedstawić kilka wariantów tak, aby klient jednoznacznie widział ich różnice i wybierał właściwą płatność?
2. Czy warianty są osobnymi obiektami płatności od chwili wysłania wyceny, czy płatność powstaje dopiero po wyborze wariantu?
3. Jak atomowo zamknąć pozostałe warianty po potwierdzeniu jednej płatności?
4. Jak zachować historię wersji do celów dowodowych, nie pozwalając płacić za zastąpione wydanie?
5. Jak obsłużyć jednoczesne próby zapłaty za dwa warianty tej samej sprawy?
6. Jak oznaczać wariant i wersję w numerze sprawy, e-mailach, panelu MM3D oraz danych przekazywanych Paynow?
7. Jak nadać wszystkim wariantom jednej wersji wspólny termin ważności i jednocześnie unieważnić płatności poprzedniej wersji?

## Decyzja 3: zachowanie po wygaśnięciu wyceny

- Po siedmiu dniach wycena pozostaje dostępna klientowi do odczytu.
- Wszystkie przyciski i linki płatności wygasłej wyceny są nieaktywne.
- Widok jednoznacznie informuje: **„Wycena wygasła — poproś o jej aktualizację”**.
- Klient może jednym działaniem poprosić MM3D o ponowne potwierdzenie.
- Prośba nie przedłuża wyceny automatycznie.
- MM3D może wysłać identyczną albo zmienioną nową wersję po ponownym sprawdzeniu cen i terminów.
- Dopiero nowa wersja ponownie umożliwia płatność i rozpoczyna nowy siedmiodniowy okres.
- Szczegóły decyzji zapisuje [ADR 0007](../adr/0007-wygasla-wycena-pozostaje-widoczna.md).

### Pytania techniczne dla Parzeja

1. Jak udostępnić bez konta klienta bezpieczny widok wygasłej wyceny, który nie ujawnia innej sprawy?
2. Jak zagwarantować, że bezpośredni, wcześniej zapisany adres płatności również nie przyjmie wpłaty po terminie?
3. Czy działanie „Poproś o aktualizację” wysyła wiadomość, zmienia stan sprawy, czy wykonuje oba działania?
4. Jak utworzyć nową wersję na podstawie wygasłej bez utraty historii i bez ręcznego przepisywania wszystkich wariantów?
5. Jak zaprezentować klientowi poprzednią i aktualną wersję, aby nie pomylił ich możliwości płatności?
