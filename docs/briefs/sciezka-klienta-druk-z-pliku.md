# Ścieżka klienta — druk z gotowego pliku

Status: główna ścieżka potwierdzona przez Górasa 11 sierpnia 2026 i rozwijana w sesji procesu zamówienia od 15 sierpnia 2026. Drugoplanową ścieżkę „Nie masz modelu? Opisz swój pomysł” opisuje osobny dokument [Ścieżka klienta — modelowanie od zera](sciezka-klienta-modelowanie.md). Techniczny sposób realizacji integracji, limitów i automatyzacji pozostaje do potwierdzenia przez Parzeja.

## Cel ścieżki

Podstawowym działaniem na stronie jest przesłanie kompletnego zapytania o przystępny cenowo druk gotowego modelu. Formularz nie może wymagać od hobbysty wiedzy technicznej. MM3D analizuje plik, dobiera technologię oraz materiał i odpowiada wyceną albo prośbą o doprecyzowanie.

## Wejście ze strony głównej

Strona główna rozdziela dwie potrzeby:

1. Dominujący przycisk **„Wyślij plik do wyceny”** prowadzi do osobnej podstrony formularza druku z gotowego pliku.
2. Drugoplanowy przycisk **„Nie masz modelu? Opisz swój pomysł”** prowadzi do osobnej [ścieżki modelowania od zera](sciezka-klienta-modelowanie.md).

Pierwsza ścieżka jest zapytaniem ofertowym, a nie automatycznie złożonym zamówieniem.

## Formularz druku z gotowego pliku

### Pliki i zakres jednego zapytania

- Obsługiwane formaty modeli: STL, OBJ i 3MF.
- Klient może przesłać kilka plików tylko wtedy, gdy tworzą jeden powiązany komplet, na przykład zestaw żołnierzyków albo części jednego przedmiotu.
- Niezależne modele wymagają osobnych zapytań i wycen.
- Pliki są dodawane oddzielnie. Archiwum ZIP nie należy do pierwszej wersji.
- Przy każdym zapytaniu klient otrzymuje krótkie objaśnienie różnicy między kompletem a niezależnymi modelami.

### Ilość

- W pierwszej wersji klient wpisuje dokładną liczbę sztuk.
- Porównywanie wariantów ilościowych zostaje wyłączone w podstawowym formularzu, aby nie komplikować ścieżki klienta indywidualnego.
- Przyszły wariant dla klientów biznesowych może pozwolić wybrać maksymalnie dwa zakresy ilościowe do osobnej, indywidualnej kalkulacji.
- Zakres ilościowy nigdy nie oznacza stałego, publicznego progu cenowego. Cena jednostkowa zależy od konkretnego modelu, rozmiaru i stopnia skomplikowania.

### Technologia i materiał

- Domyślną opcją jest **„Dobierz technologię za mnie”**.
- Klient może opcjonalnie wskazać FDM albo SLA, ale formularz nie wymaga od niego znajomości różnic technicznych.
- Klient nie wybiera ani nie sugeruje materiału. Opisuje zastosowanie i warunki pracy przedmiotu, a MM3D dobiera materiał.

### Rozmiar modelu

- Klient podaje jeden wymiar referencyjny i wybiera, czy jest to wysokość, szerokość, czy długość.
- Pozostałe wymiary są skalowane proporcjonalnie.
- Formularz nie używa pojęcia „najdłuższy bok”.
- Przypadki techniczne lub nietypowe gabarytowo wymagają ręcznej oceny.

Na stronie można podać przestrzenie robocze posiadanych drukarek:

