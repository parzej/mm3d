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
Przygotowana przez MM3D propozycja realizacji zawierająca od jednego do maksymalnie trzech kompletnych wariantów wykonania, z zakresem, parametrami wydruku, cenami brutto, kosztem dostawy, przewidywanym terminem, ograniczeniami i okresem ważności. Wybrany wariant staje się podstawą zamówienia dopiero po skutecznej płatności klienta.
_Avoid_: Cennik, zamówienie, automatyczna kalkulacja, szacunek kosztu serii

**Wariant wyceny**:
Jedna z maksymalnie trzech równolegle dostępnych, kompletnych opcji wykonania w ramach wyceny, różniąca się na przykład wielkością, podziałem modelu, sposobem wykonania albo usługami dodatkowymi. Płatność za jeden wariant wybiera go do realizacji i zamyka pozostałe warianty tej sprawy.
_Avoid_: Niepełny dopisek do ceny, wersja wyceny, osobne zapytanie ofertowe

**Wersja wyceny**:
Kolejne kompletne wydanie wyceny powstałe po korekcie, zmianie ustaleń albo dodaniu wariantu. Aktualna wersja zastępuje wcześniejszą jako podstawa płatności, zawiera cały obowiązujący zestaw maksymalnie trzech wariantów i nadaje im jeden wspólny okres ważności liczony od jej wysłania.
_Avoid_: Wariant wyceny, historia wiadomości e-mail, poprawka bez pełnego podsumowania

**Szacunek kosztu serii**:
Orientacyjna kwota dla większej liczby sztuk podawana przed wykonaniem prototypu finalnego, aby klient mógł wstępnie ocenić opłacalność nakładu. Nie jest ostateczną wyceną produkcji seryjnej.
_Avoid_: Cena gwarantowana, wycena produkcji seryjnej, kwota do przedpłaty za nakład

**Wycena produkcji seryjnej**:
Ostateczna propozycja ceny jednostkowej i całkowitej większego nakładu, przygotowana po akceptacji prototypu finalnego na podstawie rzeczywistego czasu druku, zużycia materiału i zakresu obróbki. Wymaga akceptacji oraz zapłaty przed rozpoczęciem produkcji.
_Avoid_: Szacunek kosztu serii, automatyczny cennik, cena przed prototypem finalnym

**Okres ważności wyceny**:
Siedem dni kalendarzowych od wysłania aktualnej kompletnej wersji wyceny, wspólne dla wszystkich zawartych w niej wariantów. Po tym czasie wycena pozostaje widoczna, lecz nie można jej opłacić; wysłanie nowej wersji rozpoczyna nowy wspólny okres, jeżeli MM3D nadal potwierdza ceny i terminy całego zestawu.
_Avoid_: Bezterminowa oferta, automatyczna akceptacja po terminie

**Wygasła wycena**:
Wersja wyceny po zakończeniu okresu ważności, dostępna klientowi wyłącznie do odczytu i bez aktywnej możliwości płatności. Klient może poprosić o aktualizację, ale dopiero nowa wersja ponownie pozwala wybrać wariant i zapłacić.
_Avoid_: Aktywna wycena, automatycznie przedłużona wycena, usunięta historia

**Załącznik do zapytania**:
Plik przekazany przez potencjalnego klienta jako materiał potrzebny do oceny zapytania ofertowego, na przykład model 3D, zdjęcie, szkic lub dokumentacja wymiarowa. Nie jest trwałym archiwum projektu.
_Avoid_: Realizacja, plik projektu

**Zamówienie**:
Uzgodniony i opłacony zakres realizacji druku 3D, powstający po potwierdzeniu przez Paynow pełnej płatności za wybrany wariant aktualnej i ważnej wersji wyceny. Samo zapytanie ofertowe ani wysłanie wyceny nie tworzy zamówienia.
_Avoid_: Zapytanie ofertowe, nieopłacona wycena, zgłoszenie

**Druk z pliku klienta**:
Podstawowa usługa MM3D polegająca na wykonaniu wydruku z gotowego modelu 3D dostarczonego przez klienta. W tym rodzaju usługi MM3D konkuruje przede wszystkim ceną.
_Avoid_: Projektowanie modelu, modelowanie od zera

