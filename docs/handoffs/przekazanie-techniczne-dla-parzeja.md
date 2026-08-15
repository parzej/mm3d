# Przekazanie techniczne dla Parzeja

Status: pierwsza wersja przygotowana 12 sierpnia 2026 po zamknięciu sesji biznesowej Górasa. Dokument nie zastępuje decyzji architektonicznych Parzeja; zbiera wymagania biznesowe i wskazuje miejsca wymagające jego potwierdzenia.

## Cel pierwszej wersji

Serwis ma pozwolić hobbyście albo osobie prywatnej:

1. zrozumieć ofertę MM3D;
2. wybrać jedną z dwóch ścieżek;
3. przesłać kompletne zapytanie z załącznikami;
4. otrzymać numer sprawy i potwierdzenie e-mail;
5. zaakceptować późniejszą wycenę przez pełną płatność Paynow;
6. otrzymać potwierdzenie utworzenia opłaconego zamówienia, a następnie przesyłkę przez InPost.

Główna ścieżka to **„Wyślij plik do wyceny”**. Drugoplanowa ścieżka to **„Nie masz modelu? Opisz swój pomysł”**. Portfolio nie tworzy trzeciej ścieżki i nie zawiera przycisku do podobnej wyceny.

## Dokumenty źródłowe

- [Kierunek oferty i serwisu WWW](../briefs/kierunek-oferty-i-serwisu-www.md)
- [Ścieżka druku z gotowego pliku](../briefs/sciezka-klienta-druk-z-pliku.md)
- [Ścieżka modelowania od zera](../briefs/sciezka-klienta-modelowanie.md)
- [Plan dalszych działań](../plans/plan-dalszych-dzialan.md)
- [Zasady tworzenia portfolio](../guides/zasady-tworzenia-portfolio.md)
- [ADR: statyczny SvelteKit z backendem PHP](../adr/0001-static-sveltekit-with-php-on-lh.md)
- [ADR: jeden adaptacyjny interfejs](../adr/0004-adaptacyjny-interfejs-dla-roznych-urzadzen.md)
- [Makieta i teksty strony v1](../website/makieta-i-teksty-v1.md)

## Rama techniczna już przyjęta

- Svelte 5 ze składnią legacy Svelte 4, SvelteKit i TypeScript;
- statyczny frontend przez `@sveltejs/adapter-static`;
- instalowalna PWA z treściami możliwymi do odczytu offline;
- formularze wymagające sieci, bez kolejkowania plików offline;
- backend PHP 8 do walidacji, uploadu, numerów spraw i powiadomień;
- minimalne metadane w MySQL;
- załączniki poza publicznym katalogiem WWW;
- hosting współdzielony LH.pl i wdrożenie przez GitHub Actions;
- jeden adaptacyjny interfejs od 320 CSS px, bez poziomego przewijania całej strony;
- pełna równoważność funkcji na telefonie, tablecie i komputerze;
- obsługa dotyku, myszy i klawiatury;
- WCAG 2.2 AA.

## Proponowana mapa tras

| Trasa | Cel | Priorytet |
|---|---|---|
| `/` | Oferta, dwie ścieżki, proces, usługi, portfolio, FAQ | P0 |
| `/wycena-druku` | Formularz druku z gotowego pliku | P0 |
| `/modelowanie` | Formularz modelowania od zera | P0 |
| `/potwierdzenie` | Potwierdzenie przyjęcia zapytania | P0 |
| `/portfolio` | Jedna galeria realizacji bez cen i CTA do wyceny | P1 |
| `/faq` | Rozwinięte odpowiedzi pomocnicze | P1 |
| `/kontakt` | Dane kontaktowe i sposób kontaktu | P1 |
| `/regulamin` | Dokument zatwierdzony przez prawnika | P0 przed produkcją |
| `/polityka-prywatnosci` | Dokument zatwierdzony przez prawnika | P0 przed produkcją |

Makieta HTML używa kotwic i osobnych plików tylko do szybkiego testu treści. Docelowy podział tras potwierdza Parzej.

