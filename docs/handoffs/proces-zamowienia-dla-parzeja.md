# Proces zamówienia — handoff do grillowania technicznego Parzeja

Status: biznesowy zakres procesu został domknięty przez Górasa 15 sierpnia 2026 i jest gotowy do osobnej sesji technicznej Parzeja. Dokument zawiera zaakceptowane wymagania biznesowe oraz pytania techniczne, ale nie przesądza sposobu implementacji.

## Zakres procesu

- początek: klient chce elektronicznie zlecić MM3D indywidualny druk 3D;
- kanały: strona internetowa i e-mail;
- negocjowany przedmiot: szczegóły wykonania wymagające uzgodnienia obu stron;
- koniec: Paynow potwierdza pełną wpłatę za aktualną wycenę;
- poza zakresem: realizacja wydruku, inne rodzaje działalności, kanały nieelektroniczne oraz konfiguracja serwera i wybór stosu technologicznego.

## Przebieg procesu od zapytania do płatności

1. Klient wysyła przez stronę zapytanie o indywidualny druk 3D i otrzymuje numer sprawy oraz automatyczne podsumowanie e-mailem.
2. MM3D w ciągu maksymalnie dwóch dni roboczych wysyła wycenę, konieczne pytanie albo odmowę z przyczyną.
3. Szczegóły mogą być uzgadniane e-mailem, ale zmiana obowiązuje dopiero po ujęciu jej w nowej kompletnej wersji wyceny.
4. Klient otrzymuje e-mail z prywatnym linkiem do strony wyceny dostępnej bez konta.
5. Aktualna wersja pokazuje od jednego do trzech wariantów, pełne kwoty, zakresy i terminy; poprzednie wersje są tylko do odczytu.
6. Wycena obowiązuje siedem dni, może wysłać jedno przypomnienie 24 godziny przed końcem i może zostać wcześniej wycofana wyłącznie wyjątkowo.
7. Klient wybiera wariant, uzupełnia albo potwierdza dane dostawy i nabywcy, sprawdza pełną kwotę oraz akceptuje regulamin.
8. Zmiana zakresu, ceny albo terminu wraca do MM3D i tworzy nową wersję; zwykła korekta danych nie zmienia wyceny.
9. Klient rozpoczyna Paynow. Nieudana płatność nie tworzy zamówienia, a płatność oczekująca tymczasowo blokuje inne próby.
10. Pierwsze potwierdzenie pełnej płatności tworzy jedno zamówienie, zamyka pozostałe warianty i rozpoczyna termin realizacji; ewentualna druga wpłata podlega zwrotowi.
11. Prywatna strona staje się trwałym podsumowaniem, a klient otrzymuje automatyczny e-mail. Błąd dostarczenia wiadomości nie wpływa na ważność zamówienia.
12. Utracony prywatny link może zostać zastąpiony nowym po zweryfikowanej prośbie z adresu przypisanego do sprawy; poprzedni link przestaje działać.

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

## Decyzja 7: rodzaj nabywcy i żądanie faktury

- Przed przejściem do Paynow klient osobno wybiera klienta indywidualnego albo firmę.
- Niezależnie wskazuje, czy chce otrzymać fakturę.
- Wybór znajduje się w tym samym kroku co potwierdzenie danych dostawy i wariantu.
- Wybór firmy i żądanie faktury ujawniają odpowiednie pola, w tym nazwę firmy, NIP i adres.
- Dane nabywcy są kompletne przed utworzeniem opłaconego zamówienia.
- Dokładny zestaw obowiązkowych pól i dokumentów potwierdza księgowy lub prawnik.
- Szczegóły decyzji zapisuje [ADR 0011](../adr/0011-rodzaj-nabywcy-przed-platnoscia.md).

### Pytania techniczne dla Parzeja