**Projektowanie modelu**:
Dodatkowa usługa MM3D polegająca na stworzeniu modelu 3D i wykonaniu jego wydruku, gdy klient nie dostarcza gotowego modelu.
_Avoid_: Druk z pliku klienta, podstawowa usługa

**Materiały referencyjne**:
Zdjęcia, szkice, rysunki techniczne, blueprinty, dokumentacja wymiarowa lub inne pliki przekazane przez klienta jako podstawa projektowania modelu. Nie oznaczają automatycznie, że klient ma prawa pozwalające na każde wykorzystanie przedstawionego wzoru.
_Avoid_: Gotowy model 3D, załącznik do druku, gwarancja praw do wzoru

**Przedmiot referencyjny**:
Fizyczny przedmiot przekazany czasowo przez klienta do pomiarów potrzebnych przy projektowaniu modelu. Pozostaje własnością klienta i nie jest prototypem wykonywanym przez MM3D.
_Avoid_: Materiał referencyjny w pliku, prototyp, własność MM3D

**Modelowanie odwrotne**:
Odtworzenie cyfrowej geometrii na podstawie pomiarów istniejącego przedmiotu referencyjnego. Nie oznacza gwarancji idealnej kopii bez osobnego uzgodnienia wymaganej dokładności.
_Avoid_: Skan automatycznie gwarantujący identyczność, zwykłe modelowanie bez wzorca, kopiowanie bez oceny praw

**Model niewyłączny**:
Standardowy wariant projektowania, w którym klient otrzymuje wydruk, plik cyfrowego modelu i niewyłączną licencję na druk, a MM3D zachowuje autorskie prawa majątkowe; obie strony mogą bez limitu drukować i sprzedawać fizyczne egzemplarze. Żadna ze stron nie może dystrybuować cyfrowego pliku poza technicznym przekazaniem drukarni wykonującej usługę, a korzystanie MM3D pozostaje ograniczone prawami do materiałów źródłowych klienta.
_Avoid_: Model wyłączny, współwłasność praw autorskich, przeniesienie praw

**Model wyłączny**:
Indywidualnie wyceniany wariant projektowania, w którym klient otrzymuje plik i wyłączne uprawnienie do korzystania z modelu w zakresie pisemnej umowy, a MM3D rezygnuje z objętego nią przyszłego wykorzystania projektu. Wyłączność może przyjąć postać licencji wyłącznej albo przeniesienia autorskich praw majątkowych na określonych polach eksploatacji.
_Avoid_: Model niewyłączny, automatyczne przeniesienie praw, standardowa cena modelowania

**Licencja niewyłączna na druk**:
Upoważnienie przekazywane klientowi razem z plikiem, pozwalające klientowi i MM3D bez limitu drukować model oraz sprzedawać fizyczne egzemplarze, bez współwłasności praw ani wyłączności. Żadna strona nie może publikować, sprzedawać ani przekazywać cyfrowego pliku poza drukarnią wykonującą usługę bez prawa dalszego użycia.
_Avoid_: Przeniesienie praw, licencja wyłączna, współwłasność modelu

**Plik do druku**:
Końcowy eksport produkcyjny cyfrowego modelu, w formacie dobranym do projektu, na przykład STL, 3MF albo OBJ, przekazywany klientowi wraz z ostatnim elementem ukończonej realizacji. Służy do wykonywania fizycznych wydruków i nie jest edytowalnym plikiem źródłowym.
_Avoid_: Plik źródłowy modelu, cyfrowy podgląd modelu, załącznik do zapytania

**Plik źródłowy modelu**:
Edytowalny plik projektu z programu CAD lub rzeźbiarskiego, na przykład BLEND albo STEP, który może zawierać historię pracy, elementy robocze, zależności i wykorzystane zasoby. Nie jest przekazywany w standardowej realizacji; jego ewentualne wydanie wymaga osobnego ustalenia zakresu i ceny.
_Avoid_: Plik do druku, eksport STL, cyfrowy podgląd modelu