- [Bambu Lab H2S](https://eu.store.bambulab.com/en/products/h2s): 340 × 320 × 340 mm;
- [ELEGOO Saturn 4 Ultra 12K](https://eu.elegoo.com/collections/elegoo-products/products/saturn-4-ultra-12k-10inch-monochrome-lcd-resin-3d-printer): 218,88 × 122,88 × 220 mm.

Wartości muszą być opisane jako przestrzeń robocza drukarki, a nie gwarantowany maksymalny wymiar modelu jednoelementowego. Rzeczywista wykonalność zależy między innymi od geometrii, orientacji i podpór i wymaga analizy pliku.

### Zastosowanie i oczekiwane właściwości

Klient wybiera jedną główną kategorię, aby wskazać przeznaczenie modelu i najważniejsze oczekiwane cechy:

- figurka lub dekoracja;
- element gry albo modelarstwa;
- część użytkowa;
- obudowa;
- część mechaniczna lub ruchoma;
- prototyp;
- inne.

Po wyborze kategorii formularz pokazuje w pierwszej kolejności dopasowane pytania pomocnicze, na przykład:

- dla figurki lub dekoracji — drobne detale, gładka powierzchnia, przygotowanie do malowania i odporność na upadek;
- dla elementu gry albo modelarstwa — detale, malowanie, częste dotykanie i odporność na uszkodzenia;
- dla części użytkowej albo obudowy — temperatura, wilgoć, promieniowanie UV, obciążenie, sztywność i elastyczność;
- dla części mechanicznej lub ruchomej — tarcie, zużycie, uderzenia, obciążenie i dokładność wymiarowa;
- dla prototypu — dokładność wymiarowa, sztywność, elastyczność i oczekiwany wygląd powierzchni.

Klient może rozwinąć pełną opcjonalną listę wielokrotnego wyboru niezależnie od wybranej kategorii. Obejmuje ona:

- warunki zewnętrzne lub promieniowanie UV;
- wilgoć albo kontakt z wodą;
- wysoką temperaturę, z polem na przewidywaną temperaturę w °C;
- olej, paliwo lub chemikalia;
- duże obciążenie albo nacisk;
- uderzenie lub upadek, z polem na orientacyjną wysokość;
- tarcie i zużycie;
- elastyczność;
- sztywność;
- dokładność wymiarową;
- drobne detale;
- powierzchnię przeznaczoną do malowania;
- inne warunki z opisem.

Na końcu sekcji znajduje się pole „Dodatkowe informacje”. Dzięki temu zastosowanie pomaga dobrać pytania, ale nie ogranicza klienta do typowych warunków dla danej kategorii.

### Kolor

- Lista wyboru obejmuje: szary, czarny, biały, bez preferencji oraz inny kolor z polem tekstowym.
- Szary jest kolorem standardowym.
- Inny kolor jest potwierdzany w wycenie i może zmienić cenę albo wydłużyć termin realizacji.

### Usługi dodatkowe po wydruku

W głównym formularzu „Wyślij plik do wyceny” klient może niezależnie zaznaczyć trzy dodatkowo płatne usługi:

- usuwanie podpór;
- szlifowanie wydruku;
- malowanie modelu.

Każda opcja jest wybierana osobno. Nie jest automatycznie wliczana w podstawową cenę druku, a jej dokładny zakres i cena są potwierdzane w wycenie. Malowanie modelu jest odrębną usługą od wyboru koloru materiału.

### Priorytet i oczekiwany termin

Klient obowiązkowo wybiera jeden priorytet:

- możliwie niska cena;
- najlepszy wygląd i detale;
- wytrzymałość;
- możliwie najkrótszy termin.

Nie ma opcji „dobierz najlepszy kompromis”, ponieważ nie określa ona jednoznacznie oczekiwań klienta.

Po wybraniu możliwie najkrótszego terminu pojawia się opcjonalne pole **„Potrzebuję wydruku najpóźniej do…”**. Wpisana data jest oczekiwaniem klienta, a nie gwarantowanym terminem. Staje się zobowiązaniem dopiero po potwierdzeniu w wycenie.

### Dane kontaktowe

- imię albo pseudonim — obowiązkowe;
- adres e-mail — obowiązkowy;
- numer telefonu — opcjonalny;
- preferowany kontakt telefoniczny można wybrać tylko po podaniu numeru telefonu.

Założenie konta i podawanie pełnego nazwiska nie są wymagane.

## Po wysłaniu formularza

Klient widzi krótkie potwierdzenie na stronie oraz otrzymuje automatyczną wiadomość e-mail zawierającą:

- jeden numer sprawy obowiązujący od zapytania do zamówienia;
- podsumowanie wszystkich podanych informacji;
- nazwy przesłanych załączników;
- informację, że MM3D odpowie maksymalnie w ciągu dwóch dni roboczych.

Pierwsza wersja nie udostępnia konta klienta ani panelu do samodzielnego poprawiania wysłanego zapytania. Ewentualne uzupełnienia odbywają się przez odpowiedź na wiadomość z zachowaniem numeru sprawy.

## Ocena zapytania przez MM3D

W ciągu maksymalnie dwóch dni roboczych od otrzymania zapytania MM3D wysyła jeden z trzech wyników:

1. gotową wycenę;
2. prośbę o doprecyzowanie;
3. informację, że realizacja nie jest możliwa, wraz z przyczyną i — jeśli to możliwe — sugestią dalszego rozwiązania.

Dwa dni robocze oznaczają czas reakcji MM3D, a nie czas zakończenia wszystkich uzgodnień ani wykonania wydruku. Jeżeli MM3D poprosi o brakującą informację, termin zatrzymuje się po wysłaniu pytania i biegnie ponownie od odpowiedzi klienta zawierającej dane potrzebne do następnego działania. Każda taka reakcja MM3D kończy się wyceną, kolejnym koniecznym pytaniem albo odmową realizacji.

Jeżeli klient nie odpowiada na konieczne pytanie, po 5 dniach roboczych MM3D wysyła jedno przypomnienie. Po kolejnych 5 dniach roboczych bez odpowiedzi sprawa zostaje wstrzymana i nie wymaga dalszego działania MM3D. Klient może wznowić ją późniejszą odpowiedzią w tym samym wątku i z tym samym numerem sprawy. Wtedy ponownie rozpoczyna się dwudniowy czas reakcji MM3D, ale wcześniejsze rozmowy nie gwarantują ceny, terminu ani dostępności przyszłej wyceny.

## Zawartość wyceny

Wycena może zawierać od jednego do maksymalnie trzech równolegle dostępnych wariantów wykonania, na przykład druk w jednym elemencie, model podzielony na części lub opcję rozszerzoną o malowanie. Każdy wariant zawiera:

- nazwę i podgląd modelu;
- liczbę sztuk i wymiar referencyjny;
- dobraną technologię, materiał i kolor;
- zakres wybranych usług dodatkowych: usuwania podpór, szlifowania albo malowania;
- łączną cenę brutto;
- przy większej liczbie sztuk także cenę jednostkową;
- koszt dostawy jako osobną pozycję;
- przewidywany czas wykonania i wysyłki;
- ograniczenia oraz opis oczekiwanego rezultatu;
- informację o ważności przez siedem dni kalendarzowych;
- własny przycisk lub link **„Wybieram ten wariant i płacę”** prowadzący do płatności Paynow za ten wariant aktualnej wersji wyceny;
- informację, że skuteczna płatność oznacza akceptację wszystkich warunków wybranego wariantu, zamknięcie pozostałych wariantów sprawy i utworzenie zamówienia.

Po upływie siedmiu dni wycena pozostaje widoczna dla klienta wyłącznie do odczytu, a wszystkie jej możliwości płatności są nieaktywne. Klient widzi komunikat **„Wycena wygasła — poproś o jej aktualizację”** i może jednym działaniem wysłać taką prośbę do MM3D. Wycena nie jest przedłużana automatycznie. MM3D ponownie sprawdza cenę i dostępny termin, po czym wysyła identyczną albo zmienioną nową wersję, która ponownie umożliwia płatność.

Wszystkie warianty jednej aktualnej wersji mają wspólny okres ważności. Dodanie wariantu, korekta albo zmiana ustaleń powoduje wysłanie kompletnej nowej wersji ze wszystkimi nadal oferowanymi wariantami. Jej wysłanie rozpoczyna nowy siedmiodniowy okres dla całego zestawu, pod warunkiem że MM3D ponownie potwierdziło ceny i terminy każdej pokazanej opcji.

## Akceptacja i utworzenie zamówienia

- Klient nie akceptuje wyceny osobną odpowiedzią e-mail.
- MM3D wysyła wycenę razem z możliwością zapłaty przez Paynow.
- Skuteczna pełna płatność przypisana do aktualnej wersji wyceny jednocześnie oznacza jej akceptację i tworzy opłacone zamówienie.
- Jeżeli wycena zawiera kilka wariantów, klient może wracać do każdego z nich w okresie ważności i wybiera jeden przez płatność.
- Płatność za jeden wariant zamyka pozostałe warianty tej sprawy, aby z jednego zapytania nie powstały przypadkowo dwa zamówienia.
- Po upływie siedmiu dni klient nie może zapłacić na podstawie tej wyceny bez ponownego potwierdzenia warunków przez MM3D.
- Nowa alternatywa wykonania może zostać dodana jako kolejny wariant. Korekta albo zmiana istniejących ustaleń powoduje natomiast przygotowanie nowej, kompletnej wersji wyceny, która zastępuje poprzednią jako podstawa płatności.
- Wszystkie wiadomości zachowują jeden numer sprawy w tytule, na przykład `[MM3D-2026-0001]`.

## Płatność

- Wymagana jest pełna płatność przed rozpoczęciem druku; jest ona zarazem akceptacją aktualnej wyceny.
- Po wybraniu wariantu, bezpośrednio przed przejściem do Paynow, klient podaje albo potwierdza komplet danych potrzebnych do wysyłki: imię i nazwisko odbiorcy, adres e-mail, numer telefonu oraz numer Paczkomatu albo pełny adres dla kuriera.
- W tym samym kroku wybiera zakup prywatny albo zakup na firmę. Przy zakupie firmowym podaje nazwę firmy, NIP i adres; dokładny zestaw danych do dokumentu sprzedaży potwierdzi księgowy lub prawnik.
- Klient przechodzi do Paynow dopiero po uzupełnieniu danych dostawy i zobaczeniu końcowego podsumowania wybranego wariantu oraz pełnej kwoty.
- Potwierdzony czas realizacji biegnie od otrzymania płatności.
- Docelową metodą płatności jest [Paynow](https://www.mbank.pl/firmy/system-platnosci-online-paynow/) powiązane z firmowym rachunkiem mBanku.
- Klient powinien móc zapłacić przez Paynow między innymi BLIK-iem, szybkim przelewem albo kartą.
- Zwykły przelew bankowy pozostaje metodą awaryjną.

Oczekiwaniem biznesowym jest integracja Paynow ze stroną MM3D. [Paynow udostępnia API i powiadomienia o zmianach statusu płatności](https://docs.paynow.pl/pl/docs/v3/integration/). Prywatny panel MM3D powinien przechowywać przy numerze sprawy pełny zestaw danych operacyjnych płatności:

- kwotę;
- datę;
- identyfikator transakcji Paynow;
- aktualny status płatności.

Ten rejestr służy obsłudze zamówień i uzgadnianiu płatności. Nie jest sam w sobie pełną księgowością ani dokumentem sprzedaży. Sposób bezpiecznej integracji API, odbierania powiadomień o statusie i przechowywania danych musi potwierdzić Parzej.

## Dostawa

- W zapytaniu klient wybiera jedynie sposób dostawy.
- Dostępne opcje to Paczkomat InPost i kurier InPost.
- MM3D nie oferuje odbioru osobistego.
- Dokładny adres albo wybrany Paczkomat, imię i nazwisko odbiorcy, adres e-mail i numer telefonu klient podaje lub potwierdza po wybraniu wariantu i bezpośrednio przed płatnością Paynow.
- Klient nie zamawia i nie opłaca samodzielnie przesyłki InPost oraz nie przekazuje MM3D kodu nadania.
- MM3D zamawia wysyłkę i wybiera jej gabaryt na podstawie wymiarów gotowego produktu, zabezpieczenia oraz pudełka.
- Koszt dostawy jest osobną pozycją wyceny.

## Wiadomości po płatności i wysyłka

- MM3D wysyła jedną wiadomość: **„Płatność otrzymana — zamówienie przyjęte do realizacji”**.
- MM3D nie wysyła osobnej wiadomości „Wydruk gotowy”.
- Informację o nadaniu i numer śledzenia przekazuje automatycznie InPost e-mailem i SMS-em.
- Jeżeli podany termin jest zagrożony, MM3D kontaktuje się z klientem, wyjaśnia opóźnienie i podaje nową przewidywaną datę.

Na końcu potwierdzenia płatności należy umieścić instrukcję reklamacyjną w rodzaju:

> Jeśli po otrzymaniu przesyłki chcesz zgłosić problem lub reklamację, odpowiedz na tę wiadomość, pozostawiając numer sprawy w tytule. Opisz problem i, jeśli to możliwe, dołącz zdjęcia.

W pierwszej wersji nie powstaje osobny formularz reklamacyjny.

## Stany głównej ścieżki

1. Formularz w przygotowaniu.
2. Zapytanie wysłane.
3. Zapytanie wymaga doprecyzowania albo jest oceniane.
4. Aktualna wycena wysłana — oczekiwanie na płatność.
5. Wycena zmieniona, zastąpiona albo wygasła — brak możliwości zapłaty na jej podstawie.
6. Płatność potwierdzona — wycena zaakceptowana, zamówienie utworzone i przyjęte do realizacji.
7. Realizacja.
8. Przesyłka nadana przez InPost.
9. Sprawa zakończona albo problem zgłoszony w tym samym wątku e-mail.

Nazwy i techniczna reprezentacja stanów nie są jeszcze decyzją architektoniczną; Parzej powinien je zweryfikować przed implementacją.

## Do potwierdzenia przez Parzeja

- bezpieczne formaty, rozmiary i limity liczby załączników;
- walidacja kompletu plików i komunikaty błędów;
- sposób generowania numeru sprawy;
- wysyłka automatycznych wiadomości i zachowanie wątku e-mail;
- integracja Paynow, obsługa statusów oraz zakres danych panelu MM3D;
- sposób pobierania danych dostawy i integracji z InPost;
- prywatność, wymagane zgody i retencja danych;
- techniczna reprezentacja stanów zapytania, wyceny, płatności i realizacji.

## Powiązana ścieżka

Decyzje dotyczące formularza „Nie masz modelu? Opisz swój pomysł” są prowadzone w dokumencie [Ścieżka klienta — modelowanie od zera](sciezka-klienta-modelowanie.md).
