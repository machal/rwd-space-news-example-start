# Příklad ke školení responzivního designu

Responzivní design: http://www.vzhurudolu.cz/kurzy/responzivni-design

**Autor:** Martin Michálek, martin@vzhurudolu.cz

## Struktura stylů

* `src/less/index.less` – hlavní LESS soubor
* `src/less/base/` – komponenty pro textový, vertikální design
* `src/less/components/` – pokročilejší komponenty uživatelského rozhraní
* `src/less/core/` – pomocné funkce, mixiny…
* `src/less/layout/` – layout stránky
* `src/less/lib/` – knihovny

Kompilujeme do `dist/css/style.css`.

## Javascript

* `src/js/index.js` – hlavní JS soubor

Závislosti řešíme pomocí Browserify.

## Závislosti 

### Vývojářské závislosti – npm

Vývojářské závislosti ([Grunt](http://www.vzhurudolu.cz/prirucka/grunt) a [pluginy](http://www.vzhurudolu.cz/prirucka/grunt-pluginy), které pomáhají vývojáři) spravujeme pomocí https://www.npmjs.com/. Viz konfigurák [package.json](./package.json).

### Uživatelské závislosti - Bower

Uživatelské závislosti (jQuery a pluginy, které potřebuje uživatel webu) spravujeme pomocí [Boweru](http://www.vzhurudolu.cz/prirucka/bower). Viz konfigurák [bower.json](./bower.json).

## Sestavování pomocí Grunt.js

Důležité tásky:

* `grunt` - spustí vše a nastartuje vývojový server, otevře prohlížeč s nastartovanou synchronizací a pustí hlídání změn
* Pro jednotlivé typy assetů se může hodit `grunt img`, `grunt css`, `grunt js`.

Viz [Gruntfile.js](./Gruntfile.js).

## Instalace projektu

Nejprve si musíte nainstalovat [NPM a celý Node.js ekosystém](http://www.vzhurudolu.cz/prirucka/node-instalace).

Pak tento konkrétní projekt:

```bash
# naklonování projektu
git clone https://github.com/machal/space-example.git
# vývojářské závislosti
npm install
# uživatelské závislosti
bower install
# spuštění hlavního Grunt tasku
grunt
```