**Gwarantowany okres przechowywania pliku**:
Okres 24 miesięcy od zakończenia ostatniego zamówienia dotyczącego danego modelu, w którym MM3D gwarantuje zachowanie ukończonego pliku produkcyjnego. Po tym okresie plik może pozostać w archiwum, ale klient nie otrzymuje gwarancji bezterminowego przechowywania i powinien zachować własną kopię.
_Avoid_: Bezterminowe archiwum, przechowywanie materiałów referencyjnych, kopia klienta

**Retencja materiałów referencyjnych**:
Przechowywanie zdjęć, rysunków, dokumentacji i innych materiałów klienta tylko przez okres niezbędny do realizacji, obsługi reklamacji oraz ochrony przed roszczeniami. Nie dziedziczy automatycznie 24-miesięcznego okresu pliku produkcyjnego; okres lub kryterium ustala się osobno dla każdej kategorii materiałów.
_Avoid_: Bezterminowe archiwum, gwarantowany okres przechowywania pliku, automatyczne 24 miesiące

**Realizacja portfolio**:
Ukończony model lub wydruk, którego własne zdjęcia albo rendery MM3D może publicznie pokazać jako przykład swojej pracy; pełni wyłącznie funkcję prezentacyjną i nie zawiera przycisku prowadzącego do wyceny. Nie obejmuje projektu objętego poufnością ani zawierającego dane lub wizerunek osoby, cudzy znak albo chroniony wzór, prototyp, poufną część mechaniczną bądź inną treść, do której MM3D nie ma prawa publikacji.
_Avoid_: Materiały referencyjne klienta, projekt poufny, automatyczne prawo do każdej publikacji

**Projekt poufny**:
Realizacja bezpłatnie oznaczona przez klienta jako wyłączona z publikacji zdjęć i renderów w portfolio MM3D. Samo oznaczenie dotyczy publicznej prezentacji i nie tworzy wyłączności na model, nie przenosi praw autorskich ani nie zastępuje odrębnej umowy o poufności.
_Avoid_: Model wyłączny, przeniesienie praw, automatyczna umowa NDA

**Rozszerzona poufność**:
Indywidualnie uzgadniany zakres ochrony projektu wykraczający poza bezpłatne wyłączenie z portfolio, na przykład formalna umowa NDA, szczególne zasady dostępu do plików lub ograniczenia wobec podwykonawców. Może wpłynąć na cenę i nie jest automatycznie częścią zwykłego oznaczenia projektu jako poufnego.
_Avoid_: Projekt poufny, model wyłączny, bezpłatne wyłączenie z portfolio

**Opis realizacji portfolio**:
Neutralna informacja towarzysząca zdjęciu lub renderowi, ograniczona do rodzaju realizacji, technologii, materiału i wykonanych usług, która nie wymaga akceptacji klienta. Nie zawiera ceny, ponieważ wyceny mogą się zmieniać, ani nazwy lub danych klienta, jego wypowiedzi, numeru zamówienia, poufnych wymiarów i informacji pozwalających powiązać projekt z klientem bez osobnego uzgodnienia.
_Avoid_: Dane klienta, materiały referencyjne, opis poufnej dokumentacji

**Oznaczenie realizacji portfolio**:
Lekkie oznaczenie zakresu pracy widoczne przy realizacji w jednej wspólnej galerii, na przykład FDM, żywica, modelowanie, malowanie albo wykończenie. Pomaga rozpoznać wykonane usługi, ale nie tworzy osobnej kategorii zamówienia, formularza ani ścieżki klienta.
_Avoid_: Osobna oferta, nowy formularz, sztywna kategoria zamówienia

**Zestaw zdjęć realizacji**:
Materiały wizualne jednej pozycji portfolio: jedno zdjęcie główne oraz dwa, maksymalnie trzy zdjęcia uzupełniające, które dopowiadają istotne cechy wykonania. Nie jest pełną dokumentacją projektu ani zbiorem materiałów referencyjnych klienta.
_Avoid_: Jedno przypadkowe ujęcie, rozbudowana dokumentacja projektu, materiały klienta