1. Jak dynamicznie pokazać właściwe pola dla klienta indywidualnego, firmy oraz żądania faktury, traktując je jako odrębne wybory?
2. Jak walidować NIP i czy weryfikacja ma być wyłącznie składniowa, czy także z zewnętrznym rejestrem?
3. Które dane są przekazywane do systemu płatności, a które pozostają wyłącznie w MM3D?
4. Jak zapisać rodzaj nabywcy i dane dokumentu przy zamówieniu oraz późniejszej korekcie?
5. Jak ograniczyć dostęp do danych nabywcy w widoku sprawy dostępnym bez konta?

## Decyzja 8: akceptacja regulaminu przed Paynow

- Pierwszy formularz tworzy zapytanie ofertowe i nie wymaga akceptacji regulaminu zakupu.
- Klient otrzymuje przy formularzu właściwą informację o prywatności i zasadach przesyłania plików.
- Obowiązkowa akceptacja regulaminu znajduje się w końcowym podsumowaniu wybranego wariantu bezpośrednio przed Paynow.
- Pole nie jest zaznaczone domyślnie.
- Podsumowanie pokazuje wariant, pełną kwotę, dane dostawy, rodzaj nabywcy i żądanie faktury.
- Przejście do Paynow jest możliwe dopiero po złożeniu wymaganych oświadczeń.
- MM3D zachowuje dowód zaakceptowania konkretnej wersji regulaminu.
- Szczegóły decyzji zapisuje [ADR 0012](../adr/0012-akceptacja-regulaminu-przed-paynow.md).

### Pytania techniczne dla Parzeja

1. Jak wersjonować regulamin i jednoznacznie powiązać jego wersję z zamówieniem?
2. Jak utrwalić czas, treść oraz dowód akceptacji bez zbierania nadmiernych danych?
3. Jak obsłużyć sytuację, gdy regulamin zmieni się po wysłaniu wyceny, ale przed płatnością?
4. Które informacje przy pierwszym formularzu są tylko informacją, a które wymagają aktywnego działania klienta?
5. Jak technicznie zablokować przejście do Paynow do czasu spełnienia wszystkich wymaganych warunków?

## Decyzja 9: korekta danych a zmiana wyceny

- Klient może przed Paynow samodzielnie poprawić dane odbiorcy, telefon, e-mail, Paczkomat lub adres oraz dane nabywcy i faktury.
- Samodzielna korekta jest dozwolona tylko wtedy, gdy nie zmienia zakresu, ceny ani terminu wariantu.
- Zmiana wariantu, liczby sztuk, wymiaru, usług dodatkowych albo sposobu dostawy wpływającego na koszt wraca do MM3D.
- MM3D przygotowuje wtedy nową kompletną wersję wyceny i nową możliwość płatności.
- Klient ponownie sprawdza podsumowanie i akceptuje regulamin przed Paynow.
- Szczegóły decyzji zapisuje [ADR 0013](../adr/0013-korekta-danych-a-zmiana-wyceny.md).

### Pytania techniczne dla Parzeja

1. Jak rozdzielić pola edytowalne przez klienta od parametrów wariantu możliwych do zmiany wyłącznie przez MM3D?
2. Jak obsłużyć zmianę Paczkomatu bez nowej wyceny, ale zmianę Paczkomatu na kuriera z nowym kosztem już przez nową wersję?
3. Jak zapisać historię korekt danych bez traktowania ich jak kolejnych wersji wyceny?
4. Jak unieważnić rozpoczętą, ale niepotwierdzoną płatność, jeśli klient wróci i zmieni dane?
5. Które korekty wymagają ponownej akceptacji regulaminu lub podsumowania zgodnie z opinią prawnika?

## Decyzja 10: nieudana lub przerwana płatność