## Formularz „Wyślij plik do wyceny”

### Dane obowiązkowe biznesowo

- co najmniej jeden plik STL, OBJ albo 3MF;
- dokładna liczba sztuk;
- jeden wymiar referencyjny: wysokość, szerokość albo długość;
- zastosowanie i warunki użytkowania;
- jeden priorytet: niska cena, wygląd i detale, wytrzymałość albo krótki termin;
- imię lub pseudonim;
- adres e-mail;
- sposób dostawy: Paczkomat InPost albo kurier InPost;
- dostęp do informacji o prywatności i zasadach przesyłania plików bez wymagania akceptacji regulaminu zakupu na etapie zapytania.

### Dane opcjonalne

- preferencja FDM, SLA albo „dobierz za mnie”;
- kolor: szary, czarny, biały, bez preferencji albo inny;
- usuwanie podpór, szlifowanie, malowanie;
- oczekiwana data przy priorytecie krótkiego terminu;
- numer telefonu i preferowany kontakt telefoniczny;
- dodatkowe informacje.

### Reguły biznesowe

- kilka plików może tworzyć jeden powiązany komplet; niezależne modele wymagają osobnych zapytań;
- brak ZIP w pierwszej wersji;
- klient nie musi znać materiału ani technologii;
- szary jest kolorem standardowym;
- data oczekiwana nie jest terminem gwarantowanym przed potwierdzeniem w wycenie;
- wysłanie formularza tworzy zapytanie, nie zamówienie.

## Formularz „Nie masz modelu? Opisz swój pomysł”

### Dane wejściowe

- szeroki opis przedmiotu i sposobu użycia;
- szacunkowe wymiary;
- oczekiwana liczba wydruków;
- opcjonalne zdjęcia, szkice, rysunki techniczne, blueprinty i dokumentacja wymiarowa;
- opcja „Mam przedmiot, który mogę wysłać do pomiarów”;
- opcjonalne zainteresowanie usuwaniem podpór, szlifowaniem albo malowaniem;
- opcja „Potrzebuję wyłączności lub poufności”;
- opcja „Projekt poufny — nie publikuj zdjęć ani renderów realizacji”;
- dane kontaktowe i akceptacje prawne.

### Reguły biznesowe

- formularz przypomina prostą wiadomość, nie pełną specyfikację techniczną;
- fizyczny przedmiot jest wysyłany dopiero po potwierdzeniu MM3D;
- kluczowe ustalenia są potwierdzane e-mailem;
- standard obejmuje dwie tury poprawek, prototyp wstępny i prototyp finalny;
- standardowy model jest niewyłączny; wyłączność jest osobno wyceniana;
- plik produkcyjny jest przekazywany z ostatnim elementem realizacji;
- pliki edytowalne, np. BLEND lub STEP, nie są częścią standardowego rezultatu.

## Wynik wysłania formularza

Backend powinien atomowo:

1. zweryfikować pola i wszystkie załączniki;
2. utworzyć niepowtarzalny numer sprawy, np. `[MM3D-2026-0001]`;
3. zapisać minimalne metadane;
4. zapisać załączniki poza katalogiem publicznym;
5. wysłać klientowi e-mail z podsumowaniem i nazwami załączników;
6. powiadomić Górasa o nowym zapytaniu;
7. zwrócić bezpieczną stronę potwierdzenia bez ujawniania danych innej sprawy.

Treść potwierdzenia: MM3D odpowie na kompletne zapytanie maksymalnie w ciągu dwóch dni roboczych. Uzupełnienia odbywają się przez odpowiedź e-mail z zachowaniem numeru sprawy.

## Stany procesu do technicznego potwierdzenia

1. szkic formularza;
2. zapytanie przyjęte;
3. wymaga doprecyzowania;
4. aktualna wycena wysłana — oczekiwanie na płatność;
5. wycena zastąpiona albo wygasła;
6. płatność potwierdzona — wycena zaakceptowana i zamówienie utworzone;
7. realizacja;
8. przesyłka nadana;
9. zakończone albo reklamacja w tym samym wątku.

