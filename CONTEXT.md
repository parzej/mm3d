# MM3D

Wspólny język projektu strony internetowej MM3D, służącej pozyskiwaniu zleceń na druk 3D oraz prezentacji marki i wykonanych prac.

## Language

**Właściciel MM3D**:
Góras, który prowadzi biznes MM3D i jest jedynym odbiorcą zapytań ofertowych od klientów.
_Avoid_: Współwłaściciel, zespół MM3D

**Konsultant techniczny**:
Parzej, który doradza w kwestiach technicznych projektu strony, ale nie uczestniczy w prowadzeniu biznesu MM3D.
_Avoid_: Współwłaściciel, operator MM3D

**Zapytanie ofertowe**:
Zgłoszenie przesłane do MM3D w celu oceny wykonalności i przygotowania wyceny druku 3D. Nie jest jeszcze zobowiązującym zamówieniem.
_Avoid_: Zamówienie, zlecenie

**Wycena**:
Przygotowana przez MM3D propozycja realizacji określająca zakres, parametry wydruku, ceny brutto, koszt dostawy, przewidywany termin, ograniczenia i okres ważności. Staje się podstawą zamówienia dopiero po akceptacji klienta.
_Avoid_: Cennik, zamówienie, automatyczna kalkulacja

**Okres ważności wyceny**:
Siedem dni kalendarzowych od wysłania wyceny, w których klient może ją zaakceptować na podanych warunkach. Po tym czasie MM3D ponownie potwierdza cenę i dostępny termin.
_Avoid_: Bezterminowa oferta, automatyczna akceptacja po terminie

**Załącznik do zapytania**:
Plik przekazany przez potencjalnego klienta jako materiał potrzebny do oceny zapytania ofertowego, na przykład model 3D, zdjęcie, szkic lub dokumentacja wymiarowa. Nie jest trwałym archiwum projektu.
_Avoid_: Realizacja, plik projektu

**Zamówienie**:
Uzgodniony zakres realizacji druku 3D powstały po ocenie wykonalności, przedstawieniu wyceny i jej akceptacji.
_Avoid_: Zapytanie ofertowe, zgłoszenie

**Druk z pliku klienta**:
Podstawowa usługa MM3D polegająca na wykonaniu wydruku z gotowego modelu 3D dostarczonego przez klienta. W tym rodzaju usługi MM3D konkuruje przede wszystkim ceną.
_Avoid_: Projektowanie modelu, modelowanie od zera

**Projektowanie modelu**:
Dodatkowa usługa MM3D polegająca na stworzeniu modelu 3D i wykonaniu jego wydruku, gdy klient nie dostarcza gotowego modelu.
_Avoid_: Druk z pliku klienta, podstawowa usługa

**Klient podstawowej usługi**:
Hobbysta lub osoba prywatna zamawiająca pojedyncze albo powtarzalne wydruki z gotowych modeli 3D. Nie oznacza klienta przemysłowego oczekującego przemysłowego procesu realizacji.
_Avoid_: Klient przemysłowy, odbiorca masowej produkcji

**Przystępna cena**:
Cena druku atrakcyjna dla hobbysty i uczciwa względem zakresu realizacji, bez obietnicy, że MM3D będzie zawsze najtańszą ofertą na rynku.
_Avoid_: Najniższa cena, gwarancja najtańszej oferty

**Elastyczna ocena zapytania**:
Osobista ocena nietypowego lub problematycznego zapytania, podczas której MM3D wyjaśnia klientowi ryzyka i proponuje sensowny sposób realizacji. Nie oznacza obowiązkowej konsultacji przy każdym poprawnym pliku.
_Avoid_: Automatyczna akceptacja, konsultacja obowiązkowa

**Przygotowanie druku**:
Dobór ustawień i sposobu wykonania wydruku bez zmiany geometrii modelu dostarczonego przez klienta. Jest częścią usługi druku z pliku klienta.
_Avoid_: Projektowanie modelu, naprawa geometrii

**Ingerencja w model**:
Naprawa lub zmiana geometrii modelu dostarczonego przez klienta, wyceniana oddzielnie jako projektowanie modelu.
_Avoid_: Przygotowanie druku, bezpłatna poprawka

**Warunki użytkowania**:
Opis środowiska, obciążeń i oczekiwanych właściwości wydruku przekazywany przez klienta, na podstawie którego MM3D dobiera odpowiedni materiał. Klient nie musi wskazywać konkretnego materiału.
_Avoid_: Wybór materiału przez klienta, sugestia filamentu

**Dobór technologii druku**:
Wybór FDM albo SLA dokonywany przez MM3D na podstawie modelu, oczekiwanego rezultatu i warunków użytkowania. Klient może wskazać preferencję, ale nie musi znać ani wybierać technologii.
_Avoid_: Obowiązkowy wybór technologii, wybór techniczny klienta

**Kolor standardowy**:
Szary kolor wydruku przyjmowany przez MM3D jako domyślna opcja wyceny. Inny kolor jest preferencją potwierdzaną w wycenie i może wpłynąć na cenę lub termin realizacji.
_Avoid_: Kolor gwarantowany, dowolny kolor bez wpływu na wycenę