- Odrzucenie, błąd, anulowanie albo przerwanie płatności nie tworzy zamówienia.
- Nieudana próba nie zamyka wybranego ani pozostałych wariantów.
- Klient wraca do wyceny z jasnym komunikatem o niezakończonej płatności.
- Jeżeli wersja nadal jest aktualna i ważna, klient może ponowić płatność za ten sam wariant albo wybrać inny bez kontaktu z MM3D.
- Jeżeli wycena wygasła lub została zastąpiona, ponowienie jest zablokowane.
- Jedno zamówienie powstaje dopiero po pierwszym skutecznym potwierdzeniu pełnej płatności.
- Szczegóły decyzji zapisuje [ADR 0014](../adr/0014-nieudana-platnosc-nie-tworzy-zamowienia.md).

### Pytania techniczne dla Parzeja

1. Które statusy i zdarzenia Paynow odpowiadają anulowaniu, przerwaniu, odrzuceniu oraz błędowi z perspektywy biznesowej?
2. Jak obsłużyć powrót klienta z Paynow, jeśli powiadomienie o statusie dotrze wcześniej albo później?
3. Jak ponowić płatność dla tego samego wariantu bez utworzenia drugiego zamówienia?
4. Jak zachować historię prób i jednocześnie jednoznacznie wskazać, która zakończyła się sukcesem?
5. Jak przed ponowieniem ponownie sprawdzić aktualność wersji i jej siedmiodniowy termin?
6. Jak zapewnić, że wcześniejsza nieudana próba nie może później nieoczekiwanie zmienić się w drugą skuteczną płatność?

## Decyzja 11: oczekiwanie na końcowy wynik Paynow

- Płatność rozpoczęta podczas ważności wyceny może oczekiwać na końcowe potwierdzenie Paynow.
- W stanie oczekiwania zamówienie jeszcze nie istnieje.
- Pozostałe warianty i następne próby płatności są tymczasowo zablokowane.
- Potwierdzenie Paynow tworzy zamówienie również wtedy, gdy ważność wyceny minęła już po rozpoczęciu płatności.
- Termin realizacji biegnie dopiero od potwierdzenia wpłaty.
- Odrzucenie, błąd albo wygaśnięcie usuwa blokadę i przechodzi do zasad nieudanej płatności.
- Szczegóły decyzji zapisuje [ADR 0015](../adr/0015-oczekiwanie-na-potwierdzenie-paynow.md).

### Pytania techniczne dla Parzeja

1. Które statusy Paynow są przejściowe, a które końcowe z punktu widzenia MM3D?
2. Jak długo stan oczekiwania może blokować pozostałe warianty i kto usuwa blokadę po braku końcowego zdarzenia?
3. Jak zapisać czas rozpoczęcia płatności, aby honorować próbę rozpoczętą przed wygaśnięciem wyceny?
4. Jak obsłużyć powiadomienie o potwierdzeniu otrzymane po powrocie klienta, po wygaśnięciu wyceny albo w innej kolejności niż oczekiwana?
5. Jak zapobiec jednoczesnemu rozpoczęciu płatności za dwa warianty?
6. Jak pokazać klientowi stan oczekiwania bez sugerowania, że zamówienie już powstało?

## Decyzja 12: potwierdzenie opłaconego zamówienia

- Dopiero potwierdzenie pełnej płatności przez Paynow tworzy zamówienie i uruchamia oba potwierdzenia dla klienta.
- Klient od razu widzi stronę: **„Płatność otrzymana — zamówienie zostało przyjęte do realizacji”**.
- Jednocześnie otrzymuje automatyczny e-mail z numerem sprawy, wybranym wariantem, zapłaconą kwotą, danymi dostawy i nabywcy oraz potwierdzonym terminem.
- E-mail zawiera instrukcję zgłoszenia problemu albo reklamacji przez odpowiedź w tym samym wątku.
- Nie występuje dodatkowe ręczne potwierdzenie MM3D.
- Szczegóły decyzji zapisuje [ADR 0016](../adr/0016-potwierdzenie-oplaconego-zamowienia.md).

### Pytania techniczne dla Parzeja