**Zdjęcie główne portfolio**:
Podstawowe ujęcie gotowego produktu pokazujące go w całości, w czytelnym świetle oraz bez bałaganu warsztatowego i elementów odciągających uwagę. W miarę możliwości zachowuje wspólne dla galerii neutralne tło, proporcje kadru i sposób oświetlenia; spójność jest celem, a nie bezwzględnym warunkiem publikacji dobrego zdjęcia.
_Avoid_: Zdjęcie warsztatowe, zbliżenie detalu, materiał referencyjny klienta

**Render portfolio**:
Wizualizacja cyfrowego modelu stworzonego przez MM3D, wyraźnie oznaczona jako render albo model cyfrowy, jeżeli projekt nie został jeszcze fizycznie wydrukowany. Pokazuje umiejętności modelowania i nie może sugerować, że przedstawia gotowy fizyczny produkt.
_Avoid_: Zdjęcie gotowego wydruku, nieoznaczona wizualizacja, materiał referencyjny klienta

**Tura poprawek**:
Jedna zebrana lista uwag klienta do przedstawionej wersji modelu, dotycząca wcześniej uzgodnionego zakresu. Standardowa wycena obejmuje dwie tury; zmiana koncepcji lub dodanie nowego zakresu wymaga osobnej wyceny. Usunięcie niezgodności wynikającej z błędu MM3D nie zużywa tury poprawek.
_Avoid_: Pojedyncza uwaga, nieograniczone zmiany, nowa koncepcja w tej samej cenie

**Cyfrowy podgląd modelu**:
Zestaw renderów lub widoków modelu przedstawiany klientowi przed wykonaniem prototypu wstępnego w celu potwierdzenia ogólnego kształtu, proporcji i zgodności z ustaleniami. Nie jest przekazaniem pliku modelu ani turą poprawek.
_Avoid_: Prototyp fizyczny, plik modelu dla klienta, tura poprawek

**Wstrzymanie projektu**:
Czasowe zatrzymanie modelowania po braku odpowiedzi klienta mimo przypomnienia. Nie oznacza akceptacji ani anulowania projektu; dotychczasowy termin przestaje obowiązywać, a wznowienie wymaga potwierdzenia nowego terminu przez MM3D.
_Avoid_: Automatyczna akceptacja, anulowanie zamówienia, zachowanie pierwotnego terminu

**Harmonogram modelowania**:
Ustalane w wycenie orientacyjne terminy cyfrowego podglądu, prototypu wstępnego, prototypu finalnego, ewentualnego malowania i gotowej realizacji. Malowanie rozpoczyna się po akceptacji prototypu finalnego, otrzymaniu jednoznacznego opisu z referencjami i płatności za malowanie, a opóźnienia po stronie klienta odpowiednio przesuwają kolejne etapy.
_Avoid_: Publiczny stały termin dla każdego projektu, gwarancja niezależna od odpowiedzi klienta

**Prototyp wstępny**:
Pierwszy, niemalowany fizyczny wydruk wykonywany podczas modelowania, służący sprawdzeniu projektu i zebraniu uwag klienta przed wprowadzeniem uzgodnionych poprawek. Standardowo ocenia go MM3D na podstawie pomiarów, zdjęć lub filmu; jest wysyłany klientowi tylko wtedy, gdy potrzebny jest jego osobisty test.
_Avoid_: Gotowy wyrób, prototyp finalny, nieudany wydruk MM3D

**Prototyp finalny**:
Drugi, niemalowany fizyczny wydruk wykonywany po uwzględnieniu uzgodnionych poprawek, wymagający jednoznacznej akceptacji klienta przed produkcją pozostałych sztuk albo rozpoczęciem malowania. Przy zamówieniu jednej sztuki po akceptacji może zostać wykończony i przekazany klientowi, a przy większym nakładzie jest egzemplarzem wzorcowym; nieudany wydruk wynikający z błędu MM3D nie jest prototypem finalnym.
_Avoid_: Prototyp wstępny, każdy kolejny wydruk, nieudany wydruk MM3D