Parzej powinien zdecydować, które stany są zapisywane w bazie, które są tylko wynikiem komunikacji e-mail i jak obsłużyć ponowienia operacji bez duplikowania spraw, płatności lub wiadomości.

## Płatność

- docelowo Paynow z BLIK-iem, szybkim przelewem i kartą;
- zwykły przelew jako metoda awaryjna;
- pełna płatność Paynow jest jednocześnie akceptacją aktualnej wyceny i utworzeniem zamówienia przed drukiem z gotowego pliku;
- modelowanie: 50% przed startem i 50% po poprawkach, przed prototypem finalnym;
- większa seria: osobna płatność po akceptacji prototypu finalnego;
- przy sprawie zapisywane są co najmniej kwota, data, identyfikator transakcji i status Paynow;
- webhooki muszą być weryfikowane, idempotentne i rejestrowane bez danych wrażliwych w logach.

Panel MM3D jest prywatnym narzędziem operacyjnym, nie kontem klienta i nie pełną księgowością.

## Dostawa

- tylko Paczkomat InPost albo kurier InPost;
- brak odbioru osobistego;
- w pierwszym formularzu klient wybiera wyłącznie metodę;
- adres albo konkretny Paczkomat, imię i nazwisko odbiorcy, adres e-mail i numer telefonu są zbierane lub potwierdzane po wyborze wariantu i bezpośrednio przed płatnością Paynow;
- klient nie kupuje przesyłki i nie przekazuje kodu nadania; MM3D zamawia dostawę oraz wybiera gabaryt po ustaleniu wielkości zabezpieczonego produktu i opakowania;
- koszt dostawy jest osobną pozycją wyceny;
- numer śledzenia przekazuje InPost e-mailem i SMS-em.

Parzej potwierdza, czy pierwsza wersja integruje API InPost, czy Góras realizuje nadanie w zewnętrznym narzędziu InPost.

## Załączniki, prywatność i retencja

Do decyzji technicznej i prawnej pozostają osobne klasy danych:

| Klasa | Oczekiwane użycie | Wymagana decyzja |
|---|---|---|
| Załączniki do niezrealizowanego zapytania | ocena wyceny | limit i termin automatycznego usunięcia |
| Materiały aktywnego projektu | modelowanie i uzgodnienia | sposób przeniesienia z krótkiej retencji do akt projektu |
| Plik produkcyjny MM3D | realizacja i ponowne zamówienia | gwarancja przechowywania 24 miesiące od ostatniego zamówienia |
| Plik źródłowy MM3D | wewnętrzna praca projektowa | dostęp, backup i brak obietnicy wydania klientowi |
| Dane sprawy i płatności | obsługa, rozliczenia, roszczenia | okresy prawne i księgowe |

ADR 0001 zakłada 30-dniową retencję załączników. Parzej i prawnik muszą ustalić, czy dotyczy ona wyłącznie plików niezrealizowanych zapytań oraz kiedy plik staje się materiałem aktywnego projektu. Nie wolno usuwać pliku niezbędnego do trwającej, opłaconej realizacji tylko dlatego, że minęło 30 dni.

## Bezpieczeństwo do zaprojektowania

- limit liczby i rozmiaru plików;
- weryfikacja rozszerzenia, MIME i sygnatury;
- losowe nazwy serwerowe, brak użycia nazwy klienta jako ścieżki;
- ochrona przed path traversal, nadpisaniem i wykonaniem pliku;
- katalog poza web root i brak publicznych URL-i;
- skanowanie antywirusowe albo udokumentowana alternatywa adekwatna do hostingu;
- rate limiting, ochrona antyspamowa i CSRF;
- bezpieczne nagłówki oraz ograniczona polityka CORS;
- szyfrowane połączenia i bezpieczne sekrety środowiskowe;
- backup, odtwarzanie i test automatycznego usuwania;
- logi bez treści plików, danych płatniczych i zbędnych danych osobowych;
- możliwość usunięcia albo anonimizacji danych zgodnie z przyjętą retencją.

