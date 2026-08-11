# Ścieżka klienta — druk z gotowego pliku

Status: decyzje biznesowe Górasa potwierdzone 11 sierpnia 2026. Sesja została przerwana po pytaniu 39, a przed jej wznowieniem dodano do głównej ścieżki trzy usługi dodatkowe: usuwanie podpór, szlifowanie i malowanie. Następną sesję grillowania należy rozpocząć od pytania 40 i przejść do drugoplanowej ścieżki „Nie masz modelu? Opisz swój pomysł”. Techniczny sposób realizacji integracji, limitów i automatyzacji pozostaje do potwierdzenia przez Parzeja.

## Cel ścieżki

Podstawowym działaniem na stronie jest przesłanie kompletnego zapytania o przystępny cenowo druk gotowego modelu. Formularz nie może wymagać od hobbysty wiedzy technicznej. MM3D analizuje plik, dobiera technologię oraz materiał i odpowiada wyceną albo prośbą o doprecyzowanie.

## Wejście ze strony głównej

Strona główna rozdziela dwie potrzeby:

1. Dominujący przycisk **„Wyślij plik do wyceny”** prowadzi do osobnej podstrony formularza druku z gotowego pliku.
2. Drugoplanowy przycisk **„Nie masz modelu? Opisz swój pomysł”** prowadzi do ścieżki modelowania od zera. Jej szczegóły zostaną ustalone od pytania 40.

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

W ciągu maksymalnie dwóch dni roboczych MM3D wysyła jeden z trzech wyników:

1. gotową wycenę;
2. prośbę o doprecyzowanie;
3. informację, że realizacja nie jest możliwa, wraz z przyczyną i — jeśli to możliwe — sugestią dalszego rozwiązania.

Dwa dni robocze oznaczają czas odpowiedzi na kompletne zapytanie, a nie czas wykonania wydruku.

## Zawartość wyceny

Wycena zawiera:

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
- instrukcję akceptacji.

Po upływie siedmiu dni MM3D musi ponownie potwierdzić cenę i dostępny termin.

## Akceptacja i utworzenie zamówienia

- Klient akceptuje wycenę przez odpowiedź na wiadomość e-mail.
- Wiadomości zachowują jeden numer sprawy w tytule, na przykład `[MM3D-2026-0001]`.
- Zwykła odpowiedź e-mail jest celowym uproszczeniem pierwszej wersji. Bezpieczny link akceptacyjny można rozważyć później.
- Po jednoznacznej akceptacji MM3D potwierdza zamówienie i przekazuje instrukcję płatności.

## Płatność

- Wymagana jest pełna przedpłata przed rozpoczęciem druku.
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
- Dokładny adres albo wybrany Paczkomat klient podaje dopiero po zaakceptowaniu wyceny.
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
4. Wycena wysłana.
5. Wycena zaakceptowana.
6. Oczekiwanie na przedpłatę.
7. Płatność potwierdzona — zamówienie przyjęte do realizacji.
8. Realizacja.
9. Przesyłka nadana przez InPost.
10. Sprawa zakończona albo problem zgłoszony w tym samym wątku e-mail.

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

## Punkt wznowienia

Następna sesja grillowania zaczyna się od **pytania 40**:

> Czy drugoplanowy przycisk „Nie masz modelu? Opisz swój pomysł” ma prowadzić do oddzielnego formularza modelowania od zera, w którym MM3D najpierw ocenia wykonalność i zakres pracy, a dopiero później przedstawia wycenę modelowania oraz wydruku?

Rekomendacja pozostaje taka, aby modelowanie miało osobny, mniej eksponowany formularz i nie obiecywało natychmiastowej wyceny.
