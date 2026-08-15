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

## Decyzja 4: dwudniowy czas reakcji MM3D

- Automatyczne potwierdzenie pierwszego formularza nie zastępuje merytorycznej odpowiedzi MM3D.
- MM3D ma maksymalnie dwa dni robocze na odpowiedź od pierwszego zapytania klienta.
- Odpowiedzią może być wycena, kolejne konieczne pytanie albo odmowa realizacji.
- Wysłanie odpowiedzi zatrzymuje czas po stronie MM3D.
- Gdy klient dostarczy wymagane informacje, rozpoczyna się nowy maksymalnie dwudniowy okres na następne działanie MM3D.
- Reguła nie obiecuje zakończenia całego procesu wyceny w dwa dni.
- Szczegóły decyzji zapisuje [ADR 0008](../adr/0008-dwudniowy-czas-reakcji-mm3d.md).

### Pytania techniczne dla Parzeja

1. Jak rozpoznać, że wiadomość klienta wymaga następnego działania MM3D, bez automatycznej analizy treści e-maila?
2. Czy i gdzie Góras ręcznie oznacza przejście odpowiedzialności między klientem a MM3D?
3. Jak liczyć dni robocze, święta oraz czas otrzymania wiadomości poza godzinami pracy?
4. Czy panel ma pokazywać termin następnej reakcji i ostrzegać o jego zbliżaniu?
5. Jak powiązać odpowiedzi e-mail z właściwą sprawą, jeśli klient zmieni temat wiadomości albo adres nadawcy?

## Decyzja 5: brak odpowiedzi klienta podczas uzgodnień

- Po 5 dniach roboczych oczekiwania na konieczną informację klient otrzymuje jedno przypomnienie.
- Po kolejnych 5 dniach roboczych bez odpowiedzi sprawa zostaje wstrzymana.
- Wstrzymana sprawa nie generuje dalszych zadań dla MM3D.
- Klient może wznowić ją przez odpowiedź w tym samym wątku i z tym samym numerem sprawy.
- Wznowienie rozpoczyna nowy dwudniowy czas reakcji MM3D.
- Wcześniejsze rozmowy nie gwarantują po wznowieniu ceny, terminu ani dostępności.
- Szczegóły decyzji zapisuje [ADR 0009](../adr/0009-wstrzymanie-sprawy-po-braku-odpowiedzi.md).

### Pytania techniczne dla Parzeja

1. Jak system rozpoznaje, że sprawa oczekuje na klienta, i od którego momentu liczy 5 dni roboczych?
2. Czy przypomnienie jest wysyłane automatycznie, czy po zatwierdzeniu przez Górasa?
3. Jak uniknąć przypomnienia, jeśli klient odpowiedział poza śledzonym wątkiem albo innym kanałem elektronicznym?
4. Jak technicznie wstrzymać i później wznowić sprawę bez zmiany jej numeru?
5. Jak oznaczyć, że wznowiona sprawa wymaga ponownej oceny ceny i dostępności?

## Decyzja 6: dane dostawy przed przejściem do Paynow

- Pierwszy formularz zapytania nie wymaga kompletu danych wysyłkowych.
- Po wybraniu wariantu klient podaje albo potwierdza imię i nazwisko odbiorcy, adres e-mail i numer telefonu.
- Dla Paczkomatu podaje konkretny numer albo identyfikator punktu.
- Dla kuriera podaje pełny adres dostawy.
- Dane są kompletowane przed przekierowaniem do Paynow, a nie po płatności.
- Klient przechodzi do płatności dopiero po zobaczeniu końcowego podsumowania wariantu i pełnej kwoty.
- Klient nie zamawia i nie opłaca przesyłki InPost oraz nie przekazuje kodu nadania.
- MM3D zamawia przesyłkę i wybiera jej gabaryt na podstawie gotowego, zabezpieczonego produktu oraz pudełka.
- Szczegóły decyzji zapisuje [ADR 0010](../adr/0010-dane-dostawy-przed-platnoscia.md).

### Pytania techniczne dla Parzeja

1. Jak bez konta klienta bezpiecznie zachować wybór wariantu podczas uzupełniania danych dostawy i przejścia do Paynow?
2. Które pola są wymagane dla Paczkomatu, a które dla kuriera?
3. Jak walidować Paczkomat i adres przed utworzeniem płatności?
4. Czy dane są przekazywane do InPost automatycznie, czy przechowywane tylko dla Górasa?
5. Jak pozwolić klientowi poprawić dane bez utworzenia nowej wersji wyceny, jeżeli cena i zakres się nie zmieniają?
6. Jak chronić dane dostawy w widoku wyceny i historii sprawy dostępnej bez konta?
7. Jak MM3D zapisuje wybrany gabaryt i wynikające z niego dane nadania bez wymagania tej decyzji od klienta?

## Decyzja 7: rodzaj nabywcy i dane do dokumentu sprzedaży

- Przed przejściem do Paynow klient wybiera zakup prywatny albo zakup na firmę.
- Wybór znajduje się w tym samym kroku co potwierdzenie danych dostawy i wariantu.
- Przy zakupie firmowym klient podaje nazwę firmy, NIP i adres.
- Dane nabywcy są kompletne przed utworzeniem opłaconego zamówienia.
- Dokładny zestaw obowiązkowych pól i dokumentów potwierdza księgowy lub prawnik.
- Szczegóły decyzji zapisuje [ADR 0011](../adr/0011-rodzaj-nabywcy-przed-platnoscia.md).

### Pytania techniczne dla Parzeja

1. Jak dynamicznie pokazać właściwe pola dla zakupu prywatnego i firmowego?
2. Jak walidować NIP i czy weryfikacja ma być wyłącznie składniowa, czy także z zewnętrznym rejestrem?
3. Które dane są przekazywane do systemu płatności, a które pozostają wyłącznie w MM3D?
4. Jak zapisać rodzaj nabywcy i dane dokumentu przy zamówieniu oraz późniejszej korekcie?
5. Jak ograniczyć dostęp do danych nabywcy w widoku sprawy dostępnym bez konta?
