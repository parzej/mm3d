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