1. Jak zagwarantować, że strona sukcesu i e-mail powstają wyłącznie na podstawie wiarygodnego potwierdzenia Paynow, a nie samego powrotu klienta z serwisu płatniczego?
2. Co klient widzi po powrocie z Paynow, gdy końcowe powiadomienie o płatności jeszcze nie dotarło?
3. Jak zapewnić jednokrotne utworzenie zamówienia i wysłanie jednego e-maila przy ponowionych lub dostarczonych w innej kolejności powiadomieniach?
4. Jak bezpiecznie udostępnić stronę potwierdzenia bez konta i nie ujawnić danych dostawy ani nabywcy osobie postronnej?
5. Jak ponowić niedostarczony e-mail bez tworzenia kolejnego zamówienia lub nowego potwierdzenia płatności?
6. Jak utrwalić treść potwierdzenia odpowiadającą dokładnie opłaconemu wariantowi, danym oraz terminowi?

## Decyzja 13: podwójna płatność nie tworzy drugiego zamówienia

- Dla jednego wariantu tej samej sprawy może powstać tylko jedno zamówienie.
- Jeżeli mimo zabezpieczeń Paynow potwierdzi drugą wpłatę za ten sam wariant, nie tworzy ona kolejnego zamówienia.
- MM3D zwraca klientowi nadmiarową wpłatę.
- Drugie zamówienie powstaje wyłącznie po nowym, wyraźnym zleceniu klienta, a nie przez przypadkowe powtórzenie płatności.
- Szczegóły decyzji zapisuje [ADR 0017](../adr/0017-podwojna-platnosc-nie-tworzy-zamowienia.md).

### Pytania techniczne dla Parzeja

1. Jak zapewnić idempotentne utworzenie jednego zamówienia przy dwóch potwierdzonych transakcjach lub powtórzonych powiadomieniach Paynow?
2. Jak odróżnić duplikat powiadomienia tej samej transakcji od rzeczywistej drugiej wpłaty?
3. Jak automatycznie zablokować dalsze płatności po pierwszym potwierdzeniu i mimo to wykryć wpłatę, która przeszła równolegle?
4. Jak oznaczyć drugą wpłatę jako wymagającą zwrotu, nie zmieniając stanu pierwszego zamówienia?
5. Czy zwrot jest inicjowany w panelu MM3D, Paynow czy ręcznie i jak jego wynik trafia do historii sprawy?
6. Jak poinformować klienta o wykryciu i zwrocie drugiej wpłaty bez wysyłania drugiego potwierdzenia zamówienia?

## Decyzja 14: domyślny termin nadania po wpłacie

- Jeżeli wycena nie wskazuje inaczej, MM3D nadaje gotowe zamówienie w ciągu pięciu dni roboczych od potwierdzenia pełnej płatności przez Paynow.
- Konkretna wycena może zawierać inny termin realizacji dla danego wariantu.
- Po opłaceniu wariantu termin wpisany w wycenie zastępuje termin domyślny.
- Termin realizacji oznacza nadanie przesyłki przez MM3D, a nie czas przewozu ani gwarantowaną datę doręczenia przez InPost.
- Szczegóły decyzji zapisuje [ADR 0018](../adr/0018-domyslny-termin-nadania.md).

### Pytania techniczne dla Parzeja

1. Jak reprezentować pięciodniowy termin domyślny i termin nadpisany w konkretnym wariancie wyceny?
2. Jak utrwalić termin obowiązujący w chwili płatności, aby późniejsza zmiana reguły domyślnej nie zmieniła istniejącego zamówienia?
3. Jak liczyć dni robocze, święta i płatności potwierdzone poza godzinami pracy?
4. Czy potwierdzenie zamówienia ma pokazywać konkretną datę graniczną nadania, czy zapis „w ciągu N dni roboczych od wpłaty”?
5. Jak odróżnić termin nadania MM3D od przewidywanej daty doręczenia przekazywanej przez InPost?

## Decyzja 15: Paynow pobiera pełną kwotę wyceny

