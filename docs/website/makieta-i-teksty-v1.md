# Makieta i teksty serwisu MM3D — wersja 1

Status: pierwszy materiał wykonawczy przygotowany 12 sierpnia 2026. Dokument opisuje zaakceptowany kierunek biznesowy i prototyp treści. Nie jest jeszcze projektem graficznym ani gotową stroną produkcyjną.

## Cel pierwszej wersji

Strona ma w kilka sekund wyjaśnić, że MM3D przede wszystkim drukuje gotowe modele dostarczone przez klientów, a w trudniejszych przypadkach zapewnia ludzką ocenę zamiast automatycznej odmowy. Osobna, drugoplanowa ścieżka służy klientom, którzy dopiero potrzebują modelu.

Pierwsza wersja nie zawiera automatycznego kalkulatora, sklepu, kont klientów ani panelu śledzenia zamówienia.

## Architektura informacji

1. `/` — strona główna, oferta, proces, portfolio i FAQ.
2. `/wycena-druku` — formularz druku z gotowego pliku.
3. `/modelowanie` — formularz modelowania od zera.
4. `/regulamin` — regulamin zweryfikowany przez prawnika.
5. `/polityka-prywatnosci` — polityka prywatności i retencji danych.
6. `/potwierdzenie` — potwierdzenie przyjęcia zapytania z numerem sprawy.

W prototypie trasy formularzy są osobnymi plikami HTML. Docelowe adresy i ich implementację potwierdza Parzej.

## Szkielet strony głównej

### Większy ekran

```text
[MM3D]                         [Jak to działa] [Portfolio] [FAQ]

[Przystępny druk 3D...]       [zdjęcie rzeczywistej realizacji]
[krótki opis ludzkiego podejścia]
[Wyślij plik do wyceny] [Nie masz modelu? Opisz swój pomysł]

[szybka odpowiedź] [FDM i żywica] [wykończenie] [wysyłka InPost]

[Druk z pliku] [Modelowanie] [Usuwanie podpór / szlifowanie / malowanie]

[1. Wyślij] [2. Oceniamy] [3. Akceptujesz] [4. Drukujemy i wysyłamy]

[sekcja osobistego podejścia]

[wspólna galeria portfolio — bez cen i bez przycisku do wyceny]

[FAQ]

[dwa główne przyciski] [stopka prawna]
```

### Telefon

```text
[MM3D] [menu]
[obietnica]
[opis]
[Wyślij plik do wyceny]
[Nie masz modelu? Opisz swój pomysł]
[zdjęcie]
[dowody zaufania w dwóch kolumnach]
[usługi jedna pod drugą]
[proces pionowo]
[portfolio przewijane pionowo]
[FAQ]
[dwa przyciski]
[stopka]
```

Cała ścieżka musi działać od 320 CSS px bez poziomego przewijania strony, klawiaturą, myszą i dotykiem.

## Teksty główne

### Pierwszy ekran

Nadtytuł:

> Druk 3D dla hobbystów, twórców i praktycznych pomysłów

Nagłówek:

> Przystępny druk 3D z Twojego pliku — z ludzkim podejściem

Opis:

> Masz gotowy model STL, OBJ lub 3MF? Wyślij go, napisz, do czego ma służyć, a dobierzemy rozsądny sposób wykonania. Bez obowiązku znajomości materiałów i technologii.

Przyciski:

- główny: **Wyślij plik do wyceny**;
- drugoplanowy: **Nie masz modelu? Opisz swój pomysł**.

### Dowody zaufania

- **Odpowiedź do 2 dni roboczych** — dla kompletnego zapytania.
- **FDM i druk żywiczny** — technologię dobiera MM3D, jeśli klient nie wie, czego potrzebuje.
- **Wykończenie na zamówienie** — usuwanie podpór, szlifowanie i malowanie są wyceniane osobno.
- **Dostawa InPost** — Paczkomat albo kurier.

### Usługi

**Masz gotowy plik**

> To podstawowa i najszybsza ścieżka. Dołącz model, podaj liczbę sztuk, jeden znany wymiar i opisz zastosowanie. Otrzymasz indywidualną wycenę.

**Potrzebujesz modelu**

> Opisz pomysł i dołącz zdjęcia, szkice, rysunki lub inne materiały. Najpierw ocenimy zakres modelowania i sposób dalszej współpracy.

**Chcesz gotowe wykończenie**

> Do wydruku możesz dobrać usuwanie podpór, szlifowanie albo malowanie. Zakres i cena zależą od konkretnego modelu.

### Proces druku z pliku

1. **Wyślij model i opis** — plik, liczba sztuk, wymiar, zastosowanie i oczekiwany termin.
2. **Sprawdzamy wykonalność** — dobieramy technologię i materiał; jeśli czegoś brakuje, kontaktujemy się.
3. **Otrzymujesz wycenę** — wiadomość ma numer sprawy, zakres, cenę i termin; wycena jest ważna 7 dni kalendarzowych.
4. **Akceptujesz przez płatność** — płacisz przez Paynow za aktualną wycenę. Potwierdzona wpłata jednocześnie tworzy zamówienie i pozwala rozpocząć realizację, a przesyłkę dostarcza InPost.

### Ludzkie podejście

Nagłówek:

> Nie musisz znać się na drukarkach ani materiałach

Opis:

> Napisz, jak przedmiot ma wyglądać i w jakich warunkach będzie używany. Jeśli projekt wymaga uwagi, sprawdzi go człowiek i zaproponuje rozwiązanie dopasowane do celu — bez udawania, że każdy przypadek da się rozstrzygnąć kalkulatorem.

