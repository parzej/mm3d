# Plan dalszych działań dla serwisu MM3D

Status: plan roboczy zapisany lokalnie. Kolejność wynika z uzgodnionego pozycjonowania MM3D, hierarchii benchmarków oraz przyjętych ograniczeń technicznych.

## Cel pierwszej wersji

Pierwsza wersja serwisu ma umożliwić hobbyście lub osobie prywatnej zrozumienie oferty MM3D i przesłanie kompletnego zapytania o przystępny cenowo druk gotowego modelu. Klient bez gotowego modelu ma otrzymać widoczną, lecz drugoplanową ścieżkę do indywidualnej wyceny projektowania.

Główna obietnica marki brzmi:

> Przystępny druk 3D z Twojego pliku, z ludzkim podejściem, gdy projekt wymaga uwagi.

## Kolejność działań

### 1. Ustalenie ścieżki klienta — w toku

Należy rozpisać drogę od wejścia na stronę do wysłania zapytania. Serwis powinien od razu rozdzielać dwie sytuacje:

1. **Mam gotowy model** — główna ścieżka prowadząca bezpośrednio do zapytania o wycenę druku.
2. **Nie mam modelu** — drugoplanowa ścieżka prowadząca do indywidualnej wyceny projektowania.

Prosty i poprawny plik powinien przejść sprawną ścieżkę bez obowiązkowej konsultacji. Nietypowy albo problematyczny przypadek powinien trafić do osobistej oceny Górasa.

Odpowiedzialność:

- Góras potwierdza oczekiwany przebieg kontaktu z klientem.
- Parzej sprawdza wykonalność i konsekwencje techniczne.

Rezultat:

- diagram lub opis obu ścieżek;
- lista stanów zapytania od przesłania do akceptacji wyceny;
- wskazane miejsca wymagające ręcznego kontaktu.

Kryterium zakończenia:

- dla każdego kroku wiadomo, co robi klient, co otrzymuje i kiedy interweniuje Góras.

Stan na 11 sierpnia 2026:

- główna ścieżka druku z gotowego pliku została rozpisana od formularza przez wycenę, akceptację, przedpłatę Paynow, realizację i dostawę InPost;
- decyzje głównej ścieżki opisuje dokument [Ścieżka klienta — druk z gotowego pliku](../briefs/sciezka-klienta-druk-z-pliku.md);
- drugoplanowa ścieżka jest rozwijana w dokumencie [Ścieżka klienta — modelowanie od zera](../briefs/sciezka-klienta-modelowanie.md), a grillowanie należy kontynuować od pytania 48;
- implementacyjne konsekwencje głównej ścieżki wymagają potwierdzenia Parzeja.

### 2. Zdefiniowanie formularzy

#### Formularz druku z gotowego pliku

Ustalono biznesowy zakres formularza, w tym formaty STL, OBJ i 3MF, dokładną liczbę sztuk, jeden wymiar referencyjny, sekcję zastosowania i oczekiwanych właściwości z pytaniami dopasowanymi do kategorii, standardowy szary kolor, trzy niezależne usługi dodatkowe — usuwanie podpór, szlifowanie i malowanie — obowiązkowy priorytet, oczekiwany termin, dane kontaktowe i wybór dostawy InPost. Klient nie musi wybierać technologii ani materiału. Szczegółowy zakres opisuje dokument [Ścieżka klienta — druk z gotowego pliku](../briefs/sciezka-klienta-druk-z-pliku.md).

Do ustalenia albo potwierdzenia pozostają:

- maksymalny rozmiar i liczba załączników;
- bezpieczna walidacja oraz komunikaty błędów;
- zgody i informacja o przechowywaniu załącznika;
- techniczna wykonalność automatyzacji wiadomości, Paynow i InPost.

#### Formularz projektowania modelu

Ustalony zakres obejmuje:

- opis potrzeby lub problemu;
- zdjęcia, szkice, rysunki techniczne, blueprinty, dokumentację wymiarową i inne materiały referencyjne;
- szacunkowe wymiary i oczekiwaną liczbę wydruków;
- późniejsze doprecyzowanie przez e-mail albo rozmowę telefoniczną z zachowaniem pisemnego potwierdzenia kluczowych ustaleń;
- fizyczny wydruk jako standardowy rezultat bez automatycznego przekazania pliku cyfrowego;
- standardowy model niewyłączny oraz znacznie droższy model wyłączny;
- osobną indywidualną umowę i cenę, jeśli klient chce otrzymać plik albo prawa.