**Płatność etapowa za modelowanie**:
Podział ceny modelowania na dwie części: 50% przed rozpoczęciem pracy oraz 50% po zaakceptowaniu poprawek i przed wykonaniem prototypu finalnego. Cena większego nakładu jest rozliczana osobno po akceptacji prototypu finalnego i przed rozpoczęciem produkcji.
_Avoid_: Pełna przedpłata za modelowanie, płatność dopiero po zakończeniu, zadatek

**Rozliczenie rezygnacji z modelowania**:
Indywidualne ustalenie należności po rezygnacji klienta na podstawie wartości wykonanej pracy i kosztów, których MM3D nie oszczędzi wskutek przerwania projektu. Całe pierwsze 50% pozostaje u MM3D, gdy uzasadnia to zaawansowanie i wartość realizacji; nie jest to automatyczny przepadek zaliczki niezależny od wykonanej pracy.
_Avoid_: Automatyczny przepadek 50%, bezwarunkowy zwrot całej płatności, bezpłatne przekazanie modelu cyfrowego

**Wydanie pliku po rezygnacji**:
Wyjątkowe przekazanie pliku do druku klientowi, który po ukończeniu modelowania rezygnuje z pozostałej fizycznej realizacji. Wymaga akceptacji modelu i rozliczenia wykonanej pracy, przy czym łączna wpłata klienta nie może być niższa niż 50% wartości całego zaakceptowanego zlecenia.
_Avoid_: Automatyczne wydanie pliku, bezpłatne przekazanie modelu, automatyczny przepadek zaliczki

**Niewykonanie dalszej realizacji przez MM3D**:
Sytuacja, w której MM3D ukończyło zaakceptowany model, ale nie może wykonać pozostałego druku, malowania lub dostawy. Klient otrzymuje plik do druku, płaci uzgodnioną cenę modelowania i otrzymuje zwrot należności za niewykonany zakres, bez automatycznego minimum 50% wartości całego zlecenia.
_Avoid_: Rezygnacja klienta, pełna realizacja, automatyczne zatrzymanie 50%

**Przerwanie modelowania przez MM3D**:
Zakończenie pracy przez MM3D przed powstaniem zaakceptowanego, gotowego modelu. Klient otrzymuje zwrot za niewykonany zakres, a niedokończony plik roboczy nie jest wydawany automatycznie; przekazanie użytecznych materiałów do kontynuacji u innego wykonawcy wymaga indywidualnego ustalenia.
_Avoid_: Ukończony plik produkcyjny, rezygnacja klienta, automatyczne przekazanie źródła

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

**Usuwanie podpór**:
Opcjonalna, dodatkowo wyceniana usługa oczyszczenia wydruku wykonanego przez MM3D z konstrukcji podporowych po zakończeniu druku. Klient wybiera ją niezależnie od szlifowania i malowania.
_Avoid_: Przygotowanie druku, usługa wliczona automatycznie, szlifowanie

**Szlifowanie wydruku**:
Opcjonalna, dodatkowo wyceniana obróbka powierzchni wydruku wykonanego przez MM3D. Klient wybiera ją niezależnie od usuwania podpór i malowania.
_Avoid_: Usuwanie podpór, automatyczne wygładzenie, przygotowanie druku

**Malowanie modelu**:
Opcjonalna, zawsze indywidualnie wyceniana usługa ręcznego malowania wydruku wykonanego przez MM3D według opisu i referencji klienta, standardowo zakończona zabezpieczeniem lakierem bezbarwnym. Nie wymaga osobnego zatwierdzenia kolorystyki przygotowanej przez MM3D; niejasności są wyjaśniane przed pracą, późniejsza zmiana referencji wymaga dodatkowej wyceny, a niezgodność z nimi MM3D poprawia na własny koszt.
_Avoid_: Kolor standardowy, kolor filamentu lub żywicy, usługa wliczona automatycznie

**Lakier zabezpieczający**:
Bezbarwna warstwa ochronna nakładana standardowo na każdy model malowany przez MM3D. Jej rodzaj i efekt powierzchni — matowy, satynowy albo błyszczący — są częścią indywidualnych ustaleń dotyczących realizacji.
_Avoid_: Opcjonalne zabezpieczenie, kolor modelu, podkład malarski

