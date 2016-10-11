# Příklad ke školení responzivního designu

## Instalace projektu

Nejprve si musíte nainstalovat [NPM a celý Node.js ekosystém](http://www.vzhurudolu.cz/prirucka/node-instalace).

Pak tento konkrétní projekt:

```bash
# naklonování projektu
git clone https://github.com/machal/space-example.git

# přechod do adresáře
cd space-example

# instalace závislosti
npm install

# spuštění webu v prohlížeči hlavní Grunt úlohou
grunt
```

## Struktura stylů

* `src/less/index.less` – hlavní LESS soubor
* `src/less/base/` – komponenty pro textový, vertikální design
* `src/less/components/` – pokročilejší komponenty uživatelského rozhraní
* `src/less/core/` – pomocné funkce, mixiny…
* `src/less/layout/` – layout stránky
* `src/less/lib/` – knihovny

Gruntem kompilujeme do `dist/css/style.css`. Více [o organizaci CSS](http://www.vzhurudolu.cz/blog/29-organizace-css-2014).

## Javascript

* `src/js/index.js` – hlavní JS soubor

Závislosti řešíme pomocí Browserify.

## Závislosti

### Vývojářské i uživatelské závislosti – NPM

Vývojářské závislosti ([Grunt](http://www.vzhurudolu.cz/prirucka/grunt) a [pluginy](http://www.vzhurudolu.cz/prirucka/grunt-pluginy),
které potřebuje vývojář) ale i uživatelské závislosti (jQuery a pluginy, které potřebuje uživatel webu)
spravujeme spravujeme pomocí [Node Packages Managera](https://www.npmjs.com/). Viz konfigurák [package.json](./package.json).

## Sestavování pomocí Grunt.js

Důležité tásky:

* `grunt` - spustí vše a nastartuje vývojový server, otevře prohlížeč s nastartovanou synchronizací a pustí hlídání změn
* Pro jednotlivé typy assetů se může hodit `grunt img`, `grunt css`, `grunt js`.

Viz [Gruntfile.js](./Gruntfile.js).

---

Autor: Martin Michálek, martin@vzhurudolu.cz

Určeno pro [školení responzivního designu](http://www.vzhurudolu.cz/kurzy/responzivni-design).
