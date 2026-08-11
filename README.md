# MM3D

Publiczne repozytorium strony MM3D i eksperymentu, w którym niezależne lokalne sesje parzeja i Górasa kumulują wspólny słownik domenowy oraz decyzje projektowe.

## Uzgodniona rama techniczna

- Svelte 5 ze składnią legacy Svelte 4
- SvelteKit, TypeScript i `@sveltejs/adapter-static`
- instalowalna PWA z treściami dostępnymi do odczytu offline
- formularz i bezpieczny upload obsługiwane przez PHP 8
- minimalne metadane zapytań w MySQL
- 30-dniowa retencja załączników poza publicznym katalogiem WWW
- statyczny build i wdrożenie na hosting współdzielony LH.pl

Uzasadnienie architektury znajduje się w [`docs/adr/0001-static-sveltekit-with-php-on-lh.md`](docs/adr/0001-static-sveltekit-with-php-on-lh.md).

## Materiały wykonawcze

- [`docs/handoffs/przekazanie-techniczne-dla-parzeja.md`](docs/handoffs/przekazanie-techniczne-dla-parzeja.md) — decyzje biznesowe i pytania techniczne do wdrożenia.
- [`docs/handoffs/checklista-dla-prawnika.md`](docs/handoffs/checklista-dla-prawnika.md) — zakres regulaminu, prywatności i dokumentów wymagających weryfikacji prawnej.
- [`docs/website/makieta-i-teksty-v1.md`](docs/website/makieta-i-teksty-v1.md) — architektura informacji, teksty robocze i stany interfejsu.
- [`docs/guides/zasady-tworzenia-portfolio.md`](docs/guides/zasady-tworzenia-portfolio.md) — wewnętrzne zasady przygotowania galerii.
- [`prototype/README.md`](prototype/README.md) — responsywny prototyp strony głównej i dwóch formularzy; można zacząć od [`prototype/index.html`](prototype/index.html).

## Lokalna tożsamość sesji

Każdy współtwórca ustawia w swoim klonie repozytorium własny identyfikator. To ustawienie trafia wyłącznie do lokalnego `.git/config`.

Parzej:

```sh
git config --local mm3d.contributor parzej
```

Góras:

```sh
git config --local mm3d.contributor goras
```

Przed zmianą słownika agent stosuje reguły z [`AGENTS.md`](AGENTS.md). Definicje znajdują się w [`CONTEXT.md`](CONTEXT.md), a ich pochodzenie w [`docs/domain/provenance.yml`](docs/domain/provenance.yml).

## Zasady bezpieczeństwa publicznego repozytorium

Nie wolno commitować sekretów, danych klientów, załączników do zapytań, kopii produkcyjnej bazy danych ani danych dostępowych do hostingu i poczty. Dane wdrożeniowe będą przekazywane wyłącznie jako sekrety środowiska CI lub konfiguracja serwera.