**Wycena malowania**:
Ostateczna, indywidualna cena malowania potwierdzana po akceptacji niemalowanego prototypu finalnego i opłacana przed rozpoczęciem usługi. Wcześniejsza wycena modelowania może zawierać jedynie szacunkowy koszt malowania.
_Avoid_: Stały cennik malowania, cena od, cena modelowania

**Akceptacja malowania**:
Wyraźne potwierdzenie przez klienta na podstawie zdjęć, że ukończone malowanie odpowiada wcześniej zaakceptowanemu kierunkowi, wymagane przed wysyłką modelu; brak odpowiedzi nie jest akceptacją. Potwierdzenie nie ogranicza prawa do reklamowania wad, których nie można było ocenić na zdjęciach.
_Avoid_: Akceptacja wyceny, milcząca zgoda, zrzeczenie się reklamacji

**Dopuszczalna różnica malowania**:
Niewielka różnica względem wizualizacji, materiału referencyjnego albo innego egzemplarza z ręcznie malowanej serii, która nie zmienia uzgodnionego charakteru, kolorystyki ani jakości pracy. Wyraźna niezgodność z zaakceptowanym kierunkiem nie jest dopuszczalną różnicą, a podwyższona powtarzalność serii wymaga osobno uzgodnionego wzorca i tolerancji.
_Avoid_: Dowolna zmiana, wada ukryta, wyraźna niezgodność

**Trwałość malowania**:
Odporność pomalowanej powierzchni dobrana przez MM3D do sposobu i warunków użytkowania opisanych przez klienta, bez ogólnej gwarancji odporności na każde oddziaływanie. Naturalne zużycie i użytkowanie niezgodne z przekazanymi warunkami nie są wadą wykonania.
_Avoid_: Niezniszczalna powłoka, bezwarunkowa odporność, wada wykonania

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
Skuteczna pełna płatność przez Paynow przypisana do wybranego wariantu aktualnej wersji wyceny i wykonana w okresie jej ważności. Jednocześnie wyraża zgodę klienta na warunki wariantu, zamyka pozostałe warianty tej sprawy i tworzy opłacone zamówienie bez osobnej akceptacji e-mailowej.
_Avoid_: Milcząca zgoda, odpowiedź e-mail bez płatności, płatność za nieaktualną wycenę

**Akceptacja regulaminu**:
Obowiązkowe, domyślnie niezaznaczone oświadczenie klienta składane w końcowym podsumowaniu wybranego wariantu bezpośrednio przed przejściem do Paynow. Nie jest wymagana do wysłania samego zapytania ofertowego, a MM3D zachowuje dowód zaakceptowania właściwej wersji dokumentu.
_Avoid_: Zgoda na kontakt, informacja o prywatności, pole zaznaczone w formularzu zapytania

**Przedpłata**:
Pełna płatność przez Paynow wymagana przed rozpoczęciem indywidualnego druku. W podstawowym procesie jest zarazem akceptacją aktualnej wyceny i momentem utworzenia zamówienia, a potwierdzony czas realizacji biegnie od potwierdzenia wpłaty.
_Avoid_: Osobna płatność po akceptacji, płatność po wykonaniu, rozpoczęcie przed potwierdzeniem wpłaty

**Nieudana płatność**:
Próba zapłaty za wariant, która nie została potwierdzona przez Paynow z powodu odrzucenia, błędu, anulowania, przerwania albo wygaśnięcia. Nie tworzy zamówienia i po zakończeniu blokady nie zamyka wariantów; klient może ponowić płatność lub wybrać inną opcję, jeżeli wersja wyceny nadal jest aktualna i ważna.
_Avoid_: Opłacone zamówienie, wygasła wycena, rezygnacja z zapytania

**Płatność oczekująca na potwierdzenie**:
Płatność rozpoczęta w okresie ważności wyceny, dla której Paynow nie przekazało jeszcze wyniku końcowego. Nie tworzy jeszcze zamówienia i tymczasowo blokuje pozostałe warianty oraz kolejne próby; późniejsze potwierdzenie tworzy zamówienie także po upływie ważności wyceny, a odrzucenie lub wygaśnięcie przechodzi do zasad nieudanej płatności.
_Avoid_: Potwierdzona płatność, nieudana płatność, rezerwacja terminu realizacji