### Portfolio

Nagłówek:

> Rzeczy, które naprawdę powstały

Opis:

> Wydruki FDM i żywiczne, modelowanie, malowanie oraz wykończenie. Portfolio pokazuje zakres pracy MM3D; nie jest cennikiem.

Galeria jest wspólna. Jedna realizacja ma jedno zdjęcie główne i dwa lub trzy zdjęcia uzupełniające. Nie umieszczamy przy niej ceny ani przycisku „zapytaj o podobną wycenę”. Szczegóły opisuje dokument [Zasady tworzenia portfolio](../guides/zasady-tworzenia-portfolio.md).

### FAQ

**Czy muszę wiedzieć, czy potrzebuję FDM czy żywicy?**

> Nie. Możesz pozostawić dobór technologii MM3D i opisać zastosowanie oraz oczekiwany efekt.

**Jakie pliki mogę wysłać?**

> W pierwszej wersji formularz przyjmuje STL, OBJ i 3MF. Limity rozmiaru i liczby plików potwierdza Parzej przed wdrożeniem.

**Czy od razu poznam cenę?**

> Nie. Każdy model jest oceniany indywidualnie, ponieważ cena zależy między innymi od wielkości, czasu druku, materiału, liczby sztuk i wykończenia.

**Czy MM3D może przygotować model od zera?**

> Tak. Jest to osobna, indywidualnie wyceniana usługa. Klient opisuje potrzebę i dołącza dostępne materiały referencyjne.

**Czy mogę zamówić malowanie?**

> Tak. Malowanie, szlifowanie i usuwanie podpór są niezależnymi usługami dodatkowymi, których zakres i cena są potwierdzane indywidualnie.

## Teksty formularzy

### Druk z gotowego pliku

Wprowadzenie:

> Dołącz model i opisz, czego potrzebujesz. Nie musisz samodzielnie wybierać materiału ani technologii. Formularz wysyła zapytanie o wycenę — nie tworzy jeszcze zamówienia i nie nalicza płatności.

Przycisk końcowy:

> Wyślij zapytanie o wycenę

### Modelowanie od zera

Wprowadzenie:

> Opisz możliwie szeroko, co ma powstać, do czego będzie używane i jakie ma mieć przybliżone wymiary. Dołącz wszystkie materiały, które pomogą zrozumieć pomysł. Po wstępnej ocenie MM3D skontaktuje się, aby doprecyzować zakres i wycenę.

Przycisk końcowy:

> Wyślij opis pomysłu

### Potwierdzenie

Nagłówek:

> Zapytanie zostało przyjęte

Treść:

> Numer sprawy: **[MM3D-ROK-NUMER]**. Potwierdzenie wysłaliśmy na podany adres e-mail. Odpowiemy w ciągu maksymalnie 2 dni roboczych od otrzymania kompletnego zapytania. Jeśli będziemy potrzebować dodatkowych informacji, napiszemy w tej samej wiadomości z numerem sprawy w tytule.

## Komunikaty i stany formularza

- brak pliku w ścieżce druku: **Dodaj co najmniej jeden plik STL, OBJ lub 3MF.**
- niedozwolony format: **Ten format nie jest obsługiwany. Dodaj plik STL, OBJ lub 3MF.**
- przekroczony limit: **Plik jest za duży. Maksymalny rozmiar to [LIMIT].**
- brak wymaganego pola: **Uzupełnij to pole, aby wysłać zapytanie.**
- brak akceptacji regulaminu: **Zapoznaj się z regulaminem i zaznacz zgodę.**
- błąd wysyłki: **Nie udało się wysłać zapytania. Twoje dane pozostały w formularzu — spróbuj ponownie albo skontaktuj się z MM3D.**
- wysyłanie: **Wysyłamy pliki. Nie zamykaj tej strony.**

## Zasady treści i dostępności

- Nie wymagamy od hobbysty technicznych wyborów, których może nie rozumieć.
- Najważniejsze informacje i błędy nie mogą być przekazywane wyłącznie kolorem.
- Etykiety pól pozostają widoczne; placeholder nie zastępuje etykiety.
- Wszystkie elementy interaktywne mają czytelny fokus i odpowiednio duży obszar dotyku.
- Teksty nie obiecują najniższej ceny, automatycznej wyceny ani terminu realizacji wspólnego dla wszystkich projektów.
- Publiczne obietnice dotyczące materiałów, urządzeń i czasów wymagają potwierdzenia przed publikacją.

## Elementy do uzupełnienia przed wdrożeniem

- pełna nazwa przedsiębiorcy, adres, NIP, e-mail i telefon;
- ostateczne logo, zdjęcia oraz materiały portfolio;
- limity wielkości i liczby plików;
- dostępne kolory oraz warunki ich wpływu na termin;
- ostateczny regulamin i polityka prywatności;
- treść zgód i obowiązków informacyjnych po weryfikacji prawnej;
- konfiguracja Paynow i InPost;
- techniczny sposób generowania numeru sprawy i wiadomości e-mail.

## Prototyp

Statyczny prototyp znajduje się w katalogu [`prototype/`](../../prototype/README.md):

- [`index.html`](../../prototype/index.html) — strona główna;
- [`wycena-druku.html`](../../prototype/wycena-druku.html) — ścieżka druku z pliku;
- [`modelowanie.html`](../../prototype/modelowanie.html) — ścieżka modelowania.

Prototyp służy do oceny hierarchii treści, tonu, formularzy i zachowania na różnych szerokościach. Nie wysyła danych, nie przechowuje plików i nie realizuje płatności.