## Wiadomości e-mail

Wymagane szablony:

1. potwierdzenie zapytania z numerem sprawy i podsumowaniem;
2. wycena albo prośba o doprecyzowanie — obsługiwana ręcznie przez MM3D;
3. kompletna wersja wyceny z wariantami i przejściem do płatności;
4. automatyczny e-mail „Płatność otrzymana — zamówienie zostało przyjęte do realizacji” z numerem sprawy, wariantem, kwotą, danymi dostawy i nabywcy, terminem oraz instrukcją odpowiedzi w sprawie problemu lub reklamacji;
5. informacja o opóźnieniu, gdy termin jest zagrożony.

Nie ma osobnej wiadomości „Wydruk gotowy”. Reklamacja jest zgłaszana przez odpowiedź na e-mail z numerem sprawy.

Do decyzji Parzeja: dostawca wysyłki, SPF/DKIM/DMARC, threading wiadomości, obsługa bounce, ponowienia oraz monitoring błędów.

Po potwierdzeniu pełnej płatności klient powinien również zobaczyć stronę sukcesu z tym samym numerem sprawy i podsumowaniem. Strona oraz e-mail nie mogą opierać się wyłącznie na przekierowaniu z Paynow; sposób potwierdzenia statusu, deduplikacji zdarzeń i zabezpieczenia danych wymaga decyzji technicznej.

## Dostępność i jakość interfejsu

- semantyczne etykiety i komunikaty błędów powiązane z polami;
- pełna obsługa klawiaturą i widoczny fokus;
- brak blokowania hobbysty obowiązkową terminologią techniczną;
- `aria-live` dla wyniku uploadu i wysłania;
- błędy nie mogą opierać się wyłącznie na kolorze;
- minimalne cele dotykowe zgodne z WCAG 2.2 AA;
- redukcja ruchu przy `prefers-reduced-motion`;
- zachowanie wpisanych danych po błędzie możliwie bez ponownego przesyłania plików;
- test przy 320 CSS px, powiększeniu 200% i orientacji poziomej telefonu.

## Decyzje wymagane od Parzeja przed implementacją

1. Limity liczby i rozmiaru załączników dla obu formularzy.
2. Sposób walidacji modeli i materiałów referencyjnych.
3. Generator numerów spraw odporny na równoległość.
4. Model danych oraz stany przechowywane w MySQL.
5. Dostawca i niezawodność wiadomości e-mail.
6. Zakres integracji Paynow w pierwszej wersji.
7. Zakres integracji InPost w pierwszej wersji.
8. Rozdzielenie 30-dniowej retencji zapytań od akt aktywnego projektu i 24-miesięcznej gwarancji pliku produkcyjnego.
9. Mechanizm prywatnego panelu MM3D oraz uwierzytelnianie.
10. Monitoring, backup i procedura odtworzenia.
11. Strategia PWA i wersjonowanie cache bez buforowania prywatnych odpowiedzi formularza.
12. Ostateczna struktura tras i komponentów SvelteKit.

## Kryteria odbioru pierwszej wersji

- obie ścieżki można ukończyć od 320 CSS px na telefonie, tablecie i komputerze;
- błędne, zbyt duże i przerwane uploady dają zrozumiały komunikat;
- wysłanie nie tworzy duplikatu po odświeżeniu albo ponowieniu;
- klient i Góras otrzymują poprawny numer tej samej sprawy;
- załączniki nie są publicznie dostępne;
- prywatne odpowiedzi nie trafiają do cache PWA;
- płatność testowa poprawnie i jednokrotnie aktualizuje status;
- zgody prawne i wersja dokumentów są możliwe do udowodnienia;
- testy klawiaturą i czytnikiem ekranu nie ujawniają krytycznych barier;
- żadne sekrety, dane klientów ani pliki produkcyjne nie trafiają do publicznego repozytorium.