**Potwierdzenie zamówienia**:
Strona wyświetlana klientowi oraz automatyczna wiadomość e-mail generowane dopiero po potwierdzeniu pełnej płatności przez Paynow. Oba potwierdzenia używają numeru sprawy i pokazują wybrany wariant, zapłaconą kwotę, dane dostawy i nabywcy oraz potwierdzony termin; e-mail dodatkowo pozwala zgłosić problem lub reklamację przez odpowiedź w tym samym wątku. Nie wymaga ręcznego potwierdzenia MM3D.
_Avoid_: Potwierdzenie zapytania, sam powrót z Paynow, ręczna akceptacja zamówienia

**Dane dostawy**:
Komplet informacji potrzebnych MM3D do zamówienia wysyłki opłaconego zamówienia, podawany albo potwierdzany przez klienta po wyborze wariantu i bezpośrednio przed przejściem do Paynow. Obejmuje imię i nazwisko odbiorcy, adres e-mail, numer telefonu oraz numer Paczkomatu albo pełny adres dla kuriera; klient nie kupuje przesyłki i nie przekazuje kodu nadania.
_Avoid_: Dane kontaktowe zapytania, sam wybór metody dostawy, dane podawane dopiero po płatności

**Dane nabywcy**:
Informacje podawane albo potwierdzane przed przejściem do Paynow, obejmujące dwa odrębne wybory: klient indywidualny albo firma oraz żądanie faktury albo jego brak. Zakup firmowy i faktura ujawniają odpowiednie pola, w tym nazwę, NIP i adres, a dokładny zestaw zależy od zasad potwierdzonych przez księgowego lub prawnika.
_Avoid_: Dane dostawy, dane kontaktowe zapytania, dane uzupełniane dopiero po płatności

**Korekta danych przed płatnością**:
Samodzielna poprawa przez klienta danych dostawy, kontaktowych albo nabywcy w końcowym podsumowaniu, która nie zmienia zakresu, ceny ani terminu wybranego wariantu. Zmiana wariantu, liczby, wymiaru, usług lub kosztu dostawy nie jest korektą danych i wymaga nowej wersji wyceny od MM3D.
_Avoid_: Zmiana zamówienia, nowy wariant, korekta ceny przez klienta

**Gabaryt przesyłki**:
Rozmiar przesyłki wybierany przez MM3D przy zamawianiu dostawy InPost na podstawie wymiarów gotowego, zabezpieczonego produktu i użytego opakowania. Klient nie określa gabarytu, ponieważ przed realizacją nie zna końcowej wielkości paczki.
_Avoid_: Wymiar modelu, wybór klienta, kod nadania klienta

**Czas odpowiedzi na zapytanie**:
Maksymalnie dwa dni robocze od otrzymania zapytania albo późniejszej odpowiedzi klienta zawierającej informacje potrzebne do następnego działania MM3D. Kończy się wysłaniem wyceny, kolejnego koniecznego pytania albo odmowy i biegnie ponownie po następnym wymaganym uzupełnieniu klienta; nie jest czasem zakończenia wyceny ani realizacji wydruku.
_Avoid_: Czas realizacji, termin dostawy, dwa dni na zakończenie wszystkich uzgodnień

**Wynik oceny zapytania**:
Odpowiedź MM3D po analizie zapytania: gotowa wycena, prośba o doprecyzowanie albo odmowa realizacji z przyczyną. Każde zapytanie otrzymuje jeden z tych wyników.
_Avoid_: Automatyczna akceptacja, brak odpowiedzi

**Wstrzymana sprawa**:
Zapytanie ofertowe oczekujące na informacje klienta, przeniesione do stanu bez dalszych działań MM3D po jednym przypomnieniu po 5 dniach roboczych i kolejnych 5 dniach bez odpowiedzi. Klient może je później wznowić w tym samym wątku i z tym samym numerem, ale wcześniejsze rozmowy nie gwarantują przyszłej ceny ani dostępności.
_Avoid_: Wygasła wycena, zamknięte zamówienie, wstrzymanie opłaconego projektu

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