- Kwota wariantu obejmuje wydruk, wybrane usługi dodatkowe, dostawę i należne podatki.
- Koszt dostawy może być pokazany jako osobna pozycja, ale wchodzi do pełnej kwoty brutto.
- Klient widzi końcowe rozbicie i pełną kwotę przed przejściem do Paynow.
- Paynow pobiera tę jedną pełną kwotę.
- Po płatności nie występują obowiązkowe dopłaty za elementy objęte opłaconym wariantem.
- Zmiana kosztu przed płatnością wymaga nowej kompletnej wersji wyceny.
- Szczegóły decyzji zapisuje [ADR 0019](../adr/0019-pelna-kwota-wyceny.md).

### Pytania techniczne dla Parzeja

1. Jak przechowywać pozycje składowe, podatki i pełną kwotę tak, aby suma przekazana do Paynow zawsze była zgodna z podsumowaniem klienta?
2. Jak zablokować zmianę ceny, dostawy albo usług między końcowym podsumowaniem a utworzeniem płatności?
3. Jak obsłużyć zaokrąglenia cen jednostkowych, podatków i sumy końcowej?
4. Jak utrwalić rozbicie kwoty obowiązujące w chwili płatności dla potwierdzenia, faktury i obsługi reklamacji?
5. Jak wykryć rozbieżność między kwotą potwierdzoną przez Paynow a kwotą aktywnego wariantu i nie utworzyć błędnego zamówienia?

## Decyzja 16: wycena jest przekazywana e-mailem i przez prywatną stronę

- Klient otrzymuje e-mail z numerem sprawy, krótkim podsumowaniem i prywatnym linkiem do strony wyceny.
- Strona jest dostępna bez zakładania konta.
- Pokazuje pełną aktualną wersję wyceny, od jednego do trzech wariantów i przejście do Paynow.
- Wcześniejsze wersje pozostają widoczne wyłącznie do odczytu i nie pozwalają na płatność.
- E-mail nie jest jedynym miejscem przechowywania pełnej wyceny.
- Szczegóły decyzji zapisuje [ADR 0020](../adr/0020-prywatna-strona-wyceny.md).

### Pytania techniczne dla Parzeja

1. Jak udostępnić prywatną stronę bez konta i zabezpieczyć ją przed odgadnięciem adresu, indeksowaniem oraz dostępem do cudzej sprawy?
2. Czy link ma zapewniać sam dostęp, czy potrzebne jest dodatkowe potwierdzenie e-maila lub kod jednorazowy?
3. Jak długo link pozostaje aktywny po wygaśnięciu wyceny i po utworzeniu zamówienia?
4. Jak pokazać historię wersji bez ujawniania nieaktualnych przycisków płatniczych i bez pomylenia ich z wariantami aktualnej wersji?
5. Jak obsłużyć utracony, przekazany dalej albo przejęty link oraz wydać klientowi nowy dostęp?
6. Które dane osobowe można pokazać na stronie przed dodatkowym uwierzytelnieniem?

## Decyzja 17: aktywna wycena może być wycofana tylko wyjątkowo

- Aktywna wycena co do zasady obowiązuje przez pełne siedem dni kalendarzowych.
- MM3D może wycofać ją przed płatnością wyłącznie z wyjątkowej przyczyny, takiej jak oczywisty błąd ceny, niewykonalność projektu, brak materiału albo przeszkoda prawna.
- Wszystkie możliwości płatności wycofanej wersji są natychmiast blokowane.
- Klient otrzymuje niezwłoczną informację o wycofaniu i jego przyczynie.
- Wycofana wersja pozostaje dostępna wyłącznie do odczytu.
- Jeżeli realizacja jest nadal możliwa na zmienionych warunkach, MM3D przesyła poprawioną kompletną wersję wyceny.
- Zasada nie dotyczy zamówienia utworzonego przez potwierdzoną płatność.
- Szczegóły decyzji zapisuje [ADR 0021](../adr/0021-wyjatkowe-wycofanie-aktywnej-wyceny.md).

