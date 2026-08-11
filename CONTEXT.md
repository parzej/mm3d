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