Szczegółowe decyzje i punkt wznowienia opisuje dokument [Ścieżka klienta — modelowanie od zera](../briefs/sciezka-klienta-modelowanie.md).

Formularze muszą jasno oddzielać przygotowanie procesu druku od płatnej ingerencji w geometrię modelu.

Odpowiedzialność:

- Góras określa informacje potrzebne do wyceny.
- Parzej określa bezpieczne formaty, limity, walidację i sposób przesyłania.

Rezultat:

- kompletna lista pól, reguł i komunikatów błędów;
- określenie pól obowiązkowych i opcjonalnych;
- zasady przekierowania zapytania do ręcznej oceny.

Kryterium zakończenia:

- formularz zbiera wystarczające dane do przygotowania wyceny bez niepotrzebnego obciążania klienta.

### 3. Ustalenie zasad handlowych

Góras powinien podjąć decyzje dotyczące:

- minimalnej wartości zamówienia albo jej braku;
- publikowania przykładowych cen;
- standardowego i ekspresowego terminu realizacji;
- rzeczywiście dostępnych materiałów i kolorów poza standardowym szarym;
- standardów zakresu oraz sposobu wyceny usuwania podpór, szlifowania i malowania;
- interpretacji przestrzeni roboczych drukarek dla nietypowych modeli;
- sytuacji, w których poprawka pliku wymaga osobnej wyceny;
- liczby i zasad poprawek przy projektowaniu modelu.

Ustalono już maksymalnie dwa dni robocze na odpowiedź dotyczącą kompletnego zapytania, siedem dni kalendarzowych ważności wyceny, pełną przedpłatę, Paynow jako docelową bramkę z przelewem awaryjnym oraz dostawę wyłącznie przez Paczkomat InPost albo kuriera InPost. Integracje wymagają potwierdzenia technicznego.

Nie należy publikować ceny lub terminu, którego MM3D nie może regularnie dotrzymać.

Odpowiedzialność:

- Góras podejmuje decyzje biznesowe i potwierdza obietnice składane klientowi.
- Parzej weryfikuje techniczne ograniczenia materiałów, plików i procesu.

Rezultat:

- krótki zestaw zasad wyceny i realizacji;
- lista obietnic, które mogą pojawić się publicznie na stronie;
- lista wyjątków wymagających indywidualnego uzgodnienia.

Kryterium zakończenia:

- teksty strony można napisać bez zgadywania cen, terminów i zakresu odpowiedzialności.

### 4. Przygotowanie portfolio i materiałów marki

Należy wybrać od 6 do 10 rzeczywistych realizacji. Każda realizacja powinna zawierać:

- dobre zdjęcie gotowego wydruku;
- krótki opis potrzeby;
- zastosowany materiał;
- informację, czy klient dostarczył gotowy plik, czy model powstał w MM3D;
- jedno zdanie o rozwiązanym problemie albo podjętej decyzji;
- zgodę na publiczne pokazanie realizacji, jeżeli projekt należał do klienta.

Warto przygotować także:

- krótką historię Górasa i jego praktycznego doświadczenia;
- zdjęcia warsztatu, drukarek oraz procesu;
- logo i dostępne materiały identyfikacji wizualnej;
- dane kontaktowe i informacje o sposobie odbioru.

Nie należy komunikować braku formalnego wykształcenia lub porównywać się negatywnie z bardziej techniczną konkurencją. Wiarygodność mają budować realizacje i sposób rozwiązywania problemów.

Odpowiedzialność:

- Góras wybiera realizacje, przygotowuje materiały i potwierdza prawo do publikacji.

Rezultat:

- uporządkowany zestaw zdjęć i opisów gotowy do użycia na stronie.

Kryterium zakończenia:

- strona może pokazać rzeczywiste dowody kompetencji zamiast samych deklaracji.

### 5. Makieta pierwszej wersji

Rekomendowany zakres treści i ekranów:

1. Strona główna z główną obietnicą marki.
2. Podstawowe wezwanie „Wyślij plik do wyceny”.
3. Drugoplanowa sekcja „Nie masz modelu?”.
4. Wyjaśnienie przebiegu realizacji.
5. Przykładowe ceny albo zasady wyceny, jeśli zostaną zatwierdzone.
6. Portfolio.
7. FAQ.
8. Kontakt oraz wymagane informacje dotyczące prywatności i załączników.
9. Potwierdzenie przyjęcia zapytania.

Makieta powinna najpierw rozstrzygać kolejność informacji i działania użytkownika. Kolory, typografia i dekoracje powinny powstać dopiero po sprawdzeniu tej struktury.

Benchmarki należy stosować w następującej kolejności:

1. Drukujemy3D — ścieżka zapytania i czytelność procesu.
2. 3D Forge — osobowość marki, zastosowania hobbystyczne i portfolio.
3. Threedi — inspiracja dla późniejszej automatyzacji wyceny.

Odpowiedzialność:

- Góras potwierdza hierarchię treści, ton i wizerunek marki.
- Parzej potwierdza wykonalność interakcji i zgodność z ograniczeniami technicznymi.

Rezultat:

- klikalna albo statyczna makieta dla telefonu i większego ekranu;
- teksty robocze kluczowych komunikatów i przycisków.

Kryterium zakończenia:

- osoba spoza projektu rozumie ofertę i potrafi przejść do odpowiedniego formularza bez dodatkowego objaśnienia.

### 6. Implementacja pierwszej wersji

Zakres techniczny wynikający z istniejących decyzji:

- SvelteKit, TypeScript i statyczny frontend;
- instalowalna PWA z treściami dostępnymi offline;
- adaptacyjny interfejs od 320 CSS px;
- pełna równoważność funkcji na komputerze, tablecie i telefonie;
- obsługa dotyku, myszy i klawiatury;
- zgodność z WCAG 2.2 AA;
- backend PHP 8 do formularza i bezpiecznego uploadu;
- minimalne metadane zapytania w MySQL;
- przechowywanie załączników poza publicznym katalogiem WWW;
- automatyczne usuwanie załączników po 30 dniach;
- powiadomienie na adres e-mail Górasa;
- budowanie i wdrażanie przez GitHub Actions na LH.pl.

Odpowiedzialność:

- Parzej prowadzi decyzje architektoniczne i techniczne ograniczenia dostawy.
- Góras odbiera zachowanie strony, treści i ścieżkę klienta.

Rezultat:

- działająca wersja testowa całej podstawowej ścieżki zapytania.

Kryterium zakończenia:

- zapytanie można poprawnie wysłać na każdym wspieranym urządzeniu, załącznik jest bezpiecznie przechowany, a Góras otrzymuje komplet informacji potrzebnych do odpowiedzi.

### 7. Test z użytkownikami i uruchomienie

Wersję testową należy pokazać co najmniej pięciu osobom pasującym do profilu klienta podstawowej usługi. Bez dodatkowego instruktażu powinny potrafić:

- rozpoznać, czym zajmuje się MM3D;
- znaleźć opcję druku z własnego pliku;
- zrozumieć, że modelowanie jest oddzielnie wyceniane;
- przesłać kompletne zapytanie na telefonie;
- przewidzieć, co wydarzy się po wysłaniu formularza.

Testy techniczne powinny objąć:

- telefon, tablet i komputer;
- orientację pionową i poziomą;
- dotyk, mysz i klawiaturę;
- szerokość od 320 CSS px;
- błędny format, zbyt duży plik i przerwane przesyłanie;
- dostępność według WCAG 2.2 AA;
- bezpieczne przechowanie i terminowe usuwanie załączników.

Rezultat:

- lista problemów i poprawek;
- potwierdzenie gotowości do wdrożenia;
- działająca wersja produkcyjna na hostingu MM3D.

Kryterium zakończenia:

- kluczowa ścieżka działa bez krytycznych błędów, a użytkownicy rozumieją ofertę i konsekwencje wysłania zapytania.

## Zakres odłożony na później

Pierwsza wersja nie powinna obejmować:

- automatycznego kalkulatora na poziomie Threedi;
- kont klientów;
- bezpiecznego panelu lub linku do akceptacji wyceny;
- widocznego dla klienta śledzenia etapów produkcji;
- rozbudowanego sklepu z gotowymi modelami;
- pełnej automatyzacji oceny plików;
- funkcji uzależnionych od konkretnego urządzenia.

Paynow oraz prywatny rejestr statusów płatności są obecnie oczekiwanym elementem pierwszej wersji, pod warunkiem potwierdzenia technicznej wykonalności przez Parzeja.

Te funkcje powinny wrócić do oceny dopiero po zebraniu danych z rzeczywistych zapytań i ustaleniu, które problemy powtarzają się wystarczająco często, by opłacało się je automatyzować.

## Najbliższa sesja robocza

Następna część grillowania zaczyna się od pytania 48 i kontynuuje ustalanie drugoplanowej ścieżki „Nie masz modelu? Opisz swój pomysł”. Góras zezwolił na zadanie tylu pytań, ile będzie konieczne, nadal po jednym pytaniu naraz. Po domknięciu obu ścieżek należy zaktualizować dokumentację i przygotować uzgodnione podsumowanie w Google Docs.