### Pytania techniczne dla Parzeja

1. Jak atomowo zablokować wszystkie warianty i rozpoczęcie nowych płatności w chwili wycofania wersji?
2. Co zrobić z płatnością rozpoczętą przed wycofaniem, ale jeszcze oczekującą na końcowy wynik Paynow?
3. Jak utrwalić czas, przyczynę i autora wycofania oraz wysłać klientowi jednoznaczną wiadomość?
4. Jak oznaczyć wycofaną wersję na stronie i odróżnić ją od wersji wygasłej lub zastąpionej?
5. Jak utworzyć na jej podstawie poprawioną kompletną wersję bez utraty historii?

## Decyzja 18: jedno przypomnienie przed wygaśnięciem wyceny

- System wysyła jeden automatyczny e-mail 24 godziny przed końcem ważności aktywnej i nieopłaconej wyceny.
- Przypomnienie zachowuje numer sprawy i prowadzi do prywatnej strony wyceny.
- Nie jest wysyłane, jeżeli wycena została opłacona, zastąpiona albo wycofana.
- Nie jest wysyłane, jeżeli rozpoczęta płatność oczekuje na końcowe potwierdzenie Paynow.
- Nie ma kolejnych automatycznych ponagleń po wygaśnięciu.
- Szczegóły decyzji zapisuje [ADR 0022](../adr/0022-przypomnienie-przed-wygasnieciem-wyceny.md).

### Pytania techniczne dla Parzeja

1. Jak zaplanować wysyłkę dokładnie względem wspólnego terminu ważności całej wersji wyceny?
2. Jak ponownie sprawdzić stan tuż przed wysłaniem, aby nie przypomnieć o wycenie właśnie opłaconej, zastąpionej lub wycofanej?
3. Jak wstrzymać przypomnienie dla płatności oczekującej i nie wysłać go później omyłkowo po potwierdzeniu?
4. Jak zagwarantować wysłanie najwyżej jednej wiadomości mimo ponowień zadania lub awarii?
5. Jak odnotować dostarczenie albo błąd e-maila w historii sprawy?

## Decyzja 19: ustalenia e-mailowe obowiązują dopiero w nowej wersji wyceny

- E-mail służy uzgadnianiu szczegółów między klientem i MM3D.
- Sama wiadomość nie zmienia podstawy płatności ani zakresu realizacji.
- Uzgodniona zmiana obowiązuje dopiero po ujęciu jej przez MM3D w nowej kompletnej wersji wyceny.
- Klient płaci za aktualny wariant widoczny na stronie, zawierający cały zakres, cenę, termin i pozostałe warunki.
- Potwierdzenie zamówienia utrwala dokładnie opłaconą wersję i wariant.
- Szczegóły decyzji zapisuje [ADR 0023](../adr/0023-email-nie-zmienia-wyceny.md).

### Pytania techniczne dla Parzeja

1. Jak utrwalić niezmienny zapis opłaconej wersji i wariantu niezależnie od późniejszej edycji roboczych danych sprawy?
2. Jak oznaczyć w korespondencji, że proponowana zmiana nie obowiązuje do czasu wysłania nowej wersji?
3. Jak wygenerować nową kompletną wersję na podstawie ustaleń bez pominięcia innych nadal obowiązujących warunków?
4. Jak powiązać wiadomość o zmianie z właściwą wersją i pokazać klientowi, że powinien ponownie sprawdzić całość?
5. Jak zapobiec płatności za poprzednią wersję w chwili publikowania nowej?

## Decyzja 20: prywatna strona po płatności pokazuje trwałe podsumowanie