**Priorytet realizacji**:
Obowiązkowo wskazana przez klienta najważniejsza preferencja: możliwie niska cena, najlepszy wygląd i detale, wytrzymałość albo możliwie najkrótszy termin. Kieruje przygotowaniem wyceny, ale nie jest gwarancją przed jej potwierdzeniem przez MM3D.
_Avoid_: Najlepszy kompromis, gwarantowany rezultat

**Oczekiwany termin**:
Najpóźniejsza data wskazana przez klienta, gdy priorytetem jest możliwie najkrótszy termin. Nie jest terminem realizacji, dopóki MM3D nie potwierdzi go w wycenie.
_Avoid_: Gwarantowana data, potwierdzony termin realizacji

**Potwierdzenie zapytania**:
Automatyczna wiadomość e-mail z numerem sprawy, podsumowaniem danych i nazwami załączników, pozwalająca klientowi sprawdzić przesłane informacje. Nie jest wyceną ani potwierdzeniem zamówienia.
_Avoid_: Potwierdzenie zamówienia, akceptacja realizacji

**Numer sprawy**:
Jeden identyfikator nadawany zapytaniu ofertowemu i używany we wszystkich wiadomościach dotyczących jego wyceny, akceptacji oraz powstałego zamówienia.
_Avoid_: Osobny numer wyceny, zmiana numeru po akceptacji

**Akceptacja wyceny**:
Jednoznaczna odpowiedź klienta na wiadomość z aktualną wyceną, zachowująca numer sprawy. Po jej otrzymaniu MM3D potwierdza utworzenie zamówienia.
_Avoid_: Milcząca zgoda, kliknięcie bez potwierdzenia, akceptacja nieaktualnej wyceny

**Przedpłata**:
Pełna płatność wymagana po akceptacji wyceny i przed rozpoczęciem indywidualnego druku. Potwierdzony czas realizacji biegnie od zaksięgowania przedpłaty.
_Avoid_: Płatność po wykonaniu, rozpoczęcie po samej akceptacji

**Czas odpowiedzi na zapytanie**:
Maksymalnie dwa dni robocze od otrzymania kompletnego zapytania do wysłania przez MM3D wyceny albo prośby o doprecyzowanie. Nie jest czasem realizacji wydruku.
_Avoid_: Czas realizacji, termin dostawy

**Wynik oceny zapytania**:
Odpowiedź MM3D po analizie zapytania: gotowa wycena, prośba o doprecyzowanie albo odmowa realizacji z przyczyną. Każde zapytanie otrzymuje jeden z tych wyników.
_Avoid_: Automatyczna akceptacja, brak odpowiedzi

**Komplet modeli**:
Grupa powiązanych części lub modeli tworzących jeden wspólny projekt, które klient może przekazać w jednym zapytaniu ofertowym. Różne, niezależne projekty nie są kompletem modeli.
_Avoid_: Paczka dowolnych plików, wiele niezależnych projektów

**Wymiar referencyjny**:
Jeden docelowy wymiar modelu wskazany przez klienta, na podstawie którego MM3D skaluje pozostałe wymiary proporcjonalnie. Nie oznacza niezależnej zmiany proporcji modelu.
_Avoid_: Pełne wymiarowanie, rozciąganie modelu

**Wariant ilościowy wyceny**:
Wybrany przez klienta zakres liczby sztuk tego samego wydruku, dla którego MM3D oblicza indywidualną cenę jednostkową na podstawie konkretnego modelu. Nie jest stałym publicznym cennikiem ani osobnym zamówieniem.
_Avoid_: Stały próg cenowy, uniwersalny cennik ilościowy

**Benchmark funkcjonalności WWW**:
Strona [warstwokracja.pl](https://warstwokracja.pl) jako punkt odniesienia dla zakresu funkcji i ścieżek użytkownika w serwisie MM3D, bez traktowania jej wyglądu, treści, marki ani implementacji jako wzorca do kopiowania.
_Avoid_: Benchmark wizualny, kopia strony, specyfikacja jeden do jednego

**Równoważność funkcjonalna urządzeń**:
Pełna dostępność tej samej ścieżki klienta na komputerze, tablecie i telefonie, niezależnie od różnic w układzie, kolejności treści i elementach dekoracyjnych.
_Avoid_: Okrojona wersja mobilna, funkcje tylko na komputerze

**Scenariusze urządzeń**:
Komputer, tablet i telefon jako trzy warunki projektowania i sprawdzania interfejsu MM3D; wariant układu wynika z dostępnej przestrzeni, a nie z rozpoznanego typu urządzenia lub jego przekątnej.
_Avoid_: Wykrywanie urządzenia, sztywne klasy według przekątnej

**Niezależność sposobu obsługi**:
Dostępność wszystkich kluczowych działań interfejsu MM3D za pomocą dotyku, myszy i klawiatury, bez uzależniania informacji lub funkcji od najechania kursorem.
_Avoid_: Funkcja tylko na hover, obsługa tylko myszą

**Zakres responsywności**:
Obsługiwany zakres interfejsu MM3D od szerokości 320 CSS px wzwyż, w orientacji pionowej i poziomej, bez poziomego przewijania całej strony.
_Avoid_: Wsparcie tylko popularnych rozdzielczości, poziome przewijanie strony

**Standard dostępności interfejsu**:
Poziom AA standardu WCAG 2.2 jako minimalne kryterium odbioru interfejsu MM3D we wszystkich scenariuszach urządzeń.
_Avoid_: Dostępność opcjonalna, dostępność tylko na komputerze