- Po potwierdzeniu pełnej płatności prywatna strona wyceny staje się trwałym podsumowaniem opłaconego zamówienia.
- Pokazuje komunikat: **„Dziękujemy za opłacenie zamówienia. Zlecenie zostało przyjęte do realizacji”**.
- Wybrany wariant jest oznaczony jako opłacony, a pozostałe jako zamknięte.
- Strona pokazuje numer sprawy, zapłaconą kwotę, termin nadania oraz dane dostawy i nabywcy.
- Nie pozwala rozpocząć kolejnej płatności.
- Ponowne otwarcie prywatnego linku prowadzi do tego samego podsumowania.
- Strona nie jest panelem śledzenia realizacji.
- Szczegóły decyzji zapisuje [ADR 0024](../adr/0024-strona-po-platnosci.md).

### Pytania techniczne dla Parzeja

1. Jak zmienić widok wyceny w podsumowanie dopiero po wiarygodnym potwierdzeniu Paynow i bez przejściowego pokazania fałszywego sukcesu?
2. Jak zachować niezmienny zapis opłaconego wariantu, kwoty, terminu oraz danych mimo późniejszych zmian operacyjnych?
3. Jak zablokować wszystkie działania płatnicze, w tym bezpośrednie wcześniej zapisane adresy?
4. Jak bez konta zabezpieczyć ponowny dostęp do danych dostawy i nabywcy na trwałym podsumowaniu?
5. Jak długo podsumowanie ma być dostępne i jak później ograniczyć albo anonimizować dane zgodnie z retencją?

## Decyzja 21: błąd e-maila nie wpływa na ważność zamówienia

- Zamówienie powstaje na podstawie potwierdzenia pełnej płatności przez Paynow, a nie dostarczenia e-maila.
- Niedostarczenie automatycznego potwierdzenia nie unieważnia zamówienia i nie przesuwa terminu realizacji.
- Prywatna strona nadal pokazuje trwałe podsumowanie opłaconego zamówienia.
- System ponawia wysłanie wiadomości.
- Po trwałym błędzie dostarczenia MM3D otrzymuje informację wymagającą obsługi.
- Ponowienie e-maila nie tworzy kolejnego zamówienia ani drugiego potwierdzenia płatności.
- Szczegóły decyzji zapisuje [ADR 0025](../adr/0025-blad-emaila-nie-uniewaznia-zamowienia.md).

### Pytania techniczne dla Parzeja

1. Ile razy i w jakich odstępach ponawiać wysyłkę po błędzie przejściowym?
2. Które odpowiedzi dostawcy poczty uznać za błąd trwały i jak powiadomić o nim MM3D?
3. Jak zapewnić idempotentne ponowienie tej samej wiadomości bez uruchamiania logiki tworzenia zamówienia?
4. Czy panel MM3D ma pozwalać na ręczne ponowienie wysyłki i korektę oczywistej literówki w adresie?
5. Jak bezpiecznie przekazać klientowi nowy prywatny link, jeżeli pierwotny e-mail nie dotarł?

## Decyzja 22: utracony prywatny link jest zastępowany nowym

- Klient może odzyskać dostęp bez zakładania konta.
- Prośbę wysyła z adresu e-mail przypisanego do sprawy.
- MM3D weryfikuje prośbę przed wydaniem nowego linku.
- Nowy link prowadzi do właściwej wyceny albo podsumowania opłaconego zamówienia.
- Po wydaniu nowego dostępu poprzedni link przestaje działać.
- Szczegóły decyzji zapisuje [ADR 0026](../adr/0026-odzyskanie-prywatnego-linku.md).

### Pytania techniczne dla Parzeja

1. Jak przeprowadzić wystarczającą weryfikację prośby wysłanej z adresu przypisanego do sprawy bez tworzenia konta?
2. Czy nowy link może być wydawany automatycznie, czy wymaga działania MM3D?
3. Jak atomowo unieważnić wszystkie wcześniejsze linki i zachować historię ich wymiany?
4. Jak ograniczyć liczbę prób odzyskania i chronić proces przed przejęciem dostępu lub nadużyciem?
5. Jak obsłużyć legalną zmianę adresu e-mail klienta, której nie można potwierdzić z pierwotnej skrzynki?
